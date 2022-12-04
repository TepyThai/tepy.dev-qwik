import { component$ } from '@builder.io/qwik';
import Section from '~/components/shared/section';

export default component$(() => {
  return (
    <Section class="px-4">
      <div class={'flex justify-center items-center py-16 h-3/5'}>
        <div>
          <h1>
            Hello, I'm{' '}
            <span class={'text-4xl tracking-wide font-lora'}>Tepy Thai</span>
          </h1>
          <h2>Software Engineer in Tokyo</h2>
        </div>
      </div>
    </Section>
  );
});
