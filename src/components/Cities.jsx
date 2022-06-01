
const Cities = ({ getWeather }) => { 

    const ChangeCity = e => {
        const city = e.target.getAttribute('data');
        getWeather(city);
    }

    return ( 
        <section className="cities">
            <h2>Other Cities</h2>
            <ul>
                <li><a href="#">
                    <img data="Lima" src="https://i.ibb.co/qgSvjm0/peru.png" alt="" onClick={ChangeCity} />
                </a></li>
                <li><a href="#">
                    <img data="Bogota" src="https://i.ibb.co/ZxNwsGP/colombia.png" alt="" onClick={ChangeCity} />
                </a></li>
                <li><a href="#">
                    <img data="Madrid" src="https://i.ibb.co/R2QhJ7r/espania.png" alt="" onClick={ChangeCity}/>
                </a></li>
                <li><a href="#">
                    <img data="La Paz" src="https://i.ibb.co/qJdXCcX/bolivia.png" alt="" onClick={ChangeCity}/>
                </a></li>
                <li><a href="#">
                    <img data="Buenos Aires" src="https://i.ibb.co/Br1LbfM/argentina.png" alt="" onClick={ChangeCity} />
                </a></li>
                <li><a href="#">
                    <img data="Monterrey" src="https://i.ibb.co/dLtsckC/mexico.png" alt="" onClick={ChangeCity} />
                </a></li>
                <li><a href="#">
                    <img data="Caracas" src="https://i.ibb.co/py2PHtk/venezuela.png" alt="" onClick={ChangeCity} />
                </a></li>
                <li><a href="#">
                    <img data="Quito" src="https://i.ibb.co/yPhQ2pc/ecuador.png" alt="" onClick={ChangeCity} />
                </a></li>
            </ul>
        </section>
    );
}
 
export default Cities;