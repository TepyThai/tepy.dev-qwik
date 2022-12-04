import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import Menu from '~/components/menu/menu';
import Profile from './(index)/profile';
import Thoughts from './(index)/thought';

export default component$(() => {
  return (
    <div class={'h-screen'}>
      <Profile />
      <Thoughts
        thoughts={[
          'My Journey to the Programming World',
          'Why 100vw causes horizontal scrollbar',
        ]}
      />
      <Menu />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Tepy Thai・Software Engineer',
};
