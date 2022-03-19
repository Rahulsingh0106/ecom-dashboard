import Header from './Header';
import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    let item = { name, email, password, phone, profession };


    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone || !profession) {
            setFlag(true);
        } else {

            setFlag(false);
            let result = fetch("http://localhost/ecom/public/api/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            })
                .then((res) => {
                    if (res.status === 200) {
                        this.setState({
                            authLogin: res.data
                        });
                        localStorage.setItem("loginDetail", JSON.stringify(res.data));
                    }
                })
                .catch((err) =>
                    this.setState({
                        authLoginerror: err
                    })
                );
            localStorage.setItem("sanskarEmail", JSON.stringify(email));
            localStorage.setItem(
                "sanskarPassword",
                JSON.stringify(password)
            );
            console.log("Saved in Local Storage");

            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }
    return (
        <>

            <div>
                {" "}
                {login ? (
                    <form onSubmit={handleFormSubmit}>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Full Name"
                                name="name"
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone No.</label>
                            <input
                                type="Phone"
                                className="form-control"
                                placeholder="Enter contact no"
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Choose your Profession</label>
                            <Form.Control
                                as="select"
                                onChange={(event) => setProfession(event.target.value)}
                            >
                                <option>Select</option>
                                <option>Artist</option>
                                <option>Photographer</option>
                                <option>Team Player</option>
                                <option>Full Stack</option>
                            </Form.Control>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block">
                            Register
                        </button>
                        <p onClick={handleClick} className="forgot-password text-right">
                            Already registered{" "}log in?

                        </p>
                        {flag && (
                            <Alert color="primary" variant="danger">
                                I got it you are in hurry! But every Field is important!
                            </Alert>
                        )}
                    </form>
                ) : (
                    <Login />
                )}
            </div>

        </>
    );
}

export default Registration;