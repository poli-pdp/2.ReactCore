import { useState } from "react";
const Form = () => {
  const [frmState, setFrmState] = useState({ name: "", email: "" });

  const handlerChange = ({ target }) => {
    setFrmState({ ...frmState, [target.name]: target.value });
  };

  return (
    <>
      <h1>Form</h1>
      <hr />
      <input
        type="text"
        placeholder="Your name"
        name="name"
        value={frmState.name}
        onChange={handlerChange}
      />
      <input
        type="email"
        placeholder="Your email"
        name="email"
        value={frmState.email}
        onChange={handlerChange}
      />
    </>
  );
};

export default Form;
