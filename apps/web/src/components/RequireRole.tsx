import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useMe } from '../hooks/useMe'
import { Spinner } from './Spinner'

export function RequireRole({ children }: { children: ReactNode }) {
  const { me, loading } = useMe()

  if (loading) {
    return <Spinner />
  }

  if (me && !me.role) {
    return <Navigate to="/onboarding" replace />
  }

  return <>{children}</>
}
