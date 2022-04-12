import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const ItemsList = (props) => {
    const [users, setUsers] = useState([]);
    const [edit, setEdit] = useState(0);
    const navigate = useNavigate();
    const [name, setFName] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRate] = useState("");
    const [veg_nonveg, setVN] = useState("");

    let e_mail = localStorage.getItem("email");
    users.email = e_mail;
    useEffect(() => {
        axios
            .get("/api/foodlist/" + e_mail)
            .then((response) => {
                setUsers(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onAdd = () => {
        setEdit(1);


    };

    const onSubmit = (event) => {

        event.preventDefault();

        const newItem = {
            name: name,
            price: price,
            rating: rating,
            veg_nonveg: veg_nonveg,
            email: e_mail
        };

        axios
            .post("/api/foodlist/add", newItem)
            .then((response) => {
                alert("Added\t" + response.data.name);
                
                console.log(response.data);
            });


        setEdit(0);
        window.location.reload(false);
    };

    const onEdit = (e) => {


    }

    const onDelete = (e) => {
        const id = { id: e }
        axios
            .post("/api/foodlist/delete", id)
            .then((response) => {
                // alert("Deleted");
                console.log(response.data);
            });

        window.location.reload(false);

    }



    const onChangeFoodname = (event) => {
        setFName(event.target.value);
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value);

    }

    const onChangeRating = (event) => {
        setRate(event.target.value);
    }

    const onChangeVN = (event) => {
        setVN(event.target.value);
    }

    return (
        <div>

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
            <br></br>
            <Grid item xs={12}>
                <Button variant="contained" onClick={onAdd}>
                    Add Item
                </Button>
            </Grid>
            <br></br>
            {edit === 1 && <Grid item xs={12}>
                <TextField
                    label="Item Name"
                    variant="outlined"
                    value={users.name}
                    onChange={onChangeFoodname}
                />
            </Grid>}
            <br></br>
            {edit === 1 && <Grid item xs={12}>
                <TextField
                    label="Price"
                    variant="outlined"
                    value={users.shop}
                    onChange={onChangePrice}
                />
            </Grid>}
            <br></br>
            {edit === 1 && <Grid item xs={12}>
                <TextField
                    label="Rating"
                    variant="outlined"
                    value={users.rating}
                    onChange={onChangeRating}
                />
            </Grid>}
            <br></br>
            {edit === 1 && <Grid item xs={12}>
                <TextField
                    label="Veg/Non-veg"
                    variant="outlined"
                    value={users.veg_nonveg}
                    onChange={onChangeVN}
                />
            </Grid>}
            {edit === 1 && <Grid item xs={12}>
                <Button variant="contained" onClick={onSubmit}>
                    Save Changes
                </Button>
            </Grid>}
            <br></br>
            <Grid container align={"center"}  >
                <Paper>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell> Sr No.</TableCell>
                                <TableCell> Item Name </TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Rating</TableCell>
                                <TableCell>Veg/Nonveg</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, ind) => (
                                <TableRow key={ind}>
                                    <TableCell>{ind}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.price}</TableCell>
                                    <TableCell>{user.rating}</TableCell>
                                    <TableCell>{user.veg_nonveg}</TableCell>
                                    <TableCell> <Button variant="contained" onClick={onEdit}>
                                        Edit
                                    </Button></TableCell>
                                    <TableCell> <Button variant="contained" onClick={() => onDelete(user._id)}>
                                        Delete
                                    </Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>

        </div >
    );
};

export default ItemsList;
