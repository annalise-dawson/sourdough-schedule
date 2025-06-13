import connection from './connection.ts'
import { Steps } from '../../models/steps.ts'

export async function getAllBreadSteps(db = connection): Promise<Steps[]> {
  return db('sds').select(
    'id',
    'instructions',
    'expanded_instructions as expandedInstructions',
    'set_time as setTime',
    'timer',
  )
}
