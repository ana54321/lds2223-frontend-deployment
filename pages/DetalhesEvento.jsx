import React, { useEffect, useState } from "react";

export default function MainDetalhesMusica() {

    const [eventDeatail, setEventDetail] = useState([]);
    const [locationDetail, setLocationDetail] = useState([]);
    const [eventLocation, setEventLocation] = useState([]);

    // const fetchEventDetail = () => {
    //     return fetch("https://ticketnftsbackend.azurewebsites.net/Event/id/${id}")
    //         .then((response) => response.json())
    //         .then((data) => setEventDetail(data));
    // }

    // useEffect(() => {
    //     fetchEventDetail();
    // }, [])

    useEffect(() => {
        Promise.all([
            fetch("https://ticketnftsbackend.azurewebsites.net/Event/id/${id}"),
            fetch("https://ticketnftsbackend.azurewebsites.net/Location/id//${id}"),
        ])
        .then(([resEvent, resLocation]) => Promise.all([resEvent.json(), resLocation.json()]))
        .then(([dataEvent, dataLocation]) => {
            setEventDetail(dataEvent);
            setLocationDetail(dataLocation);
        })
    })

    return (
        <>
            <main id="main">
                {/* <div className="breadcrumbs">
                    <div
                        className="page-header d-flex align-items-center"
                        style={{ backgroundImage: 'url("img/concertos.jpg")' }}
                    >
                        <div className="container position-relative">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 text-center"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <section id="about" className="about">
                    {eventDeatail && eventDeatail.length > 0 && eventDeatail.map((eventDeObj, index) => (
                        <div className="container" data-aos="fade-up">
                            <h3 style={{ color: "black" }}>
                                {eventDeObj.name}
                            </h3><div className="row gy-4">
                                <div className="col-lg-6 content order-last  order-lg-first">
                                    {eventDeObj.poster ? <img src={eventDeObj.poster} className="img-fluid" style={{ width: 500, height: 200 }} /> : null}
                                </div>
                                <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                                    <ul>
                                        <h7 style={{ color: "black" }}>Sessões:</h7>
                                        <table className="table table-hover">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        {eventDeObj.dates.map((date, index) => (
                                                        <li key={index}>{date.scheduledDate_}</li>
                                                    ))}
                                                    </th>
                                                    <td>street location</td>
                                                    <td>city, state</td>
                                                    <td>
                                                        <a href="/EscolherLugar">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-dark"
                                                            >
                                                                COMPRAR
                                                            </button>
                                                            <small className="text-muted">
                                                                A partir de: {}
                                                            </small>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    ))}
                </section>
            </main>
        </>
    );
}