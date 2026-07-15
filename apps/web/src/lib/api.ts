import { supabase } from './supabase'

const API_URL = import.meta.env.VITE_API_URL

export interface MeResponse {
  id: string
  supabaseId: string
  email: string
  name: string
  role: 'TEACHER' | 'STUDENT' | null
  createdAt: string
  updatedAt: string
}

async function authFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(session ? { Authorization: `Bearer ${session.access_token}` } : {}),
      ...init.headers,
    },
  })

  if (!res.ok) {
    throw new Error(`Request to ${path} failed with status ${res.status}`)
  }

  return res.json() as Promise<T>
}

export function fetchMe(): Promise<MeResponse> {
  return authFetch<MeResponse>('/api/me')
}

export function setRole(role: 'TEACHER' | 'STUDENT'): Promise<MeResponse> {
  return authFetch<MeResponse>('/api/me/role', {
    method: 'PATCH',
    body: JSON.stringify({ role }),
  })
}
