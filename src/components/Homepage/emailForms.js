 import React from "react"
 var emailValidation;
const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>{
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });
    
  }
  return (
    <div>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (email = node)}
        type="email"
        required
        placeholder="Your email"
      />
      {emailValidation === 'blank'? 'here' : 'there'}
      <br />
      <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
        Submit
      </button>
    </div>
  );
};
export default CustomForm
