import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebase";
import AdminDelete from "./AdminDelete";

const PhotoDays = ({clickHandler}) => {
    const {id} = useParams();
    const [canDelete, setCanDelete] = useState(null);
    const [images, setImages] = useState('');
    
    //pobiera wszystkie obrazy z danego dokumentu( id wczesniej przekazywane z GALERY )
    useEffect(()=>{
        db.collection('photos').doc(id).collection('images').onSnapshot(snapshot=>{
            setImages(snapshot.docs.map(doc => ({
             id2 : doc.id,
             image: doc.data()
             })))
            });
            return()=>{
                setImages(null)
            }
    },[])
    auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          setCanDelete(true)
        } else {
            setCanDelete(false)
          // No user is signed in.
        }
      });




    return ( 
            <div key={id}>
            <p className="galery__itemsTitle">{id}</p>
            <div className="galery__items">
            {images ? images.map(({id2, image})=>(
                canDelete ?
                 <div key={id2} className="admin__galeryItem">
                    <img loading="lazy"  onClick={()=>clickHandler(image.image)} key={id2}  className="galery__item" src={image.image} alt="" /> 
                    <AdminDelete storageRef={`${id}/Images/`} collection='photos' imageName={image.name} id={id} id2={id2} photos="true"/>
                </div>
               :
                    <img loading="lazy"  onClick={()=>clickHandler(image.image)} key={id2}  className="galery__item" photos="true" src={image.image} alt="" /> 
                
            )) : <div className="lds-ripple"><div></div><div></div></div>}
                </div>
            </div>
     );
}

export default PhotoDays;