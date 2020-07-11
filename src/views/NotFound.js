import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h1>404</h1>
    <p>
      Упс, кажется Вы потерялись. Вот <Link to="/">ccылка</Link> на главную
      страницу.
    </p>
  </div>
);

export default NotFound;
