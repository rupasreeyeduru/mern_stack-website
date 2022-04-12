
import axios from "axios";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const BProfile = (props) => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_Number, setCno] = useState("");
  const [age, setAge] = useState("");
  const [batch_name, setBname] = useState("");
  const [edit, setEdit] = useState(0);
  const [user, setUser] = useState([]);

  let e_mail = (localStorage.getItem("email"));
  if (e_mail == undefined) {
    alert("Cannot access redirecting to home");
    navigate("/");
  }



  const newUser = {

    email: e_mail,


  };

  useEffect(() => {
    axios
      .post("/api/login/bprof", newUser)
      .then((response) => {
        setName(response.data.name);
        setEmail(e_mail);
        setCno(response.data.contact_Number);
        setAge(response.data.age);
        setBname(response.data.batch_name);
        setUser(response.data);
        console.log(response.data);
      });
  }, []);

  const onEdit = () => {

    setEdit(1);

  };




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

  const onCancel = (event) => {
    setEdit(0);
    setName(user.name);
    setEmail(user.email);
    setCno(user.contact_Number);
    setAge(user.age);
    setBname(user.batch_name);
  };

  //console.log(email);

  const onSubmit = (event) => {
    event.preventDefault();


    const newUser = {
      name: name,
      email: email,
      contact_Number: contact_Number,
      age: age,
      batch_name: batch_name


    };

    axios
      .post("/api/Buyers/edit2", newUser)
      .then((response) => {
        alert("saved changes");
        console.log(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setCno(response.data.contact_Number);
        setAge(response.data.age);
        setBname(response.data.batch_name);
        setUser(response.data);
        setEdit(0);

      });


  };



  return (<div><Box sx={{ flexGrow: 1 }}>
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
        <Button color="inherit" onClick={() => navigate("/bfoodlist")}>
          Food items
        </Button>
        <Button color="inherit" onClick={() => navigate("/")}>
          Logout
        </Button>
        <Button color="inherit" onClick={() => navigate("/bprofile")}>
          My Profile
        </Button>
      </Toolbar>
    </AppBar>
  </Box><Grid container align={"center"} spacing={2}>
      <Grid item xs={12}>
        Name:{user.name}
      </Grid>
      <Grid item xs={12}>
        Email:{user.email}
      </Grid>
      <Grid item xs={12}>
        Contact number:{user.contact_Number}
      </Grid>
      <Grid item xs={12}>
        Age:{user.age}
      </Grid>
      <Grid item xs={12}>
        Batch Name:{user.batch_name}
      </Grid>
      {edit === 0 && <Grid item xs={12}>
        <Button variant="contained" onClick={onEdit}>
          edit
        </Button>
      </Grid>}
      {edit === 1 && <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChangeUsername}
        />
      </Grid>}

      {edit === 1 && <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>}
      {edit === 1 && <Grid item xs={12}>
        <TextField
          label="contact no"
          variant="outlined"
          value={contact_Number}
          onChange={onChangeCno}
        />
      </Grid>}
      {edit === 1 && <Grid item xs={12}>
        <TextField
          label="age"
          variant="outlined"
          value={age}
          onChange={onChangeAge}
        />
      </Grid>}
      {edit === 1 && <Grid item xs={12}>
        <TextField
          label="batch name"
          variant="outlined"
          value={batch_name}
          onChange={onChangeBname}
        />
      </Grid>}

      {edit === 1 && <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Save Changes
        </Button>
      </Grid>}
      {edit === 1 && <Grid item xs={12}>
        <Button variant="contained" onClick={onCancel}>
          Cancel changes
        </Button>
      </Grid>}
    </Grid>
  </div >);
};

export default BProfile;









