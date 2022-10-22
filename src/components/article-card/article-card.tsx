import { component$ } from '@builder.io/qwik';

type Props = {
  title: string;
  summary: string;
};

export default component$(({ title, summary }: Props) => {
  return (
    <div
      class={
        'py-2 px-4 mb-2 rounded-sm shadow-sm bg-primary-light text-primary-dark last-of-type:mb-0 shadow-primary-light'
      }
    >
      <h3 class={'mb-2 text-xl'}>{title}</h3>
      <p class={'text-sm text-gray-400'}>{summary}</p>
    </div>
  );
});
