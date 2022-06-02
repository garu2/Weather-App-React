import { get } from './helpers'
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header';
import Content from './components/Content';
import Cities from './components/Cities';

function App() { 
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

    const getWeather = (nameCity = "") => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( position => {
                setLocation(`${position.coords.latitude},${position.coords.longitude}`);
            })
        } else {
            alert("non enteeerrrr");
        }
        let param = nameCity==="" ? location : nameCity; 
        get(param)
            .then(respuesta => respuesta)
            .then(res => {
                if (res.status != 400) {
                    setData(res);
                }
            })
    }

    useEffect(() => {
        getWeather();
    }, [location])

  const isEmpty = Object.keys(data).length === 0;
  return (
    <div className="main-content">
        <div className="App">
            { !isEmpty && <Header  data={data} /> }
            { !isEmpty && <Content data={data} /> }
            <Cities getWeather={getWeather} />
        </div>
        <div className="area" >
            <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
        </div >
    </div>
  )
}

export default App
