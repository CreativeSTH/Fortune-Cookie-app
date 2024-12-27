import '../styles/Hero.css';
import cookie from '/img/cookie.webp';
import monster from '/img/monster.webp';
import iconScroll from '/img/icon.svg';
import logo from '/logo.svg';

const Hero = () => {
    return (
        <> 
            <section className='container'>
                <img className='logo' src={logo} alt="mi marca personal" />
                <article className='hero__card__glass'>
                    <img className='hero__card__img' src={monster}  alt="The cookie monster"/>
                    <h1 className='hero__card__title'>GALLETAS</h1>
                    <div className='hero__card__title--effect'>GALLETAS</div>
                    <h2 className='hero__card__subtitle'>de la fortuna</h2>
                </article>
                <article className='hero__imgs'>
                    <img className='imgs__galleta__blur--a' src={cookie} alt="a Lucky Cookie" />
                    <img className='imgs__galleta__blur--b' src={cookie} alt="a Lucky Cookie" />
                    <img className='imgs__galleta__blur--c' src={cookie} alt="a Lucky Cookie" />
                    <img className='imgs__icon__scroll' src={iconScroll} alt="This is an icon that indicates scroll" />
                    <div className='moon'></div>
                </article>
            </section>
        </>
    );
};

export default Hero;