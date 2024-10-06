import { useState } from 'react'
import './App.css'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import app from '../firebase.confiq'

function App() {

  const [user, setUser] = useState(null)

  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider()

  const googleSignInHandle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const logoutHandle = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }


  return (
    <div className='container'>
      <h1 className='text-3xl font-bold'>Firebase Auth</h1>


      {user &&
        <div className="flex gap-3 my-4 flex-col items-center">
          <img src={user.photoURL} alt={user.displayName} className='w-24 h-24 rounded-full' />
          <h4>UserName: {user.displayName}</h4>
          <p>UserEmail: {user.email}</p>
        </div>
      }
      {!user ? <div className="flex items-center gap-2 justify-center my-4">
        <button onClick={() => googleSignInHandle()} className='btn btn-outline btn-info btn-sm'>Google signIn</button>
        <button className='btn btn-outline btn-info btn-sm'>Github signIn</button>
        <button className='btn btn-outline btn-info btn-sm'>Twitter signIn</button>
      </div> :
        <button onClick={() => logoutHandle()} className='btn btn-outline btn-error btn-sm'>Logout</button>
      }
    </div>
  )
}

export default App
