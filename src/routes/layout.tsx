import { component$, Slot } from '@builder.io/qwik';
import Footer from '~/components/footer/footer';
import Header from '~/components/header/header';

export default component$(() => {
  return (
    <div class={'layout'}>
      <div class={'mx-auto'}>
        <Header />
        <main class={'mx-auto'}>
          <Slot />
        </main>
        <Footer />
      </div>
    </div>
  );
});
