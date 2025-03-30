import { useQuery } from '@tanstack/react-query'
import { getSteps } from '../apis/steps.ts'

export function useSteps() {
  return useQuery({
    queryKey: ['steps'],
    queryFn: async () => await getSteps(),
  })
}
