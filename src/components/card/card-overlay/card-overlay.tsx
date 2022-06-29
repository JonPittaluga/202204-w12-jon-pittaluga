export function CardOverlay({
  getMetadata,
  children,
}: {
  getMetadata: Function;
  children: Array<JSX.Element>;
}) {
  return (
    <div className="character__overlay">
      <ul className="list-unstyled">{getMetadata()}</ul>
      <div className="character__actions">{children}</div>
    </div>
  );
}
