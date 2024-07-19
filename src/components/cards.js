import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

const personagens = [
    { id: 1, name: 'Elena Gilbert', type: 'Humana (depois vampira)', image: '/images/elena1.jpg' },
    { id: 2, name: 'Stefan Salvatore', type: 'Vampiro', image: '/images/stefan.jpg' },
    { id: 3, name: 'Damon Salvatore', type: 'Vampiro', image: '/images/damonn.jpg' },
    { id: 4, name: 'Bonnie Bennett', type: 'Bruxa', image: '/images/bonnie.jpg' },
    { id: 5, name: 'Caroline Forbes', type: 'Vampira', image: '/images/caroline.jpg' },
    { id: 6, name: 'Matt Donovan', type: 'Humano', image: '/images/matt.jpg' },
    { id: 7, name: 'Tyler Lockwood', type: 'Lobisomem (depois híbrido)', image: '/images/tyler.jpg' },
    { id: 9, name: 'Jeremy Gilbert', type: 'Humano (depois caçador de vampiros)', image: '/images/jeremy.jpg' },
    { id: 10, name: 'Katherine Pierce', type: 'Vampira', image: '/images/katherine.jpg' },
    { id: 11, name: 'Klaus Mikaelson', type: 'Híbrido (vampiro/lobisomem)', image: '/images/klaus.jpg' },
    { id: 12, name: 'Rebekah Mikaelson', type: 'Vampira Original', image: '/images/rebeka.jpg' },
    { id: 13, name: 'Elijah Mikaelson', type: 'Vampiro Original', image: '/images/elijah.jpg' },
  ];
  
  const Cards = () => {
    return (
      <div className={styles.grid}>
        {personagens.map(personagem => (
          <div key={personagem.id} className={styles.card}>
            <Image src={personagem.image} alt={personagem.name} className={styles.image} />
            <h2 className={styles.name}>{personagem.name}</h2>
            <p className={styles.type}>{personagem.type}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Cards;
