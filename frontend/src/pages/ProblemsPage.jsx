import { Link } from "react-router";
import { useState } from "react";
import Navbar from "../components/Navbar"
import { PROBLEMS } from "../data/problems.js"
import { ChevronRightIcon, Code2Icon, FilterIcon, XIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils.js";
import ProblemOfTheDay from "../components/ProblemOfTheDay";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);
  
  // Filter state
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter problems based on difficulty and search
  const filteredProblems = problems.filter(problem => {
    // Difficulty filter
    if (activeFilter !== "all" && problem.difficulty.toLowerCase() !== activeFilter) {
      return false;
    }
    
    // Search filter (by title or category)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return problem.title.toLowerCase().includes(query) || 
            problem.category.toLowerCase().includes(query);
    }
    
    return true;
  });

  const easyProblemsCount = problems.filter(p => p.difficulty === "Easy").length
  const mediumProblemsCount = problems.filter(p => p.difficulty === "Medium").length
  const hardProblemsCount = problems.filter(p => p.difficulty === "Hard").length

  const getFilterButtonClass = (filter) => {
    const baseClass = "px-4 py-2 rounded-lg font-medium transition-all duration-200";
    if (activeFilter === filter) {
      switch (filter) {
        case "easy":
          return `${baseClass} bg-success/20 text-success border border-success/50`;
        case "medium":
          return `${baseClass} bg-warning/20 text-warning border border-warning/50`;
        case "hard":
          return `${baseClass} bg-error/20 text-error border border-error/50`;
        default:
          return `${baseClass} bg-primary/20 text-primary border border-primary/50`;
      }
    }
    return `${baseClass} bg-base-200 hover:bg-base-300 text-base-content/70 hover:text-base-content`;
  };

  const clearFilters = () => {
    setActiveFilter("all");
    setSearchQuery("");
  };

  return (
    <div className='min-h-screen bg-base-200'>
      <Navbar />

      <div className="w-full px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">Practice Problems</h1>
          <p className="text-base-content/70">
            Sharpen your coding skills with these curated problems
          </p>
        </div>
        <ProblemOfTheDay problems={problems} />

        {/* STATS FOOTER */}
        <div className="mb-8 card bg-base-100 shadow-lg w-full">
          <div className="card-body p-4">
            <div className="stats stats-vertical lg:stats-horizontal w-full">
              <div 
                className="stat cursor-pointer hover:bg-base-200 transition-colors rounded-lg"
                onClick={() => setActiveFilter("all")}
              >
                <div className="stat-title">Total Problems</div>
                <div className="stat-value text-primary">{problems.length}</div>
              </div>
              
              <div 
                className="stat cursor-pointer hover:bg-base-200 transition-colors rounded-lg"
                onClick={() => setActiveFilter("easy")}
              >
                <div className="stat-title">Easy</div>
                <div className="stat-value text-success">{easyProblemsCount}</div>
                <div className="stat-desc">↗️ {((easyProblemsCount / problems.length) * 100).toFixed(0)}%</div>
              </div>

              <div 
                className="stat cursor-pointer hover:bg-base-200 transition-colors rounded-lg"
                onClick={() => setActiveFilter("medium")}
              >
                <div className="stat-title">Medium</div>
                <div className="stat-value text-warning">{mediumProblemsCount}</div>
                <div className="stat-desc">↗️ {((mediumProblemsCount / problems.length) * 100).toFixed(0)}%</div>
              </div>

              <div 
                className="stat cursor-pointer hover:bg-base-200 transition-colors rounded-lg"
                onClick={() => setActiveFilter("hard")}
              >
                <div className="stat-title">Hard</div>
                <div className="stat-value text-error">{hardProblemsCount}</div>
                <div className="stat-desc">↗️ {((hardProblemsCount / problems.length) * 100).toFixed(0)}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search problems by title or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-base-100 border border-base-300 focus:border-primary focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-base-300 rounded-full transition-colors"
              >
                <XIcon className="size-4 text-base-content/50" />
              </button>
            )}
          </div>

          {/* Difficulty Filter Buttons */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 text-base-content/60 mr-2">
              <FilterIcon className="size-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            
            <button
              onClick={() => setActiveFilter("all")}
              className={getFilterButtonClass("all")}
            >
              All ({problems.length})
            </button>
            
            <button
              onClick={() => setActiveFilter("easy")}
              className={getFilterButtonClass("easy")}
            >
              Easy ({easyProblemsCount})
            </button>
            
            <button
              onClick={() => setActiveFilter("medium")}
              className={getFilterButtonClass("medium")}
            >
              Medium ({mediumProblemsCount})
            </button>
            
            <button
              onClick={() => setActiveFilter("hard")}
              className={getFilterButtonClass("hard")}
            >
              Hard ({hardProblemsCount})
            </button>

            {(activeFilter !== "all" || searchQuery) && (
              <button
                onClick={clearFilters}
                className="px-3 py-2 rounded-lg text-sm bg-base-300 hover:bg-base-400 transition-colors flex items-center gap-1"
              >
                <XIcon className="size-3" />
                Clear
              </button>
            )}
          </div>

          {/* Active Filter Indicator */}
          {(activeFilter !== "all" || searchQuery) && (
            <div className="flex flex-wrap gap-2 pt-2">
              {activeFilter !== "all" && (
                <span className="badge badge-md gap-1 bg-primary/10 text-primary border-primary/30">
                  {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
                  <button onClick={() => setActiveFilter("all")} className="ml-1 hover:opacity-70">
                    ×
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="badge badge-md gap-1 bg-primary/10 text-primary border-primary/30">
                  Search: {searchQuery}
                  <button onClick={() => setSearchQuery("")} className="ml-1 hover:opacity-70">
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-base-content/50">
          Showing {filteredProblems.length} of {problems.length} problems
        </div>

        {/* Problems List */}
        <div className="space-y-4 w-full">
          {filteredProblems.length > 0 ? (
            filteredProblems.map(problem => (
              <Link 
                key={problem.id}
                to={`/problem/${problem.id}`}
                className="card bg-base-100 hover:scale-[1.01] transition-transform cursor-pointer w-full block"
              >
                <div className="card-body p-6">
                  <div className="flex items-center justify-between gap-4">
                    {/* Left Side */}
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Code2Icon className="size-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h2 className="text-xl font-bold">{problem.title}</h2>
                            <span className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}>
                              {problem.difficulty}
                            </span>
                          </div>
                          <p className="text-sm text-base-content/60">{problem.category}</p>
                        </div>
                      </div>
                      <p className="text-base-content/80 line-clamp-2 pl-[calc(3rem+0.5rem)]">
                        {problem.description.text}
                      </p>
                    </div>
                    
                    {/* Right Side */}
                    <div className="flex items-center gap-2 text-primary shrink-0">
                      <span className="font-medium hidden sm:inline">Solve</span>
                      <ChevronRightIcon className="size-5"/>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="card bg-base-100 text-center py-16">
              <div className="card-body">
                <div className="flex flex-col items-center gap-4">
                  <div className="size-20 rounded-full bg-base-200 flex items-center justify-center">
                    <Code2Icon className="size-10 text-base-content/30" />
                  </div>
                  <h3 className="text-xl font-semibold">No problems found</h3>
                  <p className="text-base-content/60">
                    {activeFilter !== "all" 
                      ? `No ${activeFilter} problems match your search.` 
                      : "Try a different search term."}
                  </p>
                  <button 
                    onClick={clearFilters}
                    className="btn btn-primary btn-sm mt-2"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProblemsPage