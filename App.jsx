import {
  AppBar,
  Box,
  Container,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Add, Search, Delete } from "@mui/icons-material";
import axios from "axios";
import faker from "@faker-js/faker";
import { useEffect } from "react";

const api = {
    // ...
};
const columns = [
  {
    field: "title",
    headerName: "Title",
    flex: 2,
    minWidth: 150,
  },
  {
    field: "author",
    headerName: "Author",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "content",
    headerName: "Content",
    flex: 1,
    minWidth: 150,
  },
];

// ...
const TopMenu = (props) => {
  return (
    <Box sx={{ flexGrow: 1, mb: 1 }}>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
    </Box>
  );
};
const EditMenu = (props) => {
  return (
    <div>
      <Button
        startIcon={<Add />}
        variant="contained"
        sx={{ my: 1, mr: 1 }}
        onClick={props.addPost}
      >
        Add
      </Button>
      <Button
        startIcon={<Delete />}
        variant="contained"
        disabled={!props.selection.length}
        sx={{ my: 1, mr: 1 }}
        onClick={() => props.removePosts(props.selection)}
      >
        Remove
      </Button>
    </div>
  );
};
// ...

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selection, setSelection] = useState([]);
  const [query, setQuery] = useState("");
  const addPost = async () => {
    // ...
  };
  const removePosts = async (removedIds) => {
    // ...
  };
  const search = async () => {
    //...
  };

  useEffect(() => {
    // ...
  }, []);

  return (
    <>
      <TopMenu />
      <Container maxWidth="md">
        <TextField
          placeholder="Search"
          fullWidth
          value={query}
          onInput={(event) => setQuery(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment sx={{ pr: 1.5 }} position="start">
                <IconButton onClick={search}>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
        <EditMenu
          selection={selection}
          addPost={addPost}
          removePosts={removePosts}
        />
        <div style={{ width: "100%" }}>
          <DataGrid
            autoHeight
            rows={posts}
            columns={columns}
            pageSize={100}
            checkboxSelection
            onSelectionModelChange={(model) => setSelection(model)}
            selectionModel={selection}
          />
        </div>
      </Container>
    </>
  );
};

export default App;
