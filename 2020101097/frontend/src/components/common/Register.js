import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DropdownButton, Dropdown } from "react-bootstrap";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
const Register = (props) => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dummy, setDummy] = useState(0);
  const [contact_Number, setCno] = useState("");
  const [age, setAge] = useState("");
  const [batch_name, setBname] = useState("");
  const [passwd, setPwd] = useState("");
  const [shop, setShop] = useState("");
  const [phone_number, setPhno] = useState("");
  const [opening_closingtime, setTime] = useState("");


  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeCno = (event) => {
    setCno(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeBname = (event) => {
    setBname(event.target.value);
  };


  const onChangePwd = (event) => {
    setPwd(event.target.value);
  };

  const onChangeShop = (event) => {
    setShop(event.target.value);
  };

  const onChangePhno = (event) => {
    setPhno(event.target.value);
  };

  const onChangeTime = (event) => {
    setTime(event.target.value);
  };




  const handleChange = (event) => {
    if (event.target.value == "Vendor")
      setDummy(1);
    if (event.target.value == "Buyer")
      setDummy(2);

  };






  const resetInputs1 = () => {
    setName("");
    setShop("");
    setEmail("");
    setPhno("");
    setTime("");
    setPwd("");
  }



  const resetInputs2 = () => {
    setName("");
    setEmail("");
    setCno("");
    setAge("");
    setBname("");
    setPwd("");

  };

  const onSubmit = (event) => {




    event.preventDefault();
    if (dummy === 1) {
      const newUser = {
        name: name,
        shop: shop,
        email: email,
        phone_number: phone_number,
        opening_closingtime: opening_closingtime,
        passwd: passwd

      };

      axios
        .post("/api/register/vregister", newUser)
        .then((response) => {
          alert("Created\t" + response.data.name);
          console.log(response.data);
        });
      resetInputs1();







    }

    else if (dummy === 2) {
      const newUser = {
        name: name,
        email: email,
        contact_Number: contact_Number,
        age: age,
        batch_name: batch_name,
        passwd: passwd

      };

      axios
        .post("/api/register/bregister", newUser)
        .then((response) => {
          alert("Created\t" + response.data.name);
          console.log(response.data);
        });
    }


    resetInputs2();
  };



  return (
    <Grid container align={"center"} spacing={2}>
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
            <Button color="inherit" onClick={() => navigate("/profile")}>
              My Profile
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br></br>
       <Grid item xs={1}> 
      <Box sx={{ minWidth: 50 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Register As</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dummy}
                  label="register"
                  onChange={handleChange}
                >
                  <MenuItem value={"Vendor"}>Vendor</MenuItem>
                  <MenuItem value={"Buyer"}>Buyer</MenuItem>

                </Select>
              </FormControl>
             </Box>
             </Grid>  

      {dummy === 1 && <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChangeUsername}
        />
      </Grid>}
      {dummy === 1 && <Grid item xs={12}>
        <TextField
          label="Shop name"
          variant="outlined"
          value={shop}
          onChange={onChangeShop}
        />
      </Grid>}
      {dummy === 1 && <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>}
      {dummy === 1 && <Grid item xs={12}>
        <TextField
          label="phone no"
          variant="outlined"
          value={phone_number}
          onChange={onChangePhno}
        />
      </Grid>}
      {dummy === 1 && <Grid item xs={12}>
        <TextField
          label="openingandclosingtime"
          variant="outlined"
          value={opening_closingtime}
          onChange={onChangeTime}
        />
      </Grid>}
      {dummy === 1 && <Grid item xs={12}>
        <TextField
          label="Pass word"
          variant="outlined"
          value={passwd}
          onChange={onChangePwd}
        />
      </Grid>}

      {dummy === 2 && <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChangeUsername}
        />
      </Grid>}

      {dummy === 2 && <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>}
      {dummy === 2 && <Grid item xs={12}>
        <TextField
          label="contact no"
          variant="outlined"
          value={contact_Number}
          onChange={onChangeCno}
        />
      </Grid>}
      {dummy === 2 && <Grid item xs={12}>
        <TextField
          label="age"
          variant="outlined"
          value={age}
          onChange={onChangeAge}
        />
      </Grid>}
      {dummy === 2 && <Grid item xs={12}>
        <TextField
          label="batch name"
          variant="outlined"
          value={batch_name}
          onChange={onChangeBname}
        />
      </Grid>}
      {dummy === 2 && <Grid item xs={12}>
        <TextField
          label="Pass word"
          variant="outlined"
          value={passwd}
          onChange={onChangePwd}
        />
      </Grid>}
      {dummy===1 &&<Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Register
        </Button>
      </Grid>}
      {dummy===2 &&<Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Register
        </Button>
      </Grid>}




    </Grid>




  );
};


export default Register;
