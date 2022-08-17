//This file is used to connect the metamask of the user
import React from 'react';
import { useMoralis, } from "react-moralis";
import { Button, CircularProgress } from "@material-ui/core"


export const Metamask = () => {
    //be able to login and logout
    const { authenticate, isAuthenticated, isAuthenticating, logout } = useMoralis();


    //login
    const login = async () => {
        if (!isAuthenticated) {
            await authenticate({ signingMessage: "Login into the NFT Detector Dapp" })
                .then(function (user) {
                    console.log("logged in user:", user);
                    console.log(user!.get("ethAddress"));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }


    //logout
    const logOut = async () => {
        await logout();
        console.log("logged out");
    }


    return (
        <div>
            <h2>Step 1 - Connect your wallet:</h2>
            <h5>Click on the 3 blue buttons that will appear on your metamask. (Next, Connect and Sign)</h5>
            {isAuthenticated ? (
                <div>
                    <Button color="default" variant="contained" onClick={logOut} >
                        Disconnect 🦊
                    </Button>
                </div>
            ) : (
                <div>
                    <Button color="primary" variant="contained" onClick={login} disabled={isAuthenticating}>
                        {isAuthenticating ? <CircularProgress size={26} /> : "Connect 🦊"}
                    </Button>
                </div>
            )
            }
        </div>
    );
}
