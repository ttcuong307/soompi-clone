import { useQuery } from 'react-query';

import { getPost } from '../api/api';

export const useQueryPost = (postId: string) => {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId),
    staleTime: 6000
  })
}
