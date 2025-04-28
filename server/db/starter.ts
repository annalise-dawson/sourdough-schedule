import connection from './connection.ts'
import { Steps } from '../../models/steps.ts'

export async function getAllStarterSteps(db = connection): Promise<Steps[]> {
  return db('starter').select('id', 'instructions', 'day')
}
