import { createTRPCProxyClient, httpLink } from '@trpc/client';
import superjson from 'superjson';
import { AppRouter } from '~/server/router';

export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpLink({
      url: '/api/trpc',
    }),
  ],
});
