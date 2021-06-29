import gsap from 'gsap';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeImg from './images/homeImg.jpg'

const Home = () => {
    useEffect(()=>{
       
        const textWrapper = document.querySelector('.home__textWrapper')
        const buttons = document.querySelectorAll('.home__button')
        gsap.set([ textWrapper, buttons], {autoAlpha:0, scale: 0.5})
        const tl = gsap.timeline({defaults: {ease: 'slow( 0.7, 0.7, false)'}});
        tl.fromTo(textWrapper,{y: '-=200', autoAlpha: 0}, {autoAlpha: .5, y: '+=200', duration: .5}).to(textWrapper, {autoAlpha:1, scale: 1})
        .to(buttons, { stagger: .2, autoAlpha:1, scale: 1})
    },[])



    return (
        <div className="home">
            <h2 className=" pageTitle">O NAS</h2>
            <div className="home__img" style={{backgroundImage: `url(${homeImg})`}}></div>
            <div className="home__textWrapper">
                <p className="home__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse tempora quo dolorem ab cupiditate adipisci tempore beatae in dicta repellendus id aut quam eum tenetur harum sed explicabo fugiat libero praesentium deserunt, delectus  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse tempora quo dolorem ab cupiditate adipisci tempore beatae in dicta repellendus id aut quam eum tenetur harum sed explicabo fugiat libero praesentium deserunt, delectus illum?</p>
                <div className="home__buttons">
                    <Link className="home__button" to="/galeria">Galeria</Link>
                    <Link className="home__button" to="/oferta">Oferta</Link>
                </div>
            </div>

        </div> 



     );
}
 
export default Home;