import OfferSVG from "./components/offerSVG";
import gsap from 'gsap';




const Offer = () => {
    return ( 
        <div className="offer">
            <h2 className="pageTitle">Oferta</h2>
            <div className="offer__upper">
                <p className="offer__left">Dostosujemy trasę do Państwa możliwości i doświadczenia tak, aby każdy był zadowolony.</p>
                <section className="offer__right">
                    <p className="offer__routesTitle">Nasze propozycje: </p>
                    <ul className="offer__routes">
                    <p className="offer__routesOptions">Najkrótsza trasa – dla Rodzin z małymi dziećmi:</p>
                        <ul>
                            <li className="offer__routesOption offer__routesOption--1">Harasiuki I most – Harasiuki II most – około 1,5 do 2 godzin</li>
                        </ul >
                        <p className="offer__routesOptions">Trasy średniej długości:</p>
                        <ul>
                            <li className="offer__routesOption offer__routesOption--2">Wólka Biska– Harasiuki II most – około 3 godziny</li>
                            <li className="offer__routesOption offer__routesOption--3">Harasiuki II most – Dąbrówka – około 3 godziny</li>
                        </ul >
                        <p className="offer__routesOptions">Trasy dla zapaleńców:</p>
                        <ul>
                            <li className="offer__routesOption offer__routesOption--4">Stare Króle – Harasiuki – 5 – 6 godzin</li>
                            <li className="offer__routesOption offer__routesOption--5">Stare Króle – Dąbrówka – 8 – 9 godzin</li>
                        </ul>
                    </ul>
                    <p className="offer__foot">ZAWSZE istnieje możliwość przedłużenia wybranej trasy lub umówienia się na inną. Długość spływu zależy do intensywności wiosłowania, wysokości stanu wody, długości przerw.</p>
                </section>
            </div>
                <OfferSVG/>
                <p className="offer__down">Zachęcamy również do dłuższych lub krótszych postojów na plażach i napotkanych wyspach. Przypominamy o konieczności zabierania po sobie śmieci. Rzeka jest naszym wspólnym dobrem. Dbajmy o nią!</p>
        </div>
     );
}
 
export default Offer;