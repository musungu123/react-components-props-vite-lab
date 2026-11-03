import React from "react";

function About({ image = "https://images.unsplash.com/photo-1790607630533-6385e164c245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", about = "Zebras hugging" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;