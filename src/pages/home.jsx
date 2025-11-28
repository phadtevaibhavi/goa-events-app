import React from 'react';

export default function Home() {
  return (
    <main className="page page-home">
      <section className="hero">
        <h1>Events of Goa</h1>
        <h3>Welcome to events happening in Goa</h3>
      </section>

      <section className="content-box">
        <h2>Upcoming Events</h2>
        <p>
          Goa hosts a vibrant mix of cultural, music, and traditional festivals.
          Enjoy beach carnivals, temple fairs, seafood festivals, music concerts, and more.
        </p>

        <h2 style={{marginTop: '30px'}}>Goa Event Highlights</h2>
        <div className="highlights">
          <img src="/sunburn.webp" alt="Sunburn" />
          <img src="/iffi.jpeg" alt="IFFI" />
          <img src="/motoverse.avif" alt="Motoverse" />
          <img src="/holi.jpg" alt="Holi" />
          <img src="/christ.jpg" alt="Christmas" />
        </div>
      </section>
    </main>
  );
}
