import { useEffect, useState } from 'react';
import BigPhoto from './components/BigPhoto';
import homeImg from './images/homeImg.jpg'
import kajak from './images/kajak.jpg'
import {db} from './firebase'
import PhotoDays from './components/photoDays';
const Galery = ({canDelete}) => {
    const [showPhoto, setShowPhoto] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [days, setDays] = useState(null)
    // funkcja przekazująca src obrazu do wyświetlenia duzego obrazu oraz do pokazywania tego obrazu.
    const clickHandler= (test)=>{
        setPhoto(test)
        setShowPhoto(!showPhoto)
    }
    const [newDays, setNewDays] = ([])

    //pobiera wszystkie nazyw id w tym przypadku daty z kolekcji.

    useEffect(()=>{
        db.collection('photos').orderBy('date').onSnapshot(snapshot=>{
            setDays(snapshot.docs.map(doc => ({
             id : doc.id,
             image: doc.data()
             })))
            });
            return()=>{
                setDays(null)
            }
    },[])
            useEffect(()=>{
                days && days.map(item => console.log(item.id))
            },[days])


    if(showPhoto){
    window.addEventListener('keydown', (e)=>{
        if( e.key === 'Escape'){
            setShowPhoto(false)
        } 
    })
    }
   
    
    return ( 
        <div className="galery">
             <h2 className=" pageTitle">Galeria</h2>
           
            {days&& days.map(({id, image})=>(
                  <PhotoDays key={id} clickHandler={clickHandler} canDelete={canDelete}  id={id} />
                )).reverse()}
            {
               showPhoto&& <BigPhoto photo={photo} showPhoto={()=>setShowPhoto(false)}/>

            }
        </div>
     );
}
 
export default Galery;