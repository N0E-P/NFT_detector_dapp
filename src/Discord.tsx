// This file is used to get the discord username from the user
import React, { useState } from 'react';
import { useMoralis, } from "react-moralis";
import { Button, Input } from "@material-ui/core"


// Change the state of the Save Discord Username button, and show the finish message
let isSaved: Boolean;
isSaved = false;


export const Discord = () => {
    //use the moralis database to store the discord username
    const { user, setUserData, isAuthenticated } = useMoralis();


    //Save the discord username
    const [username, setUsername] = useState(user?.attributes.username);
    const handleSave = () => {
        setUserData({
            username
        })
        console.log("Username saved:", username)
        isSaved = true;
    }


    return (<>
        {isAuthenticated ? (
            <div>
                <h2>Step 2 - Write your full Discord username:</h2>
                <h5>Example: Giraphe#5480</h5>
                {isSaved ? (
                    <div>
                        <Input value={username} onChange={(event) => setUsername(event.currentTarget.value)} />
                        <Button color="default" variant="contained" onClick={handleSave}> Change Discord Username </Button>
                        <h2>Step 3 - It's all done, you can now close the page! 🥳</h2>
                        <h5>You can always change your discord username if you want to.</h5>
                        <h5>And you can disconnect your metamask and log in with another wallet.</h5>
                    </div>
                ) : (
                    <div>
                        <Input value={username} onChange={(event) => setUsername(event.currentTarget.value)} />
                        <Button color="primary" variant="contained" onClick={handleSave}> Save Discord Username </Button>
                    </div>
                )}
            </div>
        ) : (
            <div />
        )}
    </>
    );
}
