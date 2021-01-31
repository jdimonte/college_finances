import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);
    const createUserWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        setEmail("");
        setPassword("");
        setDisplayName("");
    };
    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "userEmail") {
        setEmail(value);
        } else if (name === "userPassword") {
        setPassword(value);
        } else if (name === "displayName") {
        setDisplayName(value);
        }
    };

    return (
        <div></div>
    )
}

export default Register;