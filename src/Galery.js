import { useEffect, useState } from 'react';
import BigPhoto from './components/BigPhoto';
import {db} from './firebase'
import PhotoDays from './components/photoDays';
import GaleryMain from './GaleryMain';
import { Route, Switch } from 'react-router-dom';
const Galery = ({canDelete}) => {
    const [showPhoto, setShowPhoto] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [days, setDays] = useState(null)
    // funkcja przekazująca src obrazu do wyświetlenia duzego obrazu oraz do pokazywania tego obrazu.
    const clickHandler= (test)=>{
        setPhoto(test)
        setShowPhoto(!showPhoto)
    }

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
           
            {/* {days&& days.map(({id, image})=>(
                  <PhotoDays key={id} clickHandler={clickHandler} canDelete={canDelete}  id={id} />
                )).reverse()}
            {
                
            } */}
            
            <Switch>
                <Route exact path='/galeria'><GaleryMain/></Route>
                <Route  path='/galeria/:id'><PhotoDays clickHandler={clickHandler} canDelete={canDelete}  /></Route>
            </Switch>
            {showPhoto&& <BigPhoto photo={photo} showPhoto={()=>setShowPhoto(false)}/>}
        </div>
     );
}
 
export default Galery;