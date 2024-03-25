import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/hello?fontSize=50&fontColor=red&json=true`;

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();
  // Forma mas basica de hacer un fetch (traer data de una api)
  // * [] => dependencias (se renderiza 1 sola vez)
  // Effect para recuperar la cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json()) // devuelve una promesa
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  // Effect para recuperar la imagen con las 3 primeras palalabras
  useEffect(() => {
    if (!fact) return;
    // const firstWord = fact.split(" ").slice(0, 3).join(" "); primeras 3 palabras
    const firstThreeWord = fact.split(" ", 3).join(" "); // primeras 3 palabras
    // const firstWord = fact.split(" ")[0];
    fetch(
      `https://cataas.com/cat/says/${firstThreeWord}?fontSize=50&fontColor=red`
    ).then((response) => {
      const { url } = response;
      setImageUrl(url);
    });
  }, [fact]);

  // If en una línea con operador lógico &&
  return (
    <main>
      <h1>Cats App</h1>
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
