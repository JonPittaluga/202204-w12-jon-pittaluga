export function StatusBtn({ isAlive }: { isAlive: boolean }) {
  return (
    <>
      Status:{' '}
      {isAlive ? (
        <i className="fas fa-thumbs-up" data-id="{character.id}-status"></i>
      ) : (
        <i className="fas fa-thumbs-down" data-id="{character.id}-status"></i>
      )}
    </>
  );
}
