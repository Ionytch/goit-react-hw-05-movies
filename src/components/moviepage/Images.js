import { useEffect, useState } from "react";



const Images =()=>{
    const[image, setImage]=useState();
    const {id} = useParams();
    console.log (image);
    
    useEffect(() => {
        if (!id) { return };
       getImagesByMovieID(id)
           .then((res) => setImage(res))
           .catch(error => {
               console.log('error.message', error.message);
           });
   }, [id]);

};

export default Images;