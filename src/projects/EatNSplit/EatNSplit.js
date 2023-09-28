import React, { useState } from "react";
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
function Button({ children, onClick }) {
  return (
    <button className={styles.eatnsplit_button} onClick={onClick}>
      {children}
    </button>
  );
}
const EatNSplit = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((f) => [...f, friend]);
    setShowAddFriend(false);
  }
  function handleSelectedFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  return (
    <div className={styles.eatnsplit}>
      <div className={styles.app}>
        <div className={styles.sidebar}>
          <FriendList
            friends={friends}
            selectedFriend={selectedFriend}
            onSelectFriend={handleSelectedFriend}
          ></FriendList>
          {showAddFriend && (
            <FormAddFriend onAddFriend={handleAddFriend}></FormAddFriend>
          )}
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : `Add Friend`}
          </Button>
        </div>
        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
      </div>
    </div>
  );
};

function FriendList({ friends, onSelectFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        ></Friend>
      ))}
    </ul>
  );
}

function Friend({ friend, onSelectFriend, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  // console.log(onSelectFriend);
  return (
    <li className={isSelected ? styles.selected : {}}>
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
      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? `Close` : `Select`}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className={styles.formaddfriend} onSubmit={handleSubmit}>
      <label>🐍 Friend name</label>
      <input
        value={name}
        type="text"
        className={styles.eatnsplit_input}
        onChange={(e) => setName(e.target.value)}
      />
      <label>📷 Image URL</label>
      <input
        value={image}
        type="text"
        className={styles.eatnsplit_input}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  return (
    <form className={styles.formsplitbill}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value</label>
      <input
        value={bill}
        type="text"
        className={styles.eatnsplit_input}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍‍♀️ Your Expenses</label>
      <input
        type="text"
        className={styles.eatnsplit_input}
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s Expenses</label>
      <input
        type="text"
        disabled
        className={styles.eatnsplit_input}
        value={paidByFriend}
      />

      <label>🤑 Who's paying the bill?</label>
      <select
        className={styles.eatnsplit_input}
        onChange={(e) => setWhoIsPaying(e.target.value)}
        value={whoIsPaying}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default EatNSplit;
