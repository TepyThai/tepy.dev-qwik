import { z } from 'zod';
import { t } from '../trpc';

export const appRouter = t.router({
  hi: t.procedure.input(z.string()).query(({ input }) => `hi ${input}`),
});

export type AppRouter = typeof appRouter;
