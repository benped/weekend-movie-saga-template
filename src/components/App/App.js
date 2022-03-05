import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const [genre, setGenre] = useState('');
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    dispatch({type:'ADD_NEW_MOVIE',payload :{title:title,url:url,description:description,genre_id:genre}})
    dispatch({type: "FETCH_MOVIES"})

    setOpen(false);
    setGenre('');
    setTitle('');
    setUrl('');
    setDescription('');
  };

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>

      <Router>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Movie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter Movie Information Below
          </DialogContentText>
          <TextField
          value={title}
            margin="dense"
            id="name"
            label="Movie Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
          value={url}
            margin="dense"
            id="url"
            label="Movie Poster URL"
            type="url"
            fullWidth
            variant="standard"
            onChange={(event) => setUrl(event.target.value)}
          />
          <TextField
            value={description}
            multiline
            id="outlined-multiline-flexible"
            label="Description"
            type="text"
            fullWidth
            maxRows={4}
            variant="standard"
            sx={{ pb: 3 }}
            onChange={(event) => setDescription(event.target.value)}
          />
          <FormControl fullWidth>
            <Box>
              {/* <InputLabel id="demo-simple-select-label">Genre</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={genre}
                label="Genre"
                onChange={handleChange}
                sx={{ minWidth: 160, m: 3 }}
                // sx={{ minWidth: 140,  }}
              >
                <MenuItem value={1}>Adventure</MenuItem>
                <MenuItem value={2}>Animated</MenuItem>
                <MenuItem value={3}>Biographical</MenuItem>
                <MenuItem value={4}>Comedy</MenuItem>
                <MenuItem value={5}>Disaster</MenuItem>
                <MenuItem value={6}>Drama</MenuItem>
                <MenuItem value={7}>Epic</MenuItem>
                <MenuItem value={8}>Fantasy</MenuItem>
                <MenuItem value={9}>Musical</MenuItem>
                <MenuItem value={10}>Romantic</MenuItem>
                <MenuItem value={11}>Science Fiction</MenuItem>
                <MenuItem value={12}>Space-Opera</MenuItem>
                <MenuItem value={13}>Superhero</MenuItem>
              </Select>
            </Box>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>

      <Route path='/' exact>

      
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
      </Route>
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
