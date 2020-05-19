import React from "react";

import "../../assets/stylesheet/LoginPage.scss";

function LoginPage() {
  return (
    <form>
      <h1>Login Page</h1>
      <p>Email:</p>
      <input name="email" type="email" />
      <p>Password:</p>
      <input name="password" type="password" />
      
      <div className="Button">
        <button>Login</button>
      </div>
    </form>
  );
}

export default LoginPage;
