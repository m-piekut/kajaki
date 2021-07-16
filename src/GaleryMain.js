import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "./firebase";
import gsap from 'gsap';


const GaleryMain = () => {
    const [dates, setDates] = useState('')

    useEffect(()=>{
        db.collection('dates').onSnapshot(snapshot=>{
            setDates(snapshot.docs.map(doc => ({
             id : doc.id,
             dates: doc.data()
             })))
            });
            return()=>{
                setDates(null)
            }
            return()=>setDates(null)
    },[])
    useEffect(() => {
        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});
        tl.yoyo()
        const items = document.querySelectorAll('.galery__bgItem')
        gsap.set([...items] , { zIndex: 0});
        gsap.set(items[0] , { zIndex: 0});
        tl
        .fromTo(items[0], {top: '0'}, {top: 0, autoAlpha:1, duration:1.5})
        .fromTo(items[1], {top: '-100%', autoAlpha: 0}, {top: 0, autoAlpha:1, duration:1.5})
        .fromTo(items[2], {top: '200%', autoAlpha: 0}, {top: 0, autoAlpha:1, duration:1.5})
        .fromTo(items[3], {left: '-100%', autoAlpha: 0}, {left: 0, autoAlpha:1, duration:1.5})
        .fromTo(items[4], {right: '-100%', autoAlpha: 0}, {right: 0, autoAlpha:1, duration:1.5})
        .fromTo(items[5], {top: '0', autoAlpha: 0}, {top: 0, autoAlpha:1, duration:1.5})
        .fromTo(items[6], {top: '-100%', left: '-100%', autoAlpha: 0}, {top: 0,left: '0', autoAlpha:1, duration:1.5})
        .fromTo(items[7], {top: '100%',left: '-100%', autoAlpha: 0}, {top: 0,left: '0', autoAlpha:1, duration:1.5})
        // .fromTo(items[0], {top: '0'}, {top: 0, autoAlpha:1, duration:1.5})
        // .fromTo(items[1], {top: '0', autoAlpha: 0}, {top: 0, autoAlpha:1, duration:1})
        // .fromTo(items[2], {top: '0', autoAlpha: 0}, {top: 0, autoAlpha:1, duration:1})
        // .fromTo(items[3], {top: '0', autoAlpha: 0}, {top: 0, autoAlpha:1, duration:1})
        // .fromTo(items[4], {top: '0', autoAlpha: 0}, {top: 0, autoAlpha:1, duration:1})
        // .fromTo(items[5], {top: '0', autoAlpha: 0}, {top: 0, autoAlpha:1, duration:1})
        // .fromTo(items[6], {top: '0', autoAlpha: 0}, {top: 0, autoAlpha:1, duration:1})
        // .fromTo(items[7], {top: '0', autoAlpha: 0}, {top: 0, autoAlpha:1, duration:1})
        // .fromTo(items[8], {top: '0', autoAlpha: 0}, {top: 0, autoAlpha:1, duration:1})
        .repeat(-1)
        .yoyo( true )
        
        return () => {
        };
    }, []);



    return ( 
        <div className="galery__dates">
            {dates && dates.map(({id, dates})=>(
                <Link className="galery__date" key={id} to={`/galeria/${id}`}>{dates.date}</Link>
            ))}
            <div className="galery__bgItem galery__bgItem--1"></div>
            <div className="galery__bgItem galery__bgItem--2"></div>
            <div className="galery__bgItem galery__bgItem--3"></div>
            <div className="galery__bgItem galery__bgItem--4"></div>
            <div className="galery__bgItem galery__bgItem--5"></div>
            <div className="galery__bgItem galery__bgItem--6"></div>
            <div className="galery__bgItem galery__bgItem--7"></div>
            <div className="galery__bgItem galery__bgItem--8"></div>
        </div>
     );
}
 
export default GaleryMain;