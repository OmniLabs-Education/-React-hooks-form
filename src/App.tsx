import React, { useState } from 'react';
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const [user, setUser] = useState('');

  function handleCreateUser(data: any) {
    console.log(data)
  }

  return (
    <>
    <h1>Formulário</h1>

    <form onSubmit={handleSubmit(handleCreateUser)}>
      <input {...register("teste")} type="text"/>
      <button type="submit">Enviar</button>
    </form>
    </>
  );
}

export default App;
