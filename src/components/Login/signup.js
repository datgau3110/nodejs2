import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PasswordIcon from "@mui/icons-material/Password";
import { Button } from "@mui/material";
import './login.css'

function signin() {
  return (
    <div>
      <div sx={{ minWidth: 275 }} className="container">
        <div className="wrapper">
          <section className="columns">
            <div className="column">
              <h1>Sign Up</h1>
              <TextField
                id="input-with-icon-textfield"
                label="First Name"
                type="text"
                className="input"
                style={{ marginBottom: "3px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                id="input-with-icon-textfield"
                label="Last Name"
                type="text"
                className="input"
                style={{ marginBottom: "3px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                id="input-with-icon-textfield"
                label="User Name"
                type="text"
                className="input"
                style={{ marginBottom: "3px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
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
                label="Contact Number"
                type="text"
                className="input"
                style={{ marginBottom: "3px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
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
              <TextField
                id="input-with-icon-textfield"
                label="Confirm Password"
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
                  Sign Up
                </Button>
              </div>
            </div>
            <div className="column">
              <center>
                <img src="images/signup-image.jpg" alt="signup" />
                <br />
                <p>
                  Have already an account?
                  <a href="/#" className="signup-image-link">
                    Sign in here
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

export default signin;
