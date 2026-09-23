import { useQuery } from '@tanstack/react-query';

// Returns true if data exists in the cache for this key
export function checkCachePresence(queryKey: string[]) {
  return useQuery({
    queryKey,
    queryFn: () => {},       // never actually fetches
    enabled: false,           // disabled — just reads the cache don't  default get..that doesn't re-render or something
  });
}