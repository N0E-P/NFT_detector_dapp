// This file is to organise all the dapp, and to apply beautiful styles
import React, { useEffect } from 'react';
import { Discord } from "./Discord"
import { Metamask } from "./Metamask"
import { makeStyles } from "@material-ui/core"
import NFT_detector_logo from "./NFT_detector_logo.png"


//make the app swag
const useStyles = makeStyles((theme) => ({
  app: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  title: {
    backgroundColor: "blutyfe",
    borderRadius: "20px",
    color: theme.palette.common.white,
    texteAlign: "center",
    padding: theme.spacing(4),
  },

  container: {
    backgroundColor: "white",
    borderRadius: "40px",
    padding: theme.spacing(5),
    alignItems: "center",
  },

  image: {
    padding: theme.spacing(10),
    alignItems: "center",
  },
}))


function App() {
  // use the swag styles
  const classes = useStyles()


  // Change the name
  useEffect(() => {
    document.title = "NFT Detector"
  }, []);


  return (<>
    <div className={classes.app}>
      <h1 className={classes.title} >
        Welcome to the Discord NFT Detector!
      </h1>
      <div className={classes.container}>
        <Metamask />
        <Discord />
      </div>
      <img src={NFT_detector_logo} alt="NFT detector Logo" height="250" width="250" className={classes.image} />
    </div>
  </>);
}


export default App;