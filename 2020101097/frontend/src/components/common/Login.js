import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


const Login = (props) => {
  const [passwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onChangePwd = (event) => {
    setPwd(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const resetInputs = () => {

    setEmail("");
    setPwd("");

  };


  const onSubmit = (event) => {
    event.preventDefault();

    const User = {

      email: email,
      passwd: passwd

    };

    axios
      .post("/api/login/", User)
      .then((response) => {
        if (response.data.error != undefined)
          alert("Authentication failed");
        else {
          alert("Logging in" + response.data.name);
          if (response.data.shop == undefined) {

            localStorage.setItem("email", email);

            navigate("/bprofile");
          } else {
           
            localStorage.setItem("email", email);
            navigate("/vendorprofile");
          }

        }
        console.log(response.data);
      });





    resetInputs();
  }



  return (<Grid container align={"center"} spacing={2}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Canteen Portal
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <Button color="inherit" onClick={() => navigate("/users")}>
            Users
          </Button>
          <Button color="inherit" onClick={() => navigate("/register")}>
            Register
          </Button>


          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
          {/* <Button color="inherit" onClick={() => navigate("/profile")}>
              My Profile
            </Button> */}
        </Toolbar>
      </AppBar>
    </Box>

    <Grid item xs={12}>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={onChangeEmail}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        label="Password"
        variant="outlined"
        value={passwd}
        onChange={onChangePwd}
      />
    </Grid>
    <Grid item xs={12}>
      <Button variant="contained" onClick={onSubmit}>
        login
      </Button>
    </Grid>
  </Grid>)

};

export default Login;