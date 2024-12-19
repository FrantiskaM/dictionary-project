import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} targer="_blank">
        Listen
      </a>
      {props.phonetic.text}
    </div>
  );
}