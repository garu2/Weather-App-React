import { get } from './helpers'
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header';
import Content from './components/Content';
import Cities from './components/Cities';

function App() {
  const [data, setData] = useState({});

    const getWeather = (nameCity = "") => {
        get(nameCity)
            .then(respuesta => respuesta)
            .then(res => setData(res))
    }

    useEffect(() => {
        getWeather();
    }, [])

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
