function TablaIca() {
    return (
        <div className="containerIca">
            <table className="defaultTable">

                <tr>

                    <th>ICA</th>

                    <th>COLOR</th>

                    <th>ClASIFICACION</th>

                    <th>OZONO(O₃)</th>

                    <th>PM2.5</th>

                    <th>CO</th>

                    <th>SO₂</th>

                    <th>NO₂</th>

                </tr>

                <tr>
                    <td className="tableVerde">0 a 50</td>

                    <td className="tableVerde">Verde</td>

                    <td className="tableVerde">Buena</td>

                    <td>{`0.000
                    0.059`}</td>

                    <td>{`0 - 12`}</td>

                    <td>{`0 - 4.4`}</td>

                    <td>{`0 - 0.035`}</td>

                    <td>{`0 - 0.053`}</td>



                </tr>

                <tr>
                    <td className="tableAmarillo">51 a 100</td>

                    <td className="tableAmarillo">Amarillo</td>

                    <td className="tableAmarillo">Moderada</td>

                    <td>{`0.060 - 0.075`}</td>

                    <td>{`12.1 - 35.4`}</td>

                    <td>{`4.5 - 9.4`}</td>

                    <td>{`0.036 - 0.075`}</td>

                    <td>{`0.054 - 0.100`}</td>



                </tr>

                <tr>
                    <td className="tableNaranja">101 a 150</td>

                    <td className="tableNaranja">Naranja</td>

                    <td className="tableNaranja">Dañina para grupos sensibles</td>

                    <td>{`0.125 - 0.164`}</td>

                    <td>{`35.5 - 55.4`}</td>

                    <td>{`9.5 - 12.4`}</td>

                    <td>{`0.076 - 0.185`}</td>

                    <td>{`0.101 - 0.360`}</td>



                </tr>

                <tr>
                    <td className="tableRoja">151 a 200</td>

                    <td className="tableRoja">Rojo</td>

                    <td className="tableRoja">Dañina</td>

                    <td>{`0.165 - 0.204`}</td>

                    <td>{`55.5 - 150.4`}</td>

                    <td>{`12.5 - 15.4`}</td>

                    <td>{`0.186 - 0.304`}</td>

                    <td>{`0.361 - 0.649`}</td>



                </tr>

                <tr>
                    <td className="tablePurpura">201 a 300</td>

                    <td className="tablePurpura">Purpura</td>

                    <td className="tablePurpura">Muy dañina</td>

                    <td>{`0.205 - 0.404`}</td>

                    <td>{`150.5 - 250.4`}</td>

                    <td>{`15.5 - 30.4`}</td>

                    <td>{`0.305 - 0.604`}</td>

                    <td>{`0.650 - 1.249`}</td>




                </tr>

                <tr>
                    <td className="tableMarron" >301 a 400</td>

                    <td className="tableMarron">Marron</td>

                    <td className="tableMarron">Peligrosa☠️</td>

                    <td>{`0.405 - 0.504`}</td>

                    <td>{`250.5 - 350.4`}</td>

                    <td>{`30.5 - 40.5`}</td>

                    <td>{`0.605 - 0.804`}</td>

                    <td>{`1.250 - 1.649S`}</td>



                </tr>

                <tr>
                    <td className="tableMarron">401 a 500</td>

                    <td className="tableMarron">Marron</td>

                    <td className="tableMarron">Peligrosa☠️</td>

                    <td>{`0.505 - 0.604`}</td>

                    <td>{`350.5 - 500.4`}</td>

                    <td>{`40.5 - 50.4`}</td>

                    <td>{`0.805 - 1.004`}</td>

                    <td>{`1.650 - 2.049`}</td>



                </tr>




            </table>
        </div>
    );
}

export default TablaIca;