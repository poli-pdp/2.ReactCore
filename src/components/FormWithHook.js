import React from "react";
import { useForm } from "../Hooks/useForm";

const FormWithHook = () => {
  const [values, handlerChange] = useForm({
    name: "",
    email: "",
    age: 18,
    password: "",
  });
  return (
    <>
      <h1>FormWithHook</h1>
      <hr />
      <input
        type="text"
        placeholder="Your name"
        name="name"
        value={values.name}
        onChange={handlerChange}
      />
      <input
        type="email"
        placeholder="Your email"
        name="email"
        value={values.email}
        onChange={handlerChange}
      />
      <input
        type="number"
        placeholder="Your age"
        name="age"
        value={values.age}
        onChange={handlerChange}
      />
      <input
        type="password"
        placeholder="Your password"
        name="password"
        value={values.password}
        onChange={handlerChange}
      />
    </>
  );
};

export default FormWithHook;
