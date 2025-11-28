import React from 'react';

function EventCard({ img, title, desc }) {
  return (
    <div className="event-card">
      <img src={img} alt={title} />
      <div className="event-info">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function ExploreEvents() {
  const musical = [
    { img: '/sunburn.webp', title: 'Sunburn Music Festival', desc: 'Asia’s biggest electronic festival.' },
    { img: '/iffi.jpeg', title: 'Goa Beach Concert', desc: 'Live shows by the shore.' },
    { img: '/motoverse.avif', title: 'Indie Music Fest', desc: 'Indie acts and DJs.' },
    { img: '/holi.jpg', title: 'Jazz by the Bay', desc: 'Smooth jazz evenings.' },
    { img: '/christ.jpg', title: 'Rock & Roll Night', desc: 'Classic rock shows.' }
  ];

  const cultural = [
    { img: '/narkasur.jpg', title: 'Goa Carnival', desc: 'Colorful parades and floats.' },
    { img: '/holi.jpg', title: 'Shigmo Festival', desc: 'Spring festival with folk dances.' },
    { img: '/christ.jpg', title: 'Folk Dance Nights', desc: 'Traditional dance performances.' },
    { img: '/iffi.jpeg', title: 'Handicraft Exhibition', desc: 'Artisan stalls and crafts.' },
    { img: '/motoverse.avif', title: 'Heritage Week', desc: 'History & culture events.' }
  ];

  const food = [
    { img: '/sunburn.webp', title: 'Seafood Festival', desc: 'Local coastal cuisines.' },
    { img: '/iffi.jpeg', title: 'Spice Route Food Fest', desc: 'Spices & flavours.' },
    { img: '/motoverse.avif', title: 'Street Food Fiesta', desc: 'Local snack vendors.' },
    { img: '/holi.jpg', title: 'Feni & Tapas Night', desc: 'Local drinks & tapas.' },
    { img: '/christ.jpg', title: 'Beach BBQ Festival', desc: 'BBQs with live music.' }
  ];

  const festival = [
    { img: '/sunburn.webp', title: 'Diwali Festival', desc: 'Lights & fireworks.' },
    { img: '/iffi.jpeg', title: 'Christmas in Goa', desc: 'Masses & celebrations.' },
    { img: '/motoverse.avif', title: 'New Year Bash', desc: 'Fireworks & parties.' },
    { img: '/holi.jpg', title: 'Ganesh Chaturthi', desc: 'Rituals & processions.' },
    { img: '/christ.jpg', title: 'Easter Festival', desc: 'Parades & feasts.' }
  ];

  const renderCategory = (title, items) => (
    <section className="category-box">
      <h2>{title}</h2>
      <div className="event-list">
        {items.map((ev, idx) => (
          <EventCard key={idx} img={ev.img} title={ev.title} desc={ev.desc} />
        ))}
      </div>
    </section>
  );

  return (
    <main className="page page-explore">
      <div className="container">
        <h1>Explore Events in Goa</h1>
        {renderCategory('Musical Events', musical)}
        {renderCategory('Cultural Events', cultural)}
        {renderCategory('Food Events', food)}
        {renderCategory('Festival Events', festival)}
      </div>
    </main>
  );
}
