import { useQuery } from '@tanstack/react-query'
import { getStarterSteps } from '../apis/starter.ts'

export function useStarterSteps() {
  return useQuery({
    queryKey: ['starter steps'],
    queryFn: async () => await getStarterSteps(),
  })
}
