import { useQuery } from '@tanstack/react-query';


export function checkCachePresence(queryKey: string[]) {
  return useQuery({
    queryKey,
    queryFn: () => {},       
    enabled: false,          
  });
}