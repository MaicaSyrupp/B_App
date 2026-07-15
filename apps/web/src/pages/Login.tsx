import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Button } from '../components/Button'
import { Spinner } from '../components/Spinner'

export function Login() {
  const { session, loading, signInWithGoogle } = useAuth()

  if (loading) {
    return <Spinner />
  }

  if (session) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 bg-neutral-bg">
      <h1 className="text-2xl font-semibold text-neutral-heading">B App LMS</h1>
      <Button variant="primary" onClick={signInWithGoogle}>
        Continue with Google
      </Button>
    </div>
  )
}
