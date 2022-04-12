import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Buyer_Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_Number, setCno] = useState("");
  const [age, setAge] = useState("");
  const [batch_name, setBname] = useState("");
  const [passwd, setPwd] = useState("");

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

  const resetInputs = () => {
    setName("");
    setEmail("");
    setCno("");
    setAge("");
    setBname("");
    setPwd("");

  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      email: email,
      contact_Number: contact_Number,
      age: age,
      batch_name: batch_name,
      passwd: passwd

    };

    axios
      .post("/api/Buyers/bregister", newUser)
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
          label="Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="contact no"
          variant="outlined"
          value={contact_Number}
          onChange={onChangeCno}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="age"
          variant="outlined"
          value={age}
          onChange={onChangeAge}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="batch name"
          variant="outlined"
          value={batch_name}
          onChange={onChangeBname}
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
          Register as Buyer
        </Button>
      </Grid>
    </Grid>
  );
};

export default Buyer_Register;
