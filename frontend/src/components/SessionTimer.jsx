import { useEffect, useState } from "react";
import { ClockIcon, AlertTriangleIcon } from "lucide-react";

function SessionTimer({ startedAt, duration, onExpire }) {
    const [timeLeft, setTimeLeft] = useState(null);
    const [isWarning, setIsWarning] = useState(false);

    useEffect(() => {
        if (!startedAt || !duration) return;

        const interval = setInterval(() => {
            const start = new Date(startedAt).getTime();
            const now = new Date().getTime();
            const elapsed = Math.floor((now - start) / 1000);
            const remaining = duration * 60 - elapsed;

            if (remaining <= 0) {
                clearInterval(interval);
                setTimeLeft(0);
                onExpire?.();
            } else {
                setTimeLeft(remaining);
                setIsWarning(remaining < 60);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [startedAt, duration, onExpire]);

    if (!duration || !startedAt || timeLeft === null) return null;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    if (timeLeft <= 0) {
        return (
            <div className="badge badge-error gap-1">
                <AlertTriangleIcon className="size-3" />
                Time's Up!
            </div>
        );
    }

    return (
        <div className={`badge gap-1 ${isWarning ? 'badge-warning animate-pulse' : 'badge-primary'}`}>
            <ClockIcon className="size-3" />
            {minutes}:{seconds.toString().padStart(2, '0')}
        </div>
    );
}

export default SessionTimer;