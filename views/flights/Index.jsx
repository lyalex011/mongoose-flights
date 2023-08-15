import React from "react";
import DefaultLayout from './DefaultLayout';

function Index({flights}) {
    return ( 
        <DefaultLayout>
        <div className="container">
        <h1>All flights</h1>
            <table>
                <tr>
                    <th>Airline</th>
                    <th>Flight #</th>
                    <th>Departs</th>
                    <th>Details</th>
                </tr>
                 {flights.map((flight) => 
                    <tr key={flight._id}>
                         {console.log(flight.departs)}
                        <td>{flight.airline}</td>
                        <td>{flight.flightNo}</td>
                        <td>{flight.departs.toString()}</td>
                        <td><a href={`/flights/${flight._id}`}><button>Info</button></a></td>
                    
                    </tr> 
                 )}
            </table>



             <a href="/flights/New"><button className="btn-2">New</button></a>
           
        </div>
        </DefaultLayout>
     );
}

export default Index;