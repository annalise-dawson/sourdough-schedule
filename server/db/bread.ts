import connection from './connection.ts'
import { Steps } from '../../models/steps.ts'

export async function getAllBreadSteps(db = connection): Promise<Steps[]> {
  return db('sds').select('id', 'instructions', 'set_time as setTime')
}
