import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useMe } from '../hooks/useMe'
import { setRole } from '../lib/api'
import { Button } from '../components/Button'
import { Spinner } from '../components/Spinner'

export function Onboarding() {
  const { me, loading, refetch } = useMe()
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  if (loading) {
    return <Spinner />
  }

  if (me?.role) {
    return <Navigate to="/dashboard" replace />
  }

  async function pickRole(role: 'TEACHER' | 'STUDENT') {
    setSubmitting(true)
    await setRole(role)
    await refetch()
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 bg-neutral-bg">
      <h1 className="text-2xl font-semibold text-neutral-heading">
        Are you a Teacher or a Student?
      </h1>
      <div className="flex gap-4">
        <Button variant="primary" disabled={submitting} onClick={() => pickRole('TEACHER')}>
          Teacher
        </Button>
        <Button variant="secondary" disabled={submitting} onClick={() => pickRole('STUDENT')}>
          Student
        </Button>
      </div>
    </div>
  )
}
