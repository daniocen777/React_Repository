import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact() {
    const [fact, setFact] = useState();
    // Forma mas basica de hacer un fetch (traer data de una api)
    // * [] => dependencias (se renderiza 1 sola vez)
    // Effect para recuperar la cita al cargar la pagina
    const refreshFact = () => {
        getRandomFact().then(setFact);
    };

    useEffect(refreshFact, []);

    return { fact, refreshFact };
};