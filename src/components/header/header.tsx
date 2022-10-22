import { component$ } from '@builder.io/qwik';
import Link from '~/components/shared/link';
// import { DarkIcon } from '../icons/dark';
import { Logo } from '../icons/logo';
import { PenIcon } from '../icons/pen';
import { PersonIcon } from '../icons/person';

export default component$(() => {
  return (
    <header
      class={
        'header flex items-center justify-between px-4 py-2 mx-auto sm:max-w-3xl'
      }
    >
      <a class="logo" href="/">
        <Logo class="w-12 h-12 stroke-2" />
      </a>
      <nav class={'hidden sm:flex'}>
        <Link to="/thoughts">Thoughts</Link>
        <Link to="/about">About</Link>
      </nav>
      <nav class={'flex sm:hidden items-center justify-between gap-2'}>
        <Link to="/thoughts">
          <PenIcon />
        </Link>
        <Link to="/about">
          <PersonIcon />
        </Link>
        {/* <button class={'border-2 rounded-full p-0.5'}>
          <DarkIcon onClick$={() => console.log('dark')} />
        </button> */}
      </nav>
    </header>
  );
});
