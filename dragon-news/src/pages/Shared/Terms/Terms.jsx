import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Our Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        quaerat voluptate blanditiis cupiditate non ex, commodi rerum animi
        exercitationem odio necessitatibus velit recusandae nemo temporibus
        voluptas molestias. Maxime corrupti dolor nobis itaque, rem omnis magni,
        ad consectetur amet maiores, nesciunt velit architecto ipsa voluptas
        error quam in tenetur? Deserunt sint similique pariatur recusandae
        aspernatur alias eius reprehenderit sed ab cupiditate consectetur,
        quaerat, eligendi placeat corporis soluta nemo laborum facere dolore
        culpa incidunt temporibus voluptas aut? Est consequatur ea esse aliquam
        alias! Voluptates ex voluptas, dolores perferendis, quibusdam
        praesentium aut adipisci corrupti veritatis, natus sequi magnam error
        excepturi nemo impedit? Neque?
      </p>
      <p>Go back to <Link to={'/register'}>Register</Link></p>
    </div>
  );
};

export default Terms;
