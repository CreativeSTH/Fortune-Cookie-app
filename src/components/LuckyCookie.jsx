import { useState } from 'react';
import phrases from '../data/phrases.json';
import '../styles/LuckyCookie.css';
import '../styles/fireworks.css';

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

const LuckyCookie = () => {
  const [phrase, setPhrase] = useState("Dale clic al botón para probar tu suerte");

  const getNewPhrase = () => {
      const randomPhrase = phrases[getRandomIndex(phrases)].phrase;
      setPhrase(randomPhrase);
      firework();
  };

  function firework() {
    const fireworksDiv = document.getElementById('fireworks');
    if (fireworksDiv) {
      fireworksDiv.classList.add('firework');

      setTimeout(() => {
        fireworksDiv.classList.remove('firework');
      }, 2000);

    } 
  }

  return (
    <section className='container__luckyCookie'>
      <article className='luckyCookie__card'>
        <div className='luckyCookie__card__subtitle'>Mucha</div>
        <div className='luckyCookie__card__title'>SUERTE</div>
        <p className='luckyCookie__card__phrase'>"{phrase}"</p>
        <button 
            className='luckyCookie__card__button' 
            onClick={getNewPhrase} 
            aria-label="Obtener una nueva frase de suerte">
            Probar Suerte
        </button>
        <div id='fireworks'></div>
      </article>
    </section>
  );
};

export default LuckyCookie;