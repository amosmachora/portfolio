import React from "react";
import "./Tracker.css";
import tracker from "../../Assets/Tracker.svg";

const Tracker = () => {
  const track = document.querySelector(".tracker");
  document.body.addEventListener("mousemove", (e) => {
    track.style.left = `${e.clientX}px`;
    track.style.top = `${e.clientY}px`;
  });
  return (
    <div class="tracker">
      <img src={tracker} alt="Tracker" />
    </div>
  );
};

export default Tracker;
