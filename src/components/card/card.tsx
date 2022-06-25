import { iCharacter } from '../../models/character';

export function Card({ character }: { character: iCharacter }) {
  // return <p>{character.name}</p>;
  return (
    <>
      <li className="character col" key={character.id}>
        <div className="card character__card">
          <img
            src={character.image}
            alt={character.name}
            className="character__picture card-img-top"
          />
          <div className="card-body">
            <h2 className="character__name card-title h4">
              {character.name} {character.family}
            </h2>
            <div className="character__info">
              <ul className="list-unstyled">
                <li>Age: {character.age} years old</li>
                <li className="emoji">{character.emoji}</li>
                <li>
                  Status:{' '}
                  {character.isAlive ? (
                    <i
                      className="fas fa-thumbs-up"
                      data-id="{character.id}-status"
                    ></i>
                  ) : (
                    <i
                      className="fas fa-thumbs-down"
                      data-id="{character.id}-status"
                    ></i>
                  )}
                </li>
              </ul>
            </div>
            <div className="character__overlay">
              {/* `; const metadataHTML = this.buildMetadataHTML(); const htmlPart2
              = ` */}
              <div className="character__actions">
                <button
                  className="character__action btn speak"
                  id="{character.id}-speak"
                >
                  speak
                </button>
                <button
                  className="character__action btn kill"
                  id={`${character.id}-kill`}
                >
                  die
                </button>
              </div>
            </div>
          </div>
          <i className="emoji"></i>
        </div>
      </li>
    </>
  );
}
