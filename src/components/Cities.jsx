//import Lima from "/lima.png";
//import Bogota from "/bogota.png";
//import Madrid from '/madrid.png';
//import LaPaz from '/la paz.png';
//import BuenosAires from '/buenos aires.png';
//import Quito from '/quito.png';
//import Caracas from '/caracas.png';
//import Monterrey from '/monterrey.png';

const Cities = ({ getWeather }) => { 

    const cites = ['lima', 'bogota','madrid','la paz','buenos aires','quito','caracas','monterrey'];
    //const flags = [Lima, Bogota, Madrid,LaPaz, BuenosAires,Quito, Caracas, Monterrey];

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
                            <img src={`/${item}.png`} alt={item} />            
                        </button>
                    </li>
                ))
                }
            </ul>
        </section>
    );
}
 
export default Cities;