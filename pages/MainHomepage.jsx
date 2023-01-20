import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
//import { getStaticPaths } from './event/[id].js';

export default function MainHomepage() {

  const [event, setEvent] = useState([]);

  const fetchEvent = () => {
    return fetch("https://ticketnftsbackend.azurewebsites.net/Event/100/0/filters?isHidden=false")
      .then((response) => response.json())
      .then((data) => setEvent(data));
  }

  useEffect(() => {
    fetchEvent();
  }, [])


  const Router = useRouter();
  const handleOnClick = (id) => {
    Router.push(`/event/${id}`);
  };

  return (
    <>
      <main id="main">
        <section id="highlights" className="services pt-0">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <span>Destaques</span>
              <h2>Destaques</h2>
            </div>
            <div className="row gy-4">
              {event && event.length > 0 && event.map((eventObj, index) => (
                <div
                  key={eventObj.id}
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="card">
                    <div className="card-img">
                      {eventObj.poster ? <img src={eventObj.poster} className="img-fluid" style={{ width: 400, height: 460 }} /> : null}
                    </div>
                    <h3>
                      <Link legacyBehavior href={`/event/${eventObj.id}`} as={`/event/${eventObj.id}`}>
                        <a onClick={() => handleOnClick(eventObj.id)}>{eventObj.name}</a>
                      </Link>
                    </h3>
                    <p>{eventObj.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
