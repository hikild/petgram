import Button from "components/forms/button";
import Input from "components/forms/input";
import React from "react";
import '../login/login.scss';
import { Link } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("API/PETGRAM", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response;
      })
      .then((json) => console.log(json));
  }

  return (
    <section>
      {/* <h1>Login</h1> */}
      <form className="form" action="" onSubmit={handleSubmit}>
        {/* <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        /> */}
        <Input type="text" label="Usuário" name="username" />
        <Input type="password" label="Senha" name="password" />
        <Button>Entrar</Button>
      </form>
      <Button>
        <Link to="/login/signup" style={{ textDecoration: "none", color: '#fff'}}>
          Cadastrar
        </Link>
      </Button>
    </section>
  );
}

export default LoginForm;
