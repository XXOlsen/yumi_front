import React from "react";
import { useState, useRef } from "react";
import "./index.css";
import "./css/signup.css";

function Signup({ setUser }) {
  const [hasUser, setHasUser] = useState(false);
  const [error, setError] = useState(null);
  const name = useRef(null);
  const password = useRef(null);

  async function createUser() {
    const user = {
      name: name.current.value,
      password: password.current.value,
    };

    try {
      let res = await fetch("http://localhost:7070/api/v1/diary/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(res);
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        setHasUser(true);
        setError(null);
      } else {
        setError("User already exists");
      }
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }

  return (
    <>
    <div class="box">
        <h1>Signup</h1>

        <form onChange={onChange}>
        <input placeholder="Username" id="username" />
        <input placeholder="User email" id="useremail" />
        <input placeholder="Password" id="password" />
        <input placeholder="Confirm password" id="confirmpassword" />
        <input placeholder="Diary name" id="diaryname" />
        <button onClick={performSignup}>Sign up</button>
        </form>
      </div>

      </>
    );
    }

    export default Signup;
