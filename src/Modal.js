// src/components/Modal.js
import React, { useEffect, useState } from "react";
import "./Modal.css"; // Import the CSS for styling

function Modal({ message, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>{message}</h1>
      </div>
    </div>
  );
}

export default Modal;
