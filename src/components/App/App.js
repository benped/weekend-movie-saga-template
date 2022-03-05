import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import React, { useEffect, useState } from "react";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

function App() {
  const style = {
    margin: 0,
    top: 20,
    right: 20,
    bottom: "auto",
    left: "auto",
    position: "fixed",
    zIndex: 9999,
  };

  const [open, setOpen] = useState(false);
  const [genre, setGenre] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Movie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter Movie Information Below
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Movie Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="url"
            label="Movie Poster URL"
            type="url"
            fullWidth
            variant="standard"
          />
          <TextField
            // margin="dense"
            multiline
            id="outlined-multiline-flexible"
            label="Description"
            type="text"
            fullWidth
            maxRows={4}
            variant="standard"
            sx={{ pb: 3 }}
          />
          <FormControl fullWidth>
            <Box>
              <InputLabel id="demo-simple-select-label">Genre</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={genre}
                label="Genre"
                onChange={handleChange}
                sx={{ minWidth: 160, m: 3 }}
                // sx={{ minWidth: 140,  }}
              >
                <MenuItem value={"Adventure"}>Adventure</MenuItem>
                <MenuItem value={"Animated"}>Animated</MenuItem>
                <MenuItem value={"Biographical"}>Biographical</MenuItem>
                <MenuItem value={"Comedy"}>Comedy</MenuItem>
                <MenuItem value={"Disaster"}>Disaster</MenuItem>
                <MenuItem value={"Drama"}>Drama</MenuItem>
                <MenuItem value={"Epic"}>Epic</MenuItem>
                <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
                <MenuItem value={"Musical"}>Musical</MenuItem>
                <MenuItem value={"Romantic"}>Romantic</MenuItem>
                <MenuItem value={"Science Fiction"}>Science Fiction</MenuItem>
                <MenuItem value={"Space-Opera"}>Space-Opera</MenuItem>
                <MenuItem value={"Superhero"}>Superhero</MenuItem>
              </Select>
            </Box>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>

      <Fab
        style={style}
        variant="extended"
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
      >
        Add Movie
        <AddIcon sx={{ ml: 1 }} />
      </Fab>

      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/details">
          <Details />
        </Route>
      </Router>
    </div>
  );
}

export default App;
