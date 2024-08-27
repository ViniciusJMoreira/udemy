// import { useEffect, useState } from "react";

export default function App() {
  return (
    <div>
      <h1>Restaurant Italia</h1>
      <Pizza/>
    </div>
  )
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinacci"></img>
      <h2>Pizza Spinacci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}