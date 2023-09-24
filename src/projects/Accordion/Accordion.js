import React, { useState } from "react";
import styles from "./Accordion.module.css";
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
  return (
    <div className={styles.accordion}>
      {faqs.map((q, i) => (
        <AccordionItem num={i} title={q.title} text={q.text}></AccordionItem>
      ))}
    </div>
  );
};

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div
      className={`${styles.item} ${isOpen ? styles.open : {}}`}
      onClick={handleToggle}
    >
      <p className={styles.number}>{num > 9 ? num + 1 : `0${num + 1}`}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.icon}>{isOpen ? "+" : "-"}</p>
      {isOpen && <div className={styles.content}>{text}</div>}
    </div>
  );
}

export default Accordion;
