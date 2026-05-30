import { useState, useEffect } from "react";
import { Link } from "react-router";
import { SparklesIcon, ArrowRightIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemOfTheDay({ problems }) {
    const [problem, setProblem] = useState(null);

    useEffect(() => {
        if (!problems.length) return;
        
        const today = new Date().toDateString();
        const stored = localStorage.getItem("problemOfTheDay");
        
        if (stored) {
            const { date, problemId } = JSON.parse(stored);
            if (date === today) {
                const found = problems.find(p => p.id === problemId);
                if (found) {
                    setProblem(found);
                    return;
                }
            }
        }
        
        // Pick random problem
        const randomIndex = Math.floor(Math.random() * problems.length);
        const randomProblem = problems[randomIndex];
        setProblem(randomProblem);
        
        // Save for today
        localStorage.setItem("problemOfTheDay", JSON.stringify({
            date: today,
            problemId: randomProblem.id
        }));
    }, [problems]);

    if (!problem) return null;

    return (
        <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 mb-6">
            <div className="card-body p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <SparklesIcon className="size-5 text-primary" />
                        <h3 className="font-bold">Problem of the Day</h3>
                    </div>
                    <Link to={`/problem/${problem.id}`} className="btn btn-primary btn-sm gap-1">
                        Solve <ArrowRightIcon className="size-3" />
                    </Link>
                </div>
                
                <div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">{problem.title}</span>
                        <span className={`badge badge-xs ${getDifficultyBadgeClass(problem.difficulty)}`}>
                            {problem.difficulty}
                        </span>
                    </div>
                    <p className="text-sm text-base-content/70 mt-1 line-clamp-1">
                        {problem.category}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProblemOfTheDay;