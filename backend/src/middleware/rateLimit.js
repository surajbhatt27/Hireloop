/**
 * Small in-memory rate limiter.
 * Tracks request timestamps per key inside a sliding window.
 */
export const createRateLimiter = ({
    windowMs,
    max,
    message,
    keyFn = (req) => req.user?._id?.toString() || req.ip
}) => {
    const hits = new Map()

    //Prune stale entries so the map cannot grow without bound.
    const cleanupTimer = setInterval(() => {
        const now = Date.now()
        for (const [id, timestamps] of hits) {
            const live = timestamps.filter(t => now - t < windowMs)
            if (live.length === 0) hits.delete(id)
            else hits.set(id, live)
        }
    }, Math.max(windowMs, 60000))

    if (typeof cleanupTimer.unref === 'function') cleanupTimer.unref()

    return (req, res, next) => {
        const id = keyFn(req)
        const now = Date.now()

        const timestamps = (hits.get(id) || []).filter(t => now - t < windowMs)

        if (timestamps.length >= max) {
            const retryAfter = Math.ceil((windowMs - (now - timestamps[0])) / 1000)
            res.set('Retry-After', String(retryAfter))
            return res.status(429).json({
                message: message || `Too many requests. Try again in ${retryAfter} seconds.`
            })
        }

        timestamps.push(now)
        hits.set(id, timestamps)
        next()
    }
}
