import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import "./sign-in-and-sign-up.styles.scss";
import SignUp from "../../components/sign-up/sign-up.component";
import { Cell, Grid } from "styled-css-grid";
const SignInAndSignUp = () => {
  return (
    <Grid columns="repeat(auto-fit,minmax(300px,900px))">
      <Cell>
        <SignIn />
      </Cell>
      <Cell>
        <SignUp />
      </Cell>
    </Grid>
  );
};

export default SignInAndSignUp;
