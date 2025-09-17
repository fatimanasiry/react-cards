import React from "react";
import Navbar from "./component/Navbar";
import { Cards } from "./component/Cards";

function App() {
  return (
    <div>
      <Navbar />

      {Cards.map((card) => (
        <div
          key={card.id}
          style={{
            border: "1px solid black",
            margin: "20px",
            padding: "10px",
            height: "400px",
            width: "300px",
            display: "inline-block",
            verticalAlign: "top",
            textAlign: "center",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            transition: "transform 0.2s",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <img src={card.imgsrc} alt="Card image" style={{ width: "100%" }} />
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <button>{card.button}</button>
        </div>
      ))}
    </div>
  );
}

export default App;
