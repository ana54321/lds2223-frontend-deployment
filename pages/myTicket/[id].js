import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function MyTicket() {

    const [myTicketLocal, setTicket] = useState([]);
    const { idEvent, idDate, ticketTiers } = useRouter().query;

    const fetchTicket = (idEventNum, idDateNum, idTicketTiers) => {
        return fetch(`https://ticketnftsbackend.azurewebsites.net/Ticket/100/0/filters?status=sold&idEvent=${idEventNum}&idDate=${idDateNum}&ticketTiers=${idTicketTiers}`)
            .then((response) => response.json())
            .then((data) => setTicket(data))
            .catch((error) => {
                console.log(error);
            });
    }



    return (
        <div>
            <main id="main">
                <div className="breadcrumbs">
                    <div className="container position-relative">
                        <div className="row d-flex justify-content-center">
                            <div className="container">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h3 style={{ color: "black" }} className="text-center">
                                                Histórico de Bilhetes
                                            </h3>
                                        </div>
                                        <div className="row mb-3" />
                                        <div className="row mb-3" />
                                        <div className="d-flex align-items-center justify-content-center">
                                            <table id="table" className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th style={{ textAlign: "center" }} scope="col">
                                                            Título
                                                        </th>
                                                        <th style={{ textAlign: "center" }} scope="col">
                                                            Data
                                                        </th>
                                                        <th scope="col" />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ textAlign: "center" }}>
                                                            Trair E Coçar É Só Começar
                                                        </td>
                                                        <td style={{ textAlign: "center" }}>28/12/2022</td>
                                                        <td>
                                                            <div
                                                                className="accordion accordion-flush"
                                                                id="accordionFlushExample"
                                                            >
                                                                <h2
                                                                    className="accordion-header"
                                                                    id="flush-headingOne"
                                                                >
                                                                    <button
                                                                        className="accordion-button collapsed"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#flush-collapseOne"
                                                                        aria-expanded="false"
                                                                        aria-controls="flush-collapseOne"
                                                                    ></button>
                                                                </h2>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            colSpan={3}
                                                            className="col"
                                                            style={{ border: "none" }}
                                                        >
                                                            <div
                                                                id="flush-collapseOne"
                                                                className="accordion-collapse collapse"
                                                                aria-labelledby="flush-headingOne"
                                                                data-bs-parent="#accordionFlushExample"
                                                            >
                                                                <div className="accordion-body border-0">
                                                                    <div className="container">
                                                                        <div className="col">
                                                                            <div className="row mb-2">
                                                                                <div className="col">
                                                                                    <div className="col mb-1">
                                                                                        <small className="text-muted">
                                                                                            Nome do Evento
                                                                                        </small>
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        Trair E Coçar É Só Começar
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <div className="col mb-1">
                                                                                        <small className="text-muted">
                                                                                            Categoria
                                                                                        </small>
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        Entretenimento
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <div className="col mb-1">
                                                                                        <small className="text-muted">
                                                                                            Descrição
                                                                                        </small>
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        Dramaturgia de humor que mostra as
                                                                                        histórias de um casal que se separa,
                                                                                        mora no mesmo prédio e divide a
                                                                                        mesma empregada.
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <hr />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}