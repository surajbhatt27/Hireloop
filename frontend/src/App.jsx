import './App.css'
import {SignedIn, SignedOut, SignInButton, SignOutButton, UserButton} from '@clerk/clerk-react'
function App() {

  return (
    <div>
      <h1>Welcome to our Page</h1>

      <SignedOut >
        <SignInButton mode='modal'>
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </div>
  );
}

export default App;