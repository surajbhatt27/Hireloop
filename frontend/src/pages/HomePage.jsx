import { Link } from 'react-router'
import { ArrowRightIcon, Check, Code2Icon, GitMerge, UsersIcon, VideoIcon, Timer, SparklesIcon, Brain, Target, Rocket, Compass, Github, Twitter, Linkedin, Instagram, Code2, FileCode2, UserPlus, Video, Play, BadgeIndianRupee } from 'lucide-react'
import { SignInButton } from '@clerk/clerk-react'

function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
            {/* Navbar */}
            <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                    <Link to={'/'} className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                        <div className='size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg'>
                            <GitMerge className='size-5 text-white'/>
                        </div>
                        <div>
                            <span className='font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'>PairUp</span>
                            <p className='text-[10px] text-base-content/50 -mt-1'>Code. Collaborate. Conquer.</p>
                        </div>
                    </Link>
                    
                        <SignInButton mode="modal">
                            <button className='px-5 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105'>
                                Let's Code
                            </button>
                        </SignInButton>
                    </div>
            </nav>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                
                <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full w-fit">
                                <Code2 className="size-4 text-primary" />
                                <span className="text-sm font-medium">Real-time Pair Programming</span>
                            </div>
                            
                            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                    Code Together,
                                </span>
                                <br />
                                <span className="text-base-content">Interview Better</span>
                            </h1>
                            
                            <p className="text-xl text-base-content/70 leading-relaxed">
                                Practice coding problems live with peers. Get instant feedback, 
                                collaborate in real-time, and ace your technical interviews.
                            </p>
                            
                                <SignInButton mode="modal">
                                    <button className="btn btn-primary btn-lg gap-2">
                                        Start Coding Free
                                        <ArrowRightIcon className="size-5" />
                                    </button>
                                </SignInButton>
                            
                            {/* Features list */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center gap-2">
                                    <Check className="size-4 text-success" />
                                    <span className="text-sm">Live video chat</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="size-4 text-success" />
                                    <span className="text-sm">Collaborative editor</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="size-4 text-success" />
                                    <span className="text-sm">15+ languages</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Content - Hero Image */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20" />
                            <div className="relative rounded-2xl shadow-2xl border border-base-300 overflow-hidden bg-base-100">
                                <img 
                                    src="/hero.png" 
                                    alt="PairUp Platform Screenshot"
                                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            
                            {/* Floating badges */}
                            <div className="absolute -top-4 -right-4 bg-success/10 backdrop-blur rounded-full px-4 py-2 border border-success/30">
                                <div className="flex items-center gap-2">
                                    <VideoIcon className="size-4 text-success" />
                                    <span className="text-sm font-medium">Live Video</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-primary/10 backdrop-blur rounded-full px-4 py-2 border border-primary/30">
                                <div className="flex items-center gap-2">
                                    <UsersIcon className="size-4 text-primary" />
                                    <span className="text-sm font-medium">Pair Programming</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        How <span className="text-primary">PairUp</span> Works
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Three simple steps to start practicing
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <FileCode2 className="size-10 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">1. Choose a Problem</h3>
                        <p className="text-base-content/70">Pick from 250+ coding problems ranging from easy to hard</p>
                    </div>
                    
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                            <UserPlus className="size-10 text-secondary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">2. Invite a Partner</h3>
                        <p className="text-base-content/70">Share a link or find a peer to practice with</p>
                    </div>
                    
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                            <Code2 className="size-10 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">3. Code Together</h3>
                        <p className="text-base-content/70">Solve problems in real-time with video and chat</p>
                    </div>
                </div>
            </div>

            {/* Why PairUp Section */}
            <div className="bg-base-200/50 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            Why You'll <span className="text-primary">love PairUp</span>
                        </h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-4 p-6 bg-base-100 rounded-xl border border-base-300">
                            <Video className="size-8 text-primary shrink-0" />
                            <div>
                                <h3 className="font-bold mb-2">Real Interview Experience</h3>
                                <p className="text-base-content/70">Practice exactly how technical interviews work - live coding with someone watching</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 p-6 bg-base-100 rounded-xl border border-base-300">
                            <Timer className="size-8 text-secondary shrink-0" />
                            <div>
                                <h3 className="font-bold mb-2">Timed Practice</h3>
                                <p className="text-base-content/70">Set time limits to improve your speed and pressure management</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 p-6 bg-base-100 rounded-xl border border-base-300">
                            <Play className="size-8 text-accent shrink-0" />
                            <div>
                                <h3 className="font-bold mb-2">Instant Code Execution</h3>
                                <p className="text-base-content/70">Run your code in 16+ languages and see output immediately</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 p-6 bg-base-100 rounded-xl border border-base-300">
                            <BadgeIndianRupee className="size-8 text-success shrink-0" />
                            <div>
                                <h3 className="font-bold mb-2">Completely Free</h3>
                                <p className="text-base-content/70">No hidden costs, no credit card required. Just pure coding practice</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Ready to ace your next interview?
                    </h2>
                    <p className="text-lg text-base-content/70 mb-8">
                        Join developers who are already using PairUp to prepare
                    </p>
                    <SignInButton mode="modal">
                        <button className="btn btn-primary btn-lg gap-2">
                            Get Started Now
                            <ArrowRightIcon className="size-5" />
                        </button>
                    </SignInButton>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-base-300 py-12 px-6 bg-base-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <GitMerge className="w-5 h-5 text-primary" />
                                <span className="font-semibold text-lg">PairUp</span>
                            </div>
                            <p className="text-sm text-base-content/60 leading-relaxed">
                                Real-time pair programming platform for technical interview preparation.
                            </p>
                        </div>

                        {/* Connect */}
                        <div>
                            <h4 className="font-medium mb-3">Connect</h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/surajbhatt27"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base-content/60 hover:text-primary transition"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://twitter.com/surj_bhtt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base-content/60 hover:text-primary transition"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/suraj-bhatt-574b0426a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base-content/60 hover:text-primary transition"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://instagram.com/surj_bhtt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base-content/60 hover:text-primary transition"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Feedback */}
                        <div>
                            <h4 className="font-medium mb-3">Found a bug?</h4>
                            <p className="text-sm text-muted mb-2">
                                Let me know and I'll fix it.
                            </p>
                            <a
                                href="mailto:bhattsuraj1027@gmail.com"
                                className="text-sm text-primary hover:underline"
                            >
                                bhattsuraj1027@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-base-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
                        <p className="text-xs text-base-content/40">
                            © 2026 PairUp
                        </p>
                        <div className="flex gap-4 text-xs text-base-content/40">
                            <a 
                                href="https://github.com/surajbhatt27/Hireloop" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-primary transition"
                            >
                                GitHub
                            </a>
                            <span>•</span>
                            <span>Open Source</span>
                            <span>•</span>
                            <span>Free Forever</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage