import { Router } from 'express'

import * as db from '../db/bread.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const steps = await db.getAllBreadSteps()

    res.json(steps)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
