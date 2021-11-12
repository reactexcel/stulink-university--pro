import React from "react";
import Head from "next/head";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import SignupTitle from "./SignupTitle";
import SignupInputs from "./SignupInputs";

const SignupContainer = () => {
  return (
    <div>
      <Head>
        <title>Stulink | Signup</title>
      </Head>
      <Navbar />
      <SignupTitle />
      <SignupInputs />
      <hr className="mt-20 mb-24"/>
      <Footer />
    </div>
  );
};

export default SignupContainer;
