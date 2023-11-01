import React, { useEffect, useState, useRef } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl, { clearStorage } from 'mapbox-gl';
// import TablaIca from "../components/TablaIca";
import TablaIca2 from "../components/TablaIca2";


export function Mapa() {
    const [datos, setdatos] = useState([]);
    const [error, setError] = useState(null);
    const timeout = 10000;
    //  const [map, setMap] = useState("");
    const intervalRef = useRef(null);
    const markers = [];
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZ2V1bGEzMDAiLCJhIjoiY2xmN2U1bTE0MDFjNDNzbXd0dDFlMWo5YSJ9.ExRuX-DMesC9iOD64c-XOg';
    // Set marker options.
    let map;
    let marker = null;

    useEffect(() => {


        map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
            center: [-76.644502, 5.690598], // starting position [lng, lat]
            zoom: 14, // starting zoom
        });

        if (!error) {
            obtenerDatos();
            intervalRef.current = setInterval(() => {
                obtenerDatos();
            }, 1000);
        }

        return () => clearInterval(intervalRef.current);
        // setDatos((datos) => [...datos, datosjson])
    }, [error])


    const obtenerDatos = async () => {

        let url = 'http://191.101.235.193/lastData';

        const fetchPromesa = fetch(url);
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Tiempo de espera agotado'));
            }, timeout);
        });


        Promise.race([fetchPromesa, timeoutPromise])
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.code}`);
                }
                return res.json();
            })

            .then((respuesta) => {

                respuesta.forEach(element => {
                    setdatos(respuesta)

                    let elemento = document.createElement('div');
                    let h1 = document.createElement('h1');
                    var color = "";
                    const long = element.longitud;
                    console.log(long);

                    const lat = element.latitud;
                    console.log(lat);
                    let calcularPm = 0;
                    let calcularCo = 0;
                    let calcularOzono = 0;
                    let calcularNo3 = 0;
                    let calcularSo3 = 0;
                    let calculoTotal = 0;
                    let numero = 0;
                    let letraC = '';



                    let pm = element.medicion_sensores.polvo;
                    console.log(pm);
                    let co = element.medicion_sensores.co;
                    console.log(co);
                    let ozono = element.medicion_sensores.ozono;
                    console.log(ozono);
                    let diocidoNitrogeno = element.medicion_sensores.no2;
                    console.log(diocidoNitrogeno);
                    let diocidoAzufre = element.medicion_sensores.so2;
                    console.log(diocidoAzufre);
                    let temperatura = element.medicion_sensores.temperatura;
                    console.log(temperatura);
                    let humedad = element.medicion_sensores.humedad;
                    console.log(humedad);
                    calcularPm = (pm);
                    calcularCo = (co);
                    calcularOzono = (ozono);
                    calcularNo3 = (diocidoNitrogeno);
                    calcularSo3 = (diocidoAzufre);

                    calculoTotal = (calcularPm + calcularCo + calcularOzono + calcularNo3 + calcularSo3) * 10;
                    numero = calculoTotal.toFixed(1);

                    console.log(calculoTotal);



                    h1.textContent = numero;
                    h1.style.fontSize = '16px';
                    h1.style.margin = 'auto';
                    h1.style.display = 'block';
                    h1.style.width = '20px';
                    h1.style.height = '20px';
                    h1.style.position = 'relative';
                    h1.style.top = '13px';
                    h1.style.right = '10px'

                    elemento.appendChild(h1);
                    elemento.style.borderRadius = '50%';
                    elemento.style.borderBlockColor = 'black';


                    // trabajar aqui el condisional para los colores 👍

                    if (calculoTotal >= 0 && calculoTotal <= 50) {
                        color = 'rgb(1, 229, 0,0.5)';
                        letraC = 'white';


                    }

                    if (calculoTotal >= 51 && calculoTotal <= 100) {
                        color = 'rgb(255, 254, 4, 0.5)';
                        letraC = 'black';
                    }

                    if (calculoTotal >= 101 && calculoTotal <= 150) {
                        color = 'rgb(255, 127, 2, 0.5)';
                        letraC = 'black';
                    }

                    if (calculoTotal >= 151 && calculoTotal <= 200) {
                        color = 'rgb(255, 0, 2,0.5)';
                        letraC = 'white';

                    }
                    if (calculoTotal >= 201 && calculoTotal <= 300) {
                        color = 'rgb(166, 59, 157, 0.5)'
                        letraC = 'white';

                    }
                    if (calculoTotal >= 301 && calculoTotal <= 400) {
                        color = 'rgb(150, 0, 30, 0.5)'
                        letraC = 'white';
                    }
                    if (calculoTotal >= 400) {
                        color = 'rgb(150, 0, 30, 0.5)'
                        letraC = 'white';
                    }

                    h1.style.color = letraC;


                    elemento.style.backgroundColor = color;
                    elemento.style.width = '50px';
                    elemento.style.height = '50px';



                    marker = new mapboxgl.Marker({
                        element: elemento
                    }).setLngLat([long, lat]).setPopup(new mapboxgl.Popup().setText(`
                    Humedad: ${humedad} \n
                    Temperatura: ${temperatura}\n
                    Ozono: ${ozono}\n
                    Co: ${co}\n
                    Polvo: ${pm}\n
                    Diocido Nitrogeno: ${diocidoNitrogeno}\n
                    Diocido Azufre: ${diocidoAzufre}

                    
                    `))//ele.mediciones.co2
                        .addTo(map);
                    markers.push(marker);
                    //  marker.remove();

                });
            }).catch(error => {
                console.log(error);
                setError(`Error al conectarse al servidor ${error}`);

            })
    }




    return (<main>
        {error && <div className="Error">
            <h1 > {error}</h1>

            <button className=" btnError" onClick={() => location.reload() }>Recargar</button>
        
        </div>}

        <div className='mapa' id="map">
        <TablaIca2/>
        </div>
        {/* <TablaIca /> */}
    </main>)
}

