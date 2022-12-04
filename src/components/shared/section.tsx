import { component$, Slot } from '@builder.io/qwik';
import { clsx } from 'clsx';

type Props = {
  class?: string;
};

export default component$(({ class: cl, ...props }: Props) => {
  return (
    <section class={clsx('mx-auto max-w-4xl', cl)} {...props}>
      <Slot />
    </section>
  );
});
