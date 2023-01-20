import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Ticket() {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(quantity - 1);
    };

    const [ticket, setTicket] = useState([]);
    const { idEvent, idDate } = useRouter().query;

    const fetchTicket = (idEventNum, idDateNum) => {
        return fetch(`https://ticketnftsbackend.azurewebsites.net/Ticket/100/0/filters?status=on_sale&idEvent=${idEventNum}&idDate=${idDateNum}`)
            .then((response) => response.json())
            .then((data) => setTicket(data))
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        if (idEvent && idDate) {
            const idEventNum = parseInt(idEvent)
            const idDateNum = parseInt(idDate)
            fetchTicket(idEventNum, idDateNum);
        }
    }, [idEvent, idDate])


    return (
        <div>
            <main id="main">
                <section>
                    <div className="container" data-aos="fade-up">
                        <h3 style={{ color: "black" }}>Escolha dos Lugares</h3>
                        <form
                            action="#"
                            className="form-search d-flex align-items-stretch mb-3"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Procurar tipo de bilhete (Vip...)"
                            />
                            <button type="submit" className="btn btn-dark">
                                Procurar
                            </button>
                        </form>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">SECÇÃO</th>
                                    <th scope="col">FILA</th>
                                    <th scope="col">LUGAR</th>
                                    <th scope="col">Tipo de Bilhete</th>
                                    <th scope="col">PREÇO</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {ticket && ticket.length > 0 && ticket.map((ticketObj, index) => (
                                    <tr>
                                        <td>{ticketObj.section}</td>
                                        <td>{ticketObj.row}</td>
                                        <td>{ticketObj.seat}</td>
                                        <td>{ticketObj.tier.title}</td>
                                        <td>{ticketObj.price}</td>
                                        <td>
                                            <div className="d-flex justify-content-center">
                                                <button onClick={handleDecrement} className="quantity-left-minus btn btn-danger btn-number"><i className="fa fa-minus" /></button>
                                                <span className="quantity-field border-0 text-center w-50">{quantity}</span>
                                                <button onClick={handleIncrement} className="quantity-right-plus btn btn-success btn-number"><i className="fa fa-plus" /></button>
                                            </div>

                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-center">
                            <a href="/ComprarBilhete">
                                <button type="button" className="btn btn-outline-dark">
                                    Comprar
                                </button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}