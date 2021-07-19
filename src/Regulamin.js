import gsap from 'gsap';
import { useEffect } from "react";
import RegulaminItem from "./components/RegulaminItem";
import doc from './images/UMOWA.docx'

const content = [
    ["I","Wypożyczanie sprzętu odbywa się na zasadach odpłatności zgodnie z cennikiem. "],
    ["II","Aby wypożyczyć sprzęt należy okazać dokument tożsamości ze zdjęciem (dowód osobisty, paszport, prawo jazdy). Nie obsługuje się osób niepełnoletnich, pod wpływem alkoholu lub innych środków odurzających. "],
    ["III","Osoby nieletnie mogą płynąć tylko pod opieką osób pełnoletnich, które ponoszą pełną odpowiedzialność za nie, za ich zachowanie i ewentualne szkody. "],
    ["IV","Osoba wypożyczająca odpowiedzialna jest za powierzony sprzęt pływający i ponosi koszty uszkodzenia lub zaginięcia sprzętu. "],
    ["V","Na każdej jednostce musi się znajdować tyle kamizelek ratunkowych lub asekuracyjnych ile osób się na niej znajduje, obowiązkowo należy je założyć na siebie podczas pływania. "],
    ["VI","Wypożyczalnia nie zajmuje się organizacją spływów kajakowych a jedynie wypożycza sprzęt. Spływy należy organizować samodzielnie i na własną odpowiedzialność. "],
    ["VII","Odbiór i zwrot sprzętu odbywa się w miejscu wcześniej ustalonym przez Wypożyczającego oraz Wypożyczalnię. "],
    ["VIII","Sprzęt zwracany Wypożyczalni powinien być w stanie umożliwiającym ponowne wypożyczenie."],
    ["IX","Na niezwrócenie sprzętu w zadeklarowanym i opłaconym terminie użytkownik ponosi dodatkową opłatę w wysokości 100% dobowej należności za wypożyczenie."],
    ["X","Wypożyczalnia nie ponosi żadnej odpowiedzialności z tytułu nieszczęśliwych wypadków, utraty zdrowia lub śmierci uczestników spływów. "],
    ["XI","Osoby naruszające regulamin wypożyczalni będą zobowiązane do zakończenia pływania wypożyczonym sprzętem niezależnie od czasu przebywania na wodzie bez prawa zwrotu pieniędzy. "],
    ["XII","Wcześniejsze, niż to ustalono, terminy, miejsca i godziny zakończenia spływów muszą być zaakceptowane przez Wypożyczalnię i mogą być zrealizowane wyłącznie na jej warunkach. "],
    ["XIII","Wypożyczenie sprzętu jest równoznaczne z zaakceptowaniem warunków zawartych w regulaminie."],
    
]



const Regulamin = () => {
    useEffect(()=>{
        const numbers = document.querySelectorAll('.regulamin__number')
        const text = document.querySelectorAll('.regulamin__text')
        gsap.set([ numbers, text], {autoAlpha:0})
        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});
        tl
        .addLabel('start')
        .fromTo(numbers ,{autoAlpha: 0}, {autoAlpha: 1, stagger:.4,  duration: .5}, 'start')
        .fromTo(text ,{y: -5, autoAlpha: 0}, {autoAlpha: 1, y: 0, stagger:.4,  duration: .5}, 'start+=0.2')
    },[])


    return ( 
        <div className="regulamin">
        <h2 className="pageTitle">Regulamin</h2>

        <div className="regulamin__content">
        {content.map((item)=>(
            <RegulaminItem nr={item[0]} content={item[1]} />
            ))}




        </div>

           <a download href={doc}> <button className="regulamin__umowa">UMOWA</button> </a>
    </div> );
}
 
export default Regulamin;