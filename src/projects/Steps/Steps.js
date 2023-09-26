import React, { useState } from "react";
import styles from "./Steps.module.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const Steps = () => {
  const [steps, setSteps] = useState(1);
  const [open, setOpen] = useState(true);
  function handlePrevious() {
    if (steps > 1) return setSteps(steps - 1);
  }
  function handleNext() {
    if (steps < 3) return setSteps(steps + 1);
  }
  function handleClose() {
    setOpen(!open);
  }

  return (
    <>
      <button className={styles.close} onClick={handleClose}>
        {open ? "❌" : "📂"}
      </button>
      {open && (
        <div className={styles.steps}>
          <div className={styles.numbers}>
            <div className={`${steps >= 1 ? styles.active : ""}`}>1</div>
            <div className={`${steps >= 2 ? styles.active : ""}`}>2</div>
            <div className={`${steps >= 3 ? styles.active : ""}`}>3</div>
          </div>
          <StepMessage steps={steps}>
            {messages[steps - 1]}
            <div className={styles.buttons}>
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[steps - 1]}`)}
              >
                Learn More 👩‍🏫
              </Button>
            </div>
          </StepMessage>
          <div className={styles.buttons}>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
function StepMessage({ steps, children }) {
  return (
    <p className={styles.message}>
      <h3>Step {steps}</h3>
      {children}
    </p>
  );
}
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Steps;
