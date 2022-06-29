export function ActionBtn({
  text,
  id,
  action,
}: {
  text: string;
  id: number | undefined;
  action(): void;
}) {
  const classNames: string = 'character__action btn';

  // const speak = () => {
  //   document.querySelector('.communications')?.classList.add('on');
  //   console.log('speak ' + id);
  // };
  // const kill = () => {
  //   console.log('kill ' + id);
  // };

  return (
    <>
      <button
        className={classNames + ' ' + text}
        id={(id + '-' + text) as string}
        onClick={action}
      >
        {text}
      </button>
    </>
  );
}
