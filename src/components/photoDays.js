import { useEffect, useState } from "react";
import { db } from "../firebase";

const PhotoDays = ({clickHandler, id}) => {
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





    return ( 
            <div key={id}>

            <p className="galery__itemsTitle">{id}</p>
            <div className="galery__items">
            {images ? images.map(({id2, image})=>(

                <img loading="lazy"  onClick={()=>clickHandler(image.image)} key={id2}  className="galery__item" src={image.image} alt="" /> 
                )) : <div className="lds-ripple"><div></div><div></div></div>}
                </div>
            </div>
     );
}

export default PhotoDays;