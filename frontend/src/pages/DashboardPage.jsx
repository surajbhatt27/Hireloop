import {useNavigate,} from "react-router"
import {useUser} from "@clerk/clerk-react"
import { useState } from "react"
import {useActiveSession, useMyRecentSession, useCreateSession} from "../hooks/useSessions"
import { PROBLEMS } from "../data/problems"

import Navbar from "../components/Navbar"
import WelcomeSection from "../components/WelcomeSection"
import StatsCards from "../components/StatsCards"
import ActiveSessions from "../components/ActiveSessions"
import RecentSessions from "../components/RecentSessions"
import CreateSessionModel from "../components/CreateSessionModel"
import toast from "react-hot-toast"

function DashboardPage() {
    const navigate = useNavigate()
    const {user} = useUser()
    const [showCreateModel, setShowCreateModel] = useState(false)
    const [roomConfig, setRoomConfig] = useState({ problem: "", problemId: "", difficulty: "", isPrivate: false, duration: null})

    const createSessionMutation = useCreateSession()

    const {data:activeSessionsData, isLoading:loadingActiveSessions} = useActiveSession()
    const {data:recentSessionsData, isLoading:loadingRecentSessions} = useMyRecentSession()

    const handleCreateRoom = () => {
        if(!roomConfig.problem || !roomConfig.difficulty) return

        createSessionMutation.mutate({
            problem: roomConfig.problem,
            problemId: roomConfig.problemId,
            difficulty: roomConfig.difficulty.toLowerCase(),
            isPrivate: roomConfig.isPrivate || false,
            duration: roomConfig.duration,
            //The backend seeds the shared buffers with this, so both
            //participants start from the same starter code.
            starterCode: PROBLEMS[roomConfig.problemId]?.starterCode || {}
        }, {
            onSuccess: (data) => {
                setShowCreateModel(false)
                
                // If private session
                if(roomConfig.isPrivate) {
                    const inviteLink = `${window.location.origin}/session/${data.session._id}`
                    const copyAndJoin = confirm(
                        `Private session created!\n\nInvite link: ${inviteLink}\n\nClick OK to copy link and join session, Cancel to just join.`
                    )
                    if(copyAndJoin) {
                        navigator.clipboard.writeText(inviteLink)
                        toast.success("Invite link copied to clipboard!")
                    }
                }
                
                navigate(`/session/${data.session._id}`)
            }
        })
    }
    
    const activeSessions = (activeSessionsData?.sessions || []).filter(
        session => session.status === "active"
    );
    const recentSessions = recentSessionsData?.sessions || [];

    const isUserInSession = (session) => {
        if(!user.id) return false

        return session.host?.clerkId === user.id || session.participant?.clerkId === user.id
    }

    return (
        <>
            <div className="min-h-screen bg-base-300">
                <Navbar/>
                <WelcomeSection onCreateSession={() => setShowCreateModel(true)}/>

                {/** Grid layout */}
                <div className="container mx-auto px-6 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <StatsCards 
                            activeSessionsCount={activeSessions.length}
                            recentSessionsCount={recentSessions.length}
                        />
                        <ActiveSessions 
                            sessions={activeSessions}
                            isLoading={loadingActiveSessions}
                            isUserInSession={isUserInSession}
                        />
                    </div>

                    <RecentSessions 
                        sessions={recentSessions} isLoading={loadingRecentSessions}
                    />
                </div>
            </div>

            <CreateSessionModel
                isOpen={showCreateModel}
                onClose={() => setShowCreateModel(false)}
                roomConfig={roomConfig}
                setRoomConfig={setRoomConfig}
                onCreateRoom={handleCreateRoom}
                isCreating={createSessionMutation.isPending}
            />
        </>
    )
}

export default DashboardPage