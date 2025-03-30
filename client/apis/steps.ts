import request from 'superagent'

export async function getSteps() {
  const response = await request.get('/api/v1/steps')
  return response.body
}
