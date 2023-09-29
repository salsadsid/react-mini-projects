import React, { useState } from "react";
import styles from "./Accordion.module.css";
import { Link } from "react-router-dom";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
const Accordion = () => {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <div className={styles.accordion}>
      <Link to="/" className="home-button">
        🏠
      </Link>
      {faqs.map((q, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setIsOpen}
          num={i}
          title={q.title}
        >
          {q.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setIsOpen}
        num={22}
        title="Test 1"
      >
        <p>Allow React Developer to:</p>
        <ul>
          <li>Break up into components</li>
          <li>Make component reusable like this one</li>
          <li>Place State efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
};

function AccordionItem({ num, title, children, curOpen, onOpen }) {
  const isOpen = num === curOpen;
  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };
  return (
    <div
      className={`${styles.item} ${isOpen ? styles.open : {}}`}
      onClick={handleToggle}
    >
      <p className={styles.number}>{num > 9 ? num + 1 : `0${num + 1}`}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.icon}>{isOpen ? "+" : "-"}</p>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
}

export default Accordion;
