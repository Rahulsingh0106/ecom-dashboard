import React, { useState, Component, createContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import axios from 'axios';

export const globalC = createContext();

export class Gprov extends Component {
    state = {
        authLogin: null,
        authLoginerror: null
    };
    componentDidMount() {
        var localData = JSON.parse(localStorage.getItem("loginDetail"));
        if (localData) {
            this.setState({
                authLogin: localData
            });
        }
    }

    loginData = async () => {
        await axios
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
        navigate(`/add`);

    };
    render() {
        // console.log(localStorage.getItem("loginDetail"));
        return (
            <globalC.Provider
                value={{
                    ...this.state,
                    loginData: this.loginData
                }}
            >
                {this.props.children}
            </globalC.Provider>
        );
    }
}