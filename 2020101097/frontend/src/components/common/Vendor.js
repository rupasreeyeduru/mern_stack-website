import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Vendor_Register = (props) => {
  const [name, setName] = useState("");
  const [shop, setShop] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhno] = useState("");
  const [opening_closingtime, setTime] = useState("");
  const [passwd, setPwd] = useState("");

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
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

  const onChangePwd = (event) => {
    setPwd(event.target.value);
  };

  const resetInputs = () => {
    setName("");
    setShop("");
    setEmail("");
    setPhno("");
    setTime("");
    setPwd("");

  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      shop: shop,
      email: email,
      phone_number: phone_number,
      opening_closingtime: opening_closingtime,
      passwd: passwd

    };

    axios
      .post("/api/Vendors/vregister", newUser)
      .then((response) => {
        alert("Created\t" + response.data.name);
        console.log(response.data);
      });

    resetInputs();
  };

  return (
    <Grid container align={"center"} spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChangeUsername}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Shop name"
          variant="outlined"
          value={shop}
          onChange={onChangeShop}
        />
      </Grid>
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
          label="phone no"
          variant="outlined"
          value={phone_number}
          onChange={onChangePhno}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="openingandclosingtime"
          variant="outlined"
          value={opening_closingtime}
          onChange={onChangeTime}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Pass word"
          variant="outlined"
          value={passwd}
          onChange={onChangePwd}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Register as Vendor
        </Button>
      </Grid>
    </Grid>
  );
};

export default Vendor_Register;
