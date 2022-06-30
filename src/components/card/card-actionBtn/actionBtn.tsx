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
