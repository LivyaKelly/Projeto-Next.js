import React from 'react';
import styles from './styles.module.css';

const curiosities = [
    {
        id: 1,
        title: "Baseado em livros",
        description: "A série é baseada nos livros de L.J. Smith, que foram lançados na década de 1990.",
        image: "/images/livros.jpg"
    },
    {
        id: 2,
        title: "Audiência recorde",
        description: "O episódio piloto foi assistido por 4.91 milhões de pessoas, tornando-se a estreia de maior audiência da CW na época.",
        image: "/images/audiencia.webp"
    },
    {
        id: 3,
        title: "Trilha sonora",
        description: "A série é conhecida por sua trilha sonora incrível, que inclui músicas de artistas famosos e independentes.",
        image: "/images/trilha.jpg"
    },
    {
        id: 4,
        title: "Localização",
        description: "Embora a série se passe na cidade fictícia de Mystic Falls, a maior parte das filmagens ocorreu em Covington, Geórgia.",
        image: "/images/loc.jpg"
    },
    {
        id: 5,
        title: "Damon e Stefan",
        description: "Ian Somerhalder (Damon) e Paul Wesley (Stefan) são grandes amigos na vida real e até lançaram uma marca de bourbon juntos chamada 'Brother's Bond Bourbon'.",
        image: "/images/irmaos.jpg"
    },
    {
        id: 6,
        title: "Elenco",
        description: "Nina Dobrev, que interpreta Elena, também interpretou vários de seus doppelgängers, incluindo Katherine Pierce.",
        image: "/images/elena.jpg"
    },
    {
        id: 7,
        title: "Série de spin-off",
        description: "O sucesso de 'The Vampire Diaries' gerou dois spin-offs populares, 'The Originals' e 'Legacies'.",
        image: "/images/originais.jpg"
    },
    {
        id: 8,
        title: "Tatuagens",
        description: "Algumas tatuagens dos personagens têm significados ocultos. Por exemplo, a tatuagem de Ian Somerhalder em árabe significa 'Be the change'.",
        image: "/images/tatoo.png"
    },
    {
        id: 9,
        title: "Transformações",
        description: "Nina Dobrev teve que passar por longas sessões de maquiagem para se transformar em Katherine.",
        image: "/images/kathe.jpg"
    },
    {
        id: 10,
        title: "Elena's Journals",
        description: "Os diários de Elena desempenham um papel importante na série, refletindo o título do show.",
        image: "/images/diario.jpg"
    }
];

const Section = () => (
    <div className={styles.sectionContainer}>
        <div className="texto-curiosidades">
        <h1>Curiosidades sobre The Vampire Diaries</h1>
        <p className='p-curiosidades'>Descubra fatos interessantes sobre a série de vampiros mais amada da TV!</p>
        </div>
        <div className={styles.sectionGrid}>
            {curiosities.map((curiosity) => (
                <div key={curiosity.id} className={styles.card}>
                    <Image src={curiosity.image} alt={curiosity.title} className={styles.cardImage} />
                    <div className={styles.cardContent}>
                        <h2>{curiosity.title}</h2>
                        <p>{curiosity.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Section;
