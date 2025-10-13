import React from "react";

export default function AnimCard({ anim }) {
  return (
    <div className="anim-card">
      <h3>{anim.name}</h3>
      <p>{anim.type} - {anim.breed}</p>
      <p>Age: {anim.age}</p>
      <p>Status: <b>{anim.status}</b></p>
    </div>
  );
}
