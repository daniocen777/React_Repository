import { useEffect, useState } from "react";

// Custom hook (comineza con use...)
export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState();
    // Effect para recuperar la imagen con las 3 primeras palalabras
    useEffect(() => {
        if (!fact) return;
        const firstThreeWord = fact.split(" ", 3).join(" "); // primeras 3 palabras
        // const firstWord = fact.split(" ")[0];
        fetch(
            `https://cataas.com/cat/says/${firstThreeWord}?fontSize=50&fontColor=red`
        ).then((response) => {
            const { url } = response;
            setImageUrl(url);
        });
    }, [fact]);

    return { imageUrl };
}