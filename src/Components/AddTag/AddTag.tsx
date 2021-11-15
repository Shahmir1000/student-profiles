import React from "react";

export default function AddTag(props: {tag: string}){
  return (
    <div className="tag">
      <p>{props.tag}</p>
    </div>
  )
}