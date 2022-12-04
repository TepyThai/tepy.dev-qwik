import { component$ } from '@builder.io/qwik';
import ArticleCard from '~/components/article-card/article-card';
import Section from '~/components/shared/section';

type Props = {
  thoughts: string[];
};

export default component$(({ thoughts }: Props) => {
  return (
    <Section class={'py-4 px-4 h-2/4 sm:py-8 bg-whiter'}>
      <p
        class={
          'mb-8 text-xl font-bold underline text-primary font-lora underline-offset-4 sm:mb-10'
        }
      >
        Thougths
      </p>
      <ul>
        {thoughts.map((thought) => (
          <ArticleCard title={thought} summary={thought} />
        ))}
      </ul>
    </Section>
  );
});
