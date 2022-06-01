import React from 'react';
import Peru from "../../images/peru.png"
import Colombia from "../../images/colombia.png"
import Espania from "../../images/espania.png"
import Bolivia from "../../images/bolivia.png"
import Argentina from "../../images/argentina.png"
import Mexico from "../../images/mexico.png"
import Venezuela from "../../images/venezuela.png"
import Ecuador from "../../images/ecuador.png"

const Cities = ({ getWeather }) => { 

    const ChangeCity = e => {
        const city = e.target.getAttribute('data');
        getWeather(city);
    }

    return ( 
        <section className="cities">
            <h2>Other Cities</h2>
            <ul>
                <li><a href="#"><img data="Lima" src={ Peru } alt="" onClick={ChangeCity} /></a></li>
                <li><a href="#"><img data="Bogota" src={ Colombia } alt="" onClick={ChangeCity} /></a></li>
                <li><a href="#"><img data="Madrid" src={ Espania } alt="" onClick={ChangeCity}/></a></li>
                <li><a href="#"><img data="La Paz" src={ Bolivia } alt="" onClick={ChangeCity}/></a></li>
                <li><a href="#"><img data="Buenos Aires" src={ Argentina } alt="" onClick={ChangeCity} /></a></li>
                <li><a href="#"><img data="Monterrey" src={ Mexico } alt="" onClick={ChangeCity} /></a></li>
                <li><a href="#"><img data="Caracas" src={ Venezuela } alt="" onClick={ChangeCity} /></a></li>
                <li><a href="#"><img data="Quito" src={ Ecuador } alt="" onClick={ChangeCity} /></a></li>
            </ul>
        </section>
    );
}
 
export default Cities;