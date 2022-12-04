import { component$ } from '@builder.io/qwik';

type Props = {
  title: string;
  summary: string;
};

export default component$(({ title, summary }: Props) => {
  return (
    <div
      class={
        'py-3 px-4 mb-4 text-black bg-white rounded-sm shadow-sm last-of-type:mb-0 shadow-primary-light'
      }
    >
      <h3 class={'mb-2 text-xl text-blacker'}>{title}</h3>
      <p class={'text-sm text-black line-clamp-1 sm:line-clamp-2'}>
        {summary + summary}
      </p>
    </div>
  );
});
