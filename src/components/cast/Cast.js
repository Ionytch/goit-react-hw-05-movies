import { Link, useParams } from "react-router-dom";

const CastList=(data)=>{
    
return (
    <>
    {data.map(item=>
    <ul key={item.id}>
        <li key={item.id}>
        <img src="" alt=""></img>
        <div>Name: {item.name}</div>
        <div>Character: {item.character}</div>
        </li>
        
    </ul>)}
    </>
)
};


export default CastList;
{/* <div>{movies.genres.map(item=><ul>
                    <li key={item.id}>{item.name}</li>
                </ul>) }</div> */}