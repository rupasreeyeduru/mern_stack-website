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


const BItemsList = (props) => {
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    let e_mail = localStorage.getItem("email");
    users.email = e_mail;
    useEffect(() => {
        axios
            .get("/api/foodlist/")
            .then((response) => {
                setUsers(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);





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
                        <Button color="inherit" onClick={() => navigate("/bfoodlist")}>
                            Food items
                        </Button>
                        <Button color="inherit" onClick={() => navigate("/")}>
                            Log out
                        </Button>
                        <Button color="inherit" onClick={() => navigate("/bprofile")}>
                            My Profile
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <br></br>

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
                                <TableCell>Vendor Email</TableCell>
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
                                    <TableCell>{user.email}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>

        </div >
    );
};

export default BItemsList;
