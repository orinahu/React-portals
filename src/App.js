import React from "react";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const onClose = () => {
    setIsModalOpened(false)
  }
  
  return (
    <div>
      <h1>React Portal</h1>
      <button
        onClick={() => {
          setIsModalOpened(true);
        }}
      >
        Open Modal
      </button>
      <Modal isOpened={isModalOpened} onClose={onClose} onConfirm={onClose}
        title="Lorem ipsum dolor sit amet"
        message="consectetur adipiscing elit. Nulla massa risus, fermentum vel mauris sit amet, posuere dictum sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sed felis eu mi porttitor porttitor. Mauris tempor mattis ultricies. Morbi pulvinar erat pretium dolor egestas, vitae dignissim enim ultricies. Suspendisse potenti. Aliquam vel purus risus."
      />
    </div>
  );
}

export default App;
