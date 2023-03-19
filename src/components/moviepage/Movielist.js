const MovieList = ({ key, data }) => {
             
    return (
        <>
        <ul style={{
                    display: 'flex',                    
        justifyContent: 'center',
                alignItems: 'center',
        listStyle: 'none',
        fontSize: 20,
        color: "grey",
      }}>
                <li key={key}>
                        <a href="">{data.title }</a>
                </li>
            </ul>
        </>
    )
}
export default MovieList;