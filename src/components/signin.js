import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import { Button } from "@mui/material";

function signup() {
  return (
    <div>
      <div sx={{ minWidth: 275 }} className="container">
        <div className="wrapper">
          <section className="columns">
            <div className="column" style={{ paddingTop: "70px" }}>
              <h1>Sign In</h1>
              <TextField
                id="input-with-icon-textfield"
                label="Email Address"
                type="email"
                className="input"
                style={{ marginBottom: "3px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                id="input-with-icon-textfield"
                label="Password"
                type="password"
                className="input"
                style={{ marginBottom: "3px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <div className="form-button">
                <Button variant="contained" className="form-submit">
                  Sign In
                </Button>
              </div>
            </div>
            <div className="column">
              <center>
                <img src="images/signin-image.jpg" alt="signup" />
                <br />
                <p>
                  Create account?
                  <a href="signup" className="signup-image-link">
                    Sign up here
                  </a>
                </p>
              </center>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default signup;
