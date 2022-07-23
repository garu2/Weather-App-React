const Cities = ({ getWeather }) => { 

    const flags = ['lima', 'bogota','madrid','la paz','buenos aires','quito','caracas','monterrey'];

    const createHandleClick = (city) => () => {
        getWeather(city);
    }

    return ( 
        <section className="cities">
            <h2>Other Cities</h2>
            <ul>
                {
                flags.map((item, index) => (
                    <li key={index}>
                        <button onClick={createHandleClick(item)} >
                            <img src={`/images/${item}.jpg`} alt={item} />            
                        </button>
                    </li>
                ))
                }
            </ul>
        </section>
    );
}
 
export default Cities;