import request from 'superagent'

export async function getStarterSteps() {
  const response = await request.get('/api/v1/starter')
  return response.body
}
