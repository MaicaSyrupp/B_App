import { Router } from 'express'
import { requireAuth } from '../middleware/requireAuth.js'
import { prisma } from '../lib/prisma.js'

export const meRouter = Router()

meRouter.use(requireAuth)

meRouter.get('/', (req, res) => {
  res.json(req.dbUser)
})

meRouter.patch('/role', async (req, res, next) => {
  try {
    const { role } = req.body as { role?: string }

    if (role !== 'TEACHER' && role !== 'STUDENT') {
      res.status(400).json({ status: 'error', message: 'role must be TEACHER or STUDENT' })
      return
    }

    if (req.dbUser!.role) {
      res.status(409).json({ status: 'error', message: 'Role is already set' })
      return
    }

    const updated = await prisma.user.update({
      where: { id: req.dbUser!.id },
      data: { role },
    })

    res.json(updated)
  } catch (err) {
    next(err)
  }
})
