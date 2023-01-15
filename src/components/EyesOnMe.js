// Code EyesOnMe Component Here
import React from "react"
function EyesOnMe() {
  function HandleOnFocusEvent() {
    console.log("Good!")
  }
  function HandleOnBlurEvent() {
    console.log("Hey! Eyes on me!")
  }
  return (
    <button onFocus={HandleOnFocusEvent} onBlur={HandleOnBlurEvent}>
      Eyes On Me
    </button>
  )
}
export default EyesOnMe
