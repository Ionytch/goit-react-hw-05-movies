import PropTypes from "prop-types";

const Genres=({data})=>{

return <>
{data.map(item=><ul key={item.id}>
                    <li key={item.id}>{item.name}</li>
                </ul>) }
</>

}

Genres.propTypes={
    data: PropTypes.array.isRequired,
}

export default Genres;