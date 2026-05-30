import { useEffect, useState } from "react";
import { PlayIcon, PauseIcon, RotateCcwIcon, ClockIcon } from "lucide-react";

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => setTime(prev => prev + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-1">
            <ClockIcon className="size-4 text-primary" />
            <span className="font-mono text-lg font-bold">{formatTime(time)}</span>
            <button onClick={() => setIsRunning(!isRunning)} className="btn btn-xs btn-circle">
                {isRunning ? <PauseIcon className="size-3" /> : <PlayIcon className="size-3" />}
            </button>
            <button onClick={() => { setIsRunning(false); setTime(0); }} className="btn btn-xs btn-circle">
                <RotateCcwIcon className="size-3" />
            </button>
        </div>
    );
}

export default Stopwatch;