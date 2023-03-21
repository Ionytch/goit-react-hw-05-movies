const Genres=({data})=>{

return <>
{data.map(item=><ul key={item.id}>
                    <li key={item.id}>{item.name}</li>
                </ul>) }
</>

}


export default Genres;