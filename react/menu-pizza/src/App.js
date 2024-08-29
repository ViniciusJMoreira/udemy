// import { useEffect, useState } from "react";
import "./index.css";
import {pizzaData} from "./data.js";


export default function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}
function Main() {
  if(!pizzaData) return <p>We're still working on our menu. Please come back later.</p>;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Authentic Italian cuisine. 6 creatives dishes to choose from. All from our stone oven, all organic, all delicous.</p>
      <menu className="pizzas">
        {pizzaData.map((pizza) =>
          <Pizza pizzaObj={pizza} key={pizza.name} />
        )}
      </menu>
    </main>
  );
}

function Pizza({pizzaObj:{photoName,name,ingredients,price, soldOut}}) {
  return (
    <li className={`pizza ${soldOut&&"sold-out"}`}>
      <img src={photoName} alt={name}></img>
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut?"SOLD OUT":price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const currHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const message = currHour >= openHour && currHour <= closeHour;
  return (
    <footer className="footer">
      {message ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({closeHour}) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order</p>
      <button className="btn">Order</button>
    </div>
  );
}