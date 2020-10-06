import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLink";

function Navbar(props) {
  const auth = useSelector(state => state.firebase.auth);
  const profile = useSelector(state => state.firebase.profile);
  return (
    <nav className="nav-wrapper gret darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>

        {auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />}

      </div>
    </nav>
  );
}

export default Navbar;
