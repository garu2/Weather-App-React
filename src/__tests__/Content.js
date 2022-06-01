import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Content from '../components/Content';

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

test('<Content /> Carga del componente', () => {
    /* const wraper = render(<App />);
    wraper.debug(); */
    render(<Content data={data} />);
    expect( screen.getByText('Partly cloudy') ).toBeInTheDocument();

    expect(screen.getByTestId('condition').textContent).toBe('Partly cloudy');
    expect(screen.getByTestId('temperature').textContent).toBe('19°C');
    expect(screen.getByTestId('feelsLike').textContent).toBe('19°c');
    expect(screen.getByTestId('humidity').textContent).toBe('37%');
    expect(screen.getByTestId('windSpeed').textContent).toBe('6.1Km/h');

});