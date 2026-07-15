import type { NextFunction, Request, Response } from 'express'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase.js'
import { syncUser } from '../lib/syncUser.js'
import type { User as PrismaUser } from '../generated/prisma/client.js'

declare global {
  namespace Express {
    interface Request {
      user?: SupabaseUser
      dbUser?: PrismaUser
    }
  }
}

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization
  const token = authHeader?.startsWith('Bearer ') ? authHeader.slice('Bearer '.length) : undefined

  if (!token) {
    res.status(401).json({ status: 'error', message: 'Missing bearer token' })
    return
  }

  try {
    const { data, error } = await supabase.auth.getUser(token)

    if (error || !data.user) {
      res.status(401).json({ status: 'error', message: 'Invalid or expired token' })
      return
    }

    req.user = data.user
    req.dbUser = await syncUser(data.user)
    next()
  } catch (err) {
    next(err)
  }
}
