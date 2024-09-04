// src/components/Confetti.js
import React, { useEffect } from "react";
import "./Modal.css";

function Confetti() {
  useEffect(() => {
    const confettiContainer = document.querySelector(".confetti");
    if (!confettiContainer) return;

    // Clear any existing confetti pieces
    confettiContainer.innerHTML = "";

    for (let i = 0; i < 100; i++) {
      const confettiPiece = document.createElement("div");
      confettiPiece.className = "confetti-piece";
      confettiPiece.style.left = `${Math.random() * 100}vw`;
      confettiPiece.style.top = `${Math.random() * 100}vh`;
      confettiPiece.style.backgroundColor = `hsl(${
        Math.random() * 360
      }, 70%, 50%)`;
      confettiPiece.style.animationDuration = `${Math.random() * 1.5 + 1}s`;
      confettiContainer.appendChild(confettiPiece);
    }
  }, []);

  return <div className="confetti"></div>;
}

export default Confetti;
