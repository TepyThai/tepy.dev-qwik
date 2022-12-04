import { component$, Slot } from '@builder.io/qwik';
import { Link, LinkProps, useLocation } from '@builder.io/qwik-city';

interface Props extends LinkProps {
  to: string;
}

export default component$(({ to }: Props) => {
  const { pathname } = useLocation();
  const active = pathname.startsWith(to);

  return (
    <Link
      href={to}
      class={`mr-2 last-of-type:mr-0 ${
        active && 'text-teal-600 font-semibold'
      }`}
    >
      <div
        class={`sm:border-0 border-2 border-solid border-current rounded-full p-1 ${
          active && 'border-teal-600'
        }`}
      >
        <Slot />
      </div>
    </Link>
  );
});
