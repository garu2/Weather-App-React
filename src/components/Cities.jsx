
const Cities = ({ getWeather }) => { 
    console.log('render');

    const createHandleClick = city => {
        //const city = e.target.getAttribute('data');
        getWeather(city);
    }

    return ( 
        <section className="cities">
            <h2>Other Cities</h2>
            <ul>
                <li>
                    {/* <button onClick={ createHandleClick('Lima') }>
                        <img data="Lima" src="https://i.ibb.co/qgSvjm0/peru.png" alt="" />
                    </button> */}
                    
               </li>
                {/* <li><a href="#">
                    <img data="Bogota" src="https://i.ibb.co/ZxNwsGP/colombia.png" alt="" onClick={createHandleClick('Bogota')} />
                </a></li>
                <li><a href="#">
                    <img data="Madrid" src="https://i.ibb.co/R2QhJ7r/espania.png" alt="" onClick={createHandleClick('Madrid')}/>
                </a></li>
                <li><a href="#">
                    <img data="La Paz" src="https://i.ibb.co/qJdXCcX/bolivia.png" alt="" onClick={createHandleClick('La Paz')}/>
                </a></li>
                <li><a href="#">
                    <img data="Buenos Aires" src="https://i.ibb.co/Br1LbfM/argentina.png" alt="" onClick={createHandleClick('Buenos Aires')} />
                </a></li>
                <li><a href="#">
                    <img data="Monterrey" src="https://i.ibb.co/dLtsckC/mexico.png" alt="" onClick={createHandleClick('Monterrey')} />
                </a></li>
                <li><a href="#">
                    <img data="Caracas" src="https://i.ibb.co/py2PHtk/venezuela.png" alt="" onClick={createHandleClick('Caracas')} />
                </a></li>
                <li><a href="#">
                    <img data="Quito" src="https://i.ibb.co/yPhQ2pc/ecuador.png" alt="" onClick={createHandleClick('Quito')} />
                </a></li> */}
            </ul>
        </section>
    );
}
 
export default Cities;