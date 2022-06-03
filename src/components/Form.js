import React from "react";

function Form ({handelFirstName, handelLastName, firstName, lastName}){
  return (
    <form>
      <input type="text" onChange={handelFirstName} value={firstName} />
      <input type="text" onChange={handelLastName} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
