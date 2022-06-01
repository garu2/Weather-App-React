import React from 'react';

const Content = ({ data: {body: { conditionText, feelsLike, humidity, windSpeed, temperature, conditionIcon }} }) => {
    
    const newIcon = conditionIcon.replace('64x64', '128x128');
    return ( 
        <div className="content">
            <img src={ newIcon } alt="" />
            <h5 data-testid="condition" >{ conditionText }</h5>
            <p data-testid="temperature">{ temperature }°<span>C</span></p>
            <div className="details">
                <div>
                    <span>Feels like</span>
                    <p data-testid="feelsLike">{ feelsLike }°c</p>
                </div>
                <div>
                    <span>Humidity</span>
                    <p data-testid="humidity">{ humidity }%</p>
                </div>
                <div>
                    <span>Wind</span>
                    <p data-testid="windSpeed">{ windSpeed }Km/h</p>
                </div>
            </div>
        </div>
    );
}
 
export default Content;