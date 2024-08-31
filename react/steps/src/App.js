import "./index.css";
import { messageData } from "./messageData.js";
import { useState } from "react";


export default function App() {
  return <>
    <Main/>
  </>
}


function Main() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step => step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step => step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <Numbers step={step} />
          <p className="message">
            Step {step}: {messageData[step - 1]}
          </p>
          <Buttons handleNext={handleNext} handlePrevious={handlePrevious} />
        </div>
      )}
    </>
  );
}

function Numbers({step}) {
  return (
    <div className="numbers">
      <div className={step >= 1 ? "active":""}>1</div>
      <div className={step >= 2 ? "active":""}>2</div>
      <div className={step >= 3 ? "active":""}>3</div>
    </div>
  );
}
function Buttons({handleNext, handlePrevious}) {
  return (
    <div className="buttons">
      <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={handlePrevious} className="previous">Previous</button>
      <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={handleNext} className="next">Next</button>
    </div>
  );
}
