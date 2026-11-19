import { useUser} from '@clerk/clerk-react'
import { Routes, Route, Navigate } from 'react-router';
import { lazy, Suspense } from 'react';
import HomePage from './pages/HomePage';
import ProblemsPage from './pages/ProblemsPage';
import { Toaster } from 'react-hot-toast';
import DashboardPage from './pages/DashboardPage';

//These pages pull in the Monaco editor, so they load on demand.
const ProblemPage = lazy(() => import('./pages/ProblemPage'));
const SessionPage = lazy(() => import('./pages/SessionPage'));

function App() {

  const {isSignedIn, isLoaded} = useUser()

  if(!isLoaded) return null

  return (
    <>
      <Suspense fallback={
        <div className="flex min-h-screen items-center justify-center bg-base-300">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      }>
        <Routes>
          <Route path='/' element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />}/>
          <Route path='/dashboard' element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />}/>

          <Route path='/problems' element={isSignedIn ? <ProblemsPage />: <Navigate to={'/'}/>}/>
          <Route path='/problem/:id' element={isSignedIn ? <ProblemPage />: <Navigate to={'/'}/>}/>
          <Route path='/session/:id' element={isSignedIn ? <SessionPage />: <Navigate to={'/'}/>}/>
        </Routes>
      </Suspense>

      <Toaster toastOptions={{duration: 3000}} />
    </>
  );
}

export default App;
