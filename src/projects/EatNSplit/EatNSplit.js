import React from "react";
import styles from "./EatNSplit.module.css";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const EatNSplit = () => {
  return (
    <div className={styles.eatnsplit}>
      <div className={styles.app}>
        <div className={styles.sidebar}>
          <FriendList></FriendList>
          <FormAddFriend></FormAddFriend>
          <Button>Add Friend</Button>
        </div>
        <FormSplitBill />
      </div>
    </div>
  );
};

function FriendList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3 className={styles.sidebar_h3}>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className={styles.red}>
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className={styles.green}>
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className={styles.eatnsplit_button}>{children}</button>;
}

function FormAddFriend() {
  return (
    <form className={styles.formaddfriend}>
      <label>🐍 Friend name</label>
      <input type="text" className={styles.eatnsplit_input} />
      <label>📷 Image URL</label>
      <input type="text" className={styles.eatnsplit_input} />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className={styles.formsplitbill}>
      <h2>Split a bill with X</h2>

      <label>💰 Bill Value</label>
      <input type="text" className={styles.eatnsplit_input} />

      <label>🧍‍♀️ Your Expenses</label>
      <input type="text" className={styles.eatnsplit_input} />

      <label>🧑‍🤝‍🧑 X's Expenses</label>
      <input type="text" disabled className={styles.eatnsplit_input} />

      <label>🤑 Who's paying the bill?</label>
      <select className={styles.eatnsplit_input}>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default EatNSplit;
