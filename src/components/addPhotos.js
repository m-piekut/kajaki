import { useEffect, useState } from "react";
import { db, storage } from "../firebase";

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
const newdate = day + "-" + month + "-" + year; //dodaje dzisejszą datę
const AddPhotos = () => {
   
    



    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    // const [images, setImages] = useState(null);
    const [images, setImages] = useState(0);
    const handleChange = (e)=>{
        if(e.target.files){
            setImages(e.target.files)
            // console.log(image)   
            setProgress(0)
        }
        
        
    }
    useEffect(()=>{
        if(images){

            for (let index = 0; index < images.length; index++) {
                const image = images[index];
                console.log(image.name)
            }
        }
    },[images])

    let i = 1;

    useEffect(()=>{
        if(i === (images.length )){
            setProgress(0)
        }
    },[]
    )


    function add(image){
     
        return new Promise ((resolve)=>{
            var fileName = image.name;
            var idxDot = fileName.lastIndexOf(".") + 1;
            var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
            if(extFile==="jpg" || extFile==="jpeg" || extFile==="png"){
            }else {
                alert('To nie jest zdjęcie')
            }
            const uploadTask = storage.ref(`${newdate}/Images/${image.name}`).put(image)
            uploadTask.on(
                "stage_changed",
                (snapshot) => {
                    // //progress func...
                    // const progress = Math.round(
                    //     (snapshot.bytesTransferred / snapshot.totalBytes) *100
                    // );
                    // setProgress(progress)
                    
                    
                },
                (error) => {
                    //Error function
                    console.log(error);
                    alert(error.message)
                },
                ()=> {
                    //complete function
                    storage
                    .ref(`${newdate}/Images`)
                    .child(`${image.name}`)
                    .getDownloadURL()
                    .then(url => {
                        db.collection('photos').doc(`${newdate}`).collection('images').doc(image.name).set({
                            image: url,
                            name: image.name
                        });
                        db.collection('photos').doc(`${newdate}`).set({
                            date: newdate
                        })
                    }).then(resolve(setProgress(i), i++))
                },
                
                
                )
        })
    }


    async function addPhoto (e){
        e.preventDefault()
        
        setLoading(true)
        for (let i = 0; i < images.length;) {
            const image = images[i];
            i++
            await add(image)
        }
        alert('Wysłałeś zdjęcia')
        // setProgress(0)
        setLoading(false)
        // let i = 0
        // for  (const image of images) {

        //     add(image).then(setProgress(i)).then(i++)
           
           
        // }
        
        
        
        
    }




    return ( 
        // <form className="new-dinner" onSubmit={addPhoto}>
        <form className="admin__addThings" >
        <h3>Twóje zdjęcia</h3>
            {/* <input type="text" value={avatar} onChange={(e)=>setAvatar(e.target.value)}/> */}
            <p className="user-profile__form-procentage">{progress}/{images.length}</p>
            {/* <progress className="user-profile__form-progress" value={[70]} max="100"/> */}
            <progress className="user-profile__form-progress" value={[progress]} max={images.length}/>
            <input  required className="user-profile__form-input" type="file" multiple accept="image/*" onChange={handleChange}/>
            
        { 
        !loading ?
            <button onClick={addPhoto}  className="primary-btn">Wyslij</button> :<div className="lds-ripple"><div></div><div></div></div>
        }
        </form>
     );
}
 
export default AddPhotos;