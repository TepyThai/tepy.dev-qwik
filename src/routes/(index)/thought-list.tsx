import { component$ } from '@builder.io/qwik';
import ArticleCard from '~/components/article-card/article-card';

type Props = {
  thoughts: string[];
};

export default component$(({ thoughts }: Props) => {
  return (
    <section>
      <p class={'text-lg font-bold text-red-600 font-lora'}>Thougths</p>
      <ul>
        {thoughts.map((thought) => (
          <ArticleCard title={thought} summary={thought} />
        ))}
      </ul>
    </section>
  );
});
