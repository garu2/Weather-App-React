import lima from '/lima.png';
import bogota from '/bogota.png';
/* import lima from '/lima.png';
import bogota from '/bogota.png';
import lima from '/lima.png';
import bogota from '/bogota.png';
import lima from '/lima.png';
import bogota from '/bogota.png'; */

const Cities = ({ getWeather }) => { 

    const cites = ['lima', 'bogota','madrid','la paz','buenos aires','quito','caracas','monterrey'];
    const flags = [lima, bogota,lima, bogota,lima, bogota,lima, bogota];

    const createHandleClick = (city) => () => {
        getWeather(city);
    }
    console.log('test repo');

    return ( 
        <section className="cities">
            <h2>Other Cities</h2>
            <ul>
                {
                cites.map((item, index) => (
                    <li key={index}>
                        <button onClick={createHandleClick(item)} >
                            <img src={flags[index]} alt={item} /> 
                            {/* <img src={`/${item}.png`} alt={item} />   */}          
                        </button>
                    </li>
                ))
                }
            </ul>
        </section>
    );
}
 
export default Cities;