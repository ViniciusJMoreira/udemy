// import { useEffect, useState } from "react";
import "./index.css";
import {pizzaData} from "./data.js"

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
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        pizzaName={"Pizza Spinacci"}
        ingredients={"omato, mozarella, spinach, and ricotta cheese"}
        photoName={"pizzas/spinaci.jpg"}
        price={15}
      />
    </main>
  );
}
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.pizzaName}></img>
      <div>
        <h3>{props.pizzaName}</h3>
        <p>{props.ingredients}T</p>
        <span>{props.price + 1}</span>
      </div>
    </div>
  );
}
function Footer() {
  const currHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const message = currHour >= openHour && currHour <= closeHour ? "open":"close";
  return (
    <footer className="footer">We're currently {message}</footer>
  )
}