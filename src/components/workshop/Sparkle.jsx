import { useEffect } from "react";

export default function Sparkle(){
    useEffect(() => {
        // Fonction pour générer un nombre aléatoire entre min et max
        function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }
        
        // Sélectionnez toutes les étoiles
        const stars = document.querySelectorAll('.star');
        
        // Appliquez des positions aléatoires à chaque étoile
        stars.forEach((star) => {
        // La fonction passée à forEach sera exécutée pour chaque élément "star"
            // star représente l'élément actuel dans la boucle
            // index représente l'indice de l'élément actuel dans le tableau (0 pour le premier élément, 1 pour le deuxième, etc.)
            
            console.log("stars");
            const top = getRandom(0, 100) + 'vh';
            const left = getRandom(0, 100) + 'vw';
            const delay = getRandom(0, 15) + 's';
        
            star.style.top = top;
            star.style.left = left;
            star.style.animationDelay = delay;
        });

    }, []);

    return (
        <div>
            {
                Array.from(Array(100), (e,i) => {
                    return <div className="star" key={i}></div>
                })
            }
        </div>
    )
}