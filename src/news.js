
import { useEffect, useState } from 'react';
import Card from './components/Card';

import {db} from './firebase'

const News = () => {
    const [news, setNews] = useState('')
    useEffect(()=>{
        db.collection('news').orderBy('date').onSnapshot(snapshot=>{
            setNews(snapshot.docs.map(doc => ({
             id : doc.id,
             post: doc.data()
             })))
            });
            return()=>{
                setNews(null)
            }
    },[])

   







    return ( 
        <div className="news">
             <h2 className=" pageTitle">Aktualności</h2>
             {news ? news.map(({id, post})=>(
                  <Card key={id} post={post}  id={id} />
                )).reverse() : <div className="lds-ripple"><div></div><div></div></div>} 
        </div>
             )}



 
export default News;