import { Router } from 'express'

import * as db from '../db/starter.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const steps = await db.getAllStarterSteps()

    res.json(steps)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
