import { component$, Slot } from '@builder.io/qwik';
import Footer from '~/components/footer/footer';
import Header from '~/components/header/header';

export default component$(() => {
  return (
    <div
      class={
        'layout text-primary-light bg-primary-dark dark:text-primary-dark dark:bg-primary-light'
      }
    >
      <div class={'container mx-auto'}>
        <Header />
        <main class={'main px-4 py-2 mx-auto sm:max-w-4xl'}>
          <Slot />
        </main>
        <Footer />
      </div>
    </div>
  );
});
