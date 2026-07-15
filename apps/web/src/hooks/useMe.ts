import { useCallback, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { fetchMe, type MeResponse } from '../lib/api'

export function useMe() {
  const { session } = useAuth()
  const [me, setMe] = useState<MeResponse | null>(null)
  const [loading, setLoading] = useState(true)

  const refetch = useCallback(async () => {
    if (!session) {
      setMe(null)
      setLoading(false)
      return
    }
    setLoading(true)
    const data = await fetchMe()
    setMe(data)
    setLoading(false)
  }, [session])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { me, loading, refetch }
}
