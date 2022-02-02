import React from "react";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  console.log(isModalOpened);
  return (
    <div>
      <h1>Hey</h1>
      <button
        onClick={() => {
          setIsModalOpened(true);
        }}
      >
        Open Modal
      </button>
      <Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(false)}>
        <form onSubmit={() => setIsModalOpened(false)} className="login-form">
          <section>
            <label>Email</label>
            <input type="email" />
          </section>
          <section>
            <label>Password</label>
            <input type="password" />
          </section>
          <button>Sign In</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
