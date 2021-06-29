import { useParams } from "react-router-dom";
import homeImg from './images/homeImg.jpg'
const NewsDetails = () => {
    const newsArr =[
        {  id:1,
           title: 'Mamy nowe Kajaki!',
           content: ' eleifend fusce est mattis ut leo integer facilisi. Qua  eleifend fusce est mattis ut leo integer facilisi. Qua eleifend fusce est mattis ut leo integer facilisi. Qua',
           photo: homeImg
       },
      {    id:2,
           title: 'Mamy nowe Kajaki!',
           content: ' eleifend fusce est mattis ut leo integer facilisi. Qua  eleifend fusce est mattis ut leo integer facilisi. Qua eleifend fusce est mattis ut leo integer facilisi. Qua',
           photo: homeImg
       }
]
    const {id} = useParams()
    console.log(id)


    return ( 
        <div>
            {id&&
            <h2> id to : {id}</h2>}
        </div>

     );
}
 
export default NewsDetails;