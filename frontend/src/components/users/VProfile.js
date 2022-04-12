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

const VProfile = (props) => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [shop, setShop] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhno] = useState("");
  const [opening_closingtime, setTime] = useState("");
  const [edit, setEdit] = useState(0);
  const [user, setUser] = useState([]);

  let e_mail = (localStorage.getItem("email"));
  if (e_mail == undefined) {
    alert("Cannot access redirecting to home");
    navigate("/");
  }

  console.log(e_mail.name);

  const newUser = {

    email: e_mail,


  };
  useEffect(() => {
    axios
      .post("/api/login/vprof", newUser)
      .then((response) => {
        setName(response.data.name);
        setShop(response.data.shop);
        setEmail(response.data.email);
        setPhno(response.data.phone_number);
        setTime(response.data.opening_closingtime);
        
        setUser(response.data);
        
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

  const onChangeShop = (event) => {
    setShop(event.target.value);
  };

  const onChangePhno = (event) => {
    setPhno(event.target.value);
  };

  const onChangeTime = (event) => {
    setTime(event.target.value);
  };

  const onCancel = (event) => {
    setEdit(0);
    setName(user.name);
    setEmail(user.email);
    setShop(user.shop);
    setPhno(user.phone_number);
    setTime(user.opening_closingtime);
  };




  const onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: name,
      shop: shop,
      email: email,
      phone_number: phone_number,
      opening_closingtime: opening_closingtime


    };



    axios
      .post("/api/Vendors/edit2", newUser)
      .then((response) => {
        alert("saved changes");
        console.log(response.data);
        setName(e_mail);
        setShop(response.data.shop);
        setEmail(response.data.email);
        setPhno(response.data.phone_number);
        setTime(response.data.opening_closingtime);
        setUser(response.data);


      });

    setEdit(0);
  };



  return (<div><Grid container align={"center"} spacing={2}>
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
           <Button color="inherit" onClick={() => navigate("/foodlist")}>
            Food items
          </Button> 
          <Button color="inherit" onClick={() => navigate("/")}>
            Log out
          </Button>
          <Button color="inherit" onClick={() => navigate("/vendorprofile")}>
            My Profile
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Grid item xs={12}>
      Name:{user.name}
    </Grid>
    <Grid item xs={12}>
      Shop:{user.shop}
    </Grid>
    <Grid item xs={12}>
      Email:{user.email}
    </Grid>
    <Grid item xs={12}>
      phone number:{user.phone_number}
    </Grid>
    <Grid item xs={12}>
      Opening and closing time:{user.opening_closingtime}
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
        label="Shop name"
        variant="outlined"
        value={shop}
        onChange={onChangeShop}
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
        label="Phone number"
        variant="outlined"
        value={phone_number}
        onChange={onChangePhno}
      />
    </Grid>}
    {edit === 1 && <Grid item xs={12}>
      <TextField
        label="opening and closing time"
        variant="outlined"
        value={opening_closingtime}
        onChange={onChangeTime}
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
  </div>);
};

export default VProfile;
