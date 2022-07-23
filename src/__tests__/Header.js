import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/Header';

var data = {
    body: {
        conditionIcon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        conditionText: "Partly cloudy",
        country: "Colombia",
        feelsLike: 19,
        humidity: 37,
        isDay: 1,
        localtime: "2022-06-01 12:54",
        locationName: "Bogota",
        temperature: 19,
        windDir: "E",
        windSpeed: 6.1
    }
}

test('<Header /> Carga del componente', () => {
    /* const wraper = render(<App />);
    wraper.debug(); */
    render(<Header data={data} />);
    expect( screen.getByText('Bogota, Colombia') ).toBeInTheDocument();


    expect(screen.getByTestId('country').tagName).toBe('H4');
    expect(screen.getByTestId('country').tagName).not.toBe('H1');
    
    expect(screen.getByTestId('country').textContent).toBe('Bogota, Colombia');

    expect(screen.getByTestId('time').textContent).toBe('12:54');

});