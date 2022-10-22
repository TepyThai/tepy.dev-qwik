import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Profile from './(index)/profile';
import ThoughtList from './(index)/thought-list';

export default component$(() => {
  return (
    <div class="body ">
      <Profile />
      <ThoughtList
        thoughts={[
          'My Journey to the Programming World',
          'Why 100vw causes horizontal scrollbar',
        ]}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Tepy Thai・Software Engineer',
};
