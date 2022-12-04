import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <footer class={'footer px-4 py-2 mx-auto sm:max-w-4xl'}>
      <ul role={'list'} class={'flex gap-2'}>
        <li>
          <a href="/thoughts">Thoughts</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </footer>
  );
});
