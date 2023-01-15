// Code Keypad Component Here
import React from "react"

function Keypad() {
  function HandleOnChangeEvent(e) {
    console.log("Entering Password...")
  }
  return <input onChange={HandleOnChangeEvent} type="password" />
}

export default Keypad
