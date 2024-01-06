import React, { useState } from "react";
import Container from "../../ui/container/container";
import Flexbox from "../../ui/flexbox/flexbox";
import Input from "../../ui/input/input";
import classes from "./login.module.css";
import { userCredentials } from "../../../store/data";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navgate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      userCredentials.name === user.name &&
      userCredentials.password === btoa(user.password)
    ) {
      navgate("/dashboard");
    } else {
      alert("Incorrect username or password");
    }
  };

  const onInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container classProps={classes["login-wrapper"]}>
      <Flexbox
        alignItems="center"
        justifyContent="center"
        styleProp={{ height: "100%" }}
      >
        <form onSubmit={onSubmitHandler}>
          <Flexbox
            flexDirection="column"
            gap={10}
            justifyContent="center"
            classProp={classes["input-flex-wrapper"]}
          >
            <h1>SPACE VUE</h1>
            <div className={classes["horizontal-line"]} />
            <div className={classes["input-wrapper"]}>
              <label htmlFor="name" className={classes.label}>
                User Name
              </label>
              <Input
                required
                classProp={classes.input}
                name="name"
                ariaLabel="name"
                value={user.name}
                onChange={onInputChangeHandler}
              />
            </div>
            <div className={classes["input-wrapper"]}>
              <label htmlFor="password" className={classes.label}>
                Password
              </label>
              <Input
                required
                classProp={classes.input}
                type="password"
                name="password"
                ariaLabel="password"
                value={user.password}
                onChange={onInputChangeHandler}
              />
            </div>

            <button type="submit" className={classes.button}>
              Sign In
            </button>
          </Flexbox>
        </form>
      </Flexbox>
    </Container>
  );
};

export default Login;
