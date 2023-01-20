import fetch from 'isomorphic-unfetch';
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';

/*

export async function getStaticProps({ params }) {
    const res = await fetch(`https://ticketnftsbackend.azurewebsites.net/Event/id/${params.id}`);
    const event = await res.json();
    return {
        props: {
            event,
        },
    }
}

export async function getStaticPaths({ params }) {
    const paths = [{ params }];
    return {
        paths,
        fallback: false
    }
}
*/

// export async function getInitialProps({ query }) {
//     const res = await fetch(`https://ticketnftsbackend.azurewebsites.net/Event/id/${query.id}`);
//     const event = await res.json();
//     return { event };
// }

export async function getStaticPaths() {
    const response = await fetch("https://ticketnftsbackend.azurewebsites.net/Event/100/0/filters?isHidden=false")
    const eventData = await response.json()

    const uniqueId = eventData.map((data) => data.id)

    return {
        paths: uniqueId.map((id) => ({
            params: { id: id.toString() },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const id = params.id;

    const response = await fetch(`https://ticketnftsbackend.azurewebsites.net/Event/id/${id}`)
    const eventData = await response.json()

    if (!eventData) {
        return {
            props: {
                eventData: {}
            }
        }
    }

    return {
        props: {
            eventData,
        },
    }
}

export default function Event({ eventData }) {
    const [localEventData, setEventData] = useState({});

    useEffect(() => {
        setEventData(eventData);
    }, [eventData])

    if (!localEventData) {
        return <div>Error: event not found</div>
    }

    const Router = useRouter();
    const handleOnClick = (idDate, ticketTiers) => {
        if (localEventData.idLayout !== null) {
            Router.push({
                pathname: `/ticket/filter`,
                query: {
                    status: 'on_sale',
                    idEvent: localEventData.id,
                    idDate: idDate
                }
            });
        } else {
            Router.push({
                pathname: `/myTicket/filter`,
                query: {
                    status: 'on_sale',
                    idEvent: localEventData.id,
                    idDate: idDate,
                    ticketTiers: ticketTiers
                }
            });
        }
    };


    return (
        <>
            <main id="main">
                <section id="about" className="about">

                    <div className="container" data-aos="fade-up">
                        <h3 style={{ color: "black" }}>
                            {localEventData.name}
                        </h3>
                        <div className="row gy-4">
                            <div className="col-lg-6 content order-last  order-lg-first">
                                {localEventData.poster ? <img src={localEventData.poster} className="img-fluid" style={{ width: 500, height: 200 }} /> : null}
                            </div>
                            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                                <ul>
                                    <h7 style={{ color: "black" }}>Sessões:</h7>
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    {localEventData.dates && localEventData.dates.map((date, index) => (
                                                        <ul key={index}>
                                                            {date.scheduledDate_}
                                                            <div>
                                                                {localEventData.ticketTiers.map((ticketTier, index) => (
                                                                    <ul key={index}>
                                                                        {
                                                                            localEventData.idLayout !== null ? 
                                                                            <Link legacyBehavior href={{ pathname: `/ticket/filter`, query: { idDate: date.id } }} as={`/ticket/filter?idDate=${date.id}`}>
                                                                                <a onClick={() => handleOnClick(date.id)}>
                                                                                    <button type="button" className="btn btn-outline-dark">COMPRAR</button>
                                                                                </a>
                                                                            </Link> :
                                                                                <Link legacyBehavior href={{ pathname: `/myTicket/filter`, query: { idDate: date.id, ticketTiers: ticketTier } }} as={`/myTicket/filter?idDate=${date.id}&ticketTiers=${ticketTier.id}`}>
                                                                                    <a onClick={() => handleOnClick(date.id, ticketTier.id)}>
                                                                                        <button type="button" className="btn btn-outline-dark">COMPRAR {ticketTier.title}</button>
                                                                                    </a>
                                                                                </Link>
                                                                        }
                                                                    </ul>
                                                                ))}
                                                            </div>
                                                        </ul>
                                                    ))}
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}