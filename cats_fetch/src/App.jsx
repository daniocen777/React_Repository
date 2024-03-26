import "./App.css";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  // If en una línea con operador lógico &&
  return (
    <main>
      <h1>Cats App</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p> {fact} </p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Image extacted using the first word for ${fact}`}
          />
        )}
      </section>
    </main>
  );
}
