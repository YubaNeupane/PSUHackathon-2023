import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { dark } from "@mui/material/styles/createPalette";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

import Select from "react-select";
import { useDispatch } from "react-redux";
import { createEvent } from "../../../redux/actions/eventActions";

const options = [
  { value: "Athletics", label: "Athletics" },
  { value: "Academic", label: "Academic" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Food", label: "Food" },
  { value: "Cultural", label: "Cultural" },
];

const s = ["Athletics", "Academic", "Entertainment", "Food", "Cultural"];
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    time: new Date(),
    description: "",
    location: "",
    poster: "",
    category: [],
    type: "",
  });

  const [checked, setChecked] = useState({});

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    dispatch(createEvent(data));
    setOpen(false);
  };

  return (
    <div>
      <div
        onClick={handleClickOpen}
        className="p-0 w-12 h-12 bg-darkYellow text-darkGreen dark:text-white dark:bg-lightGreen  justify-center items-center
         hover:bg-darkGreen dark:hover:bg-darkYellow hover:text-white rounded-full active:shadow-g mouse shadow transition ease-in duration-200 focus:outline-none fixed bottom-5 right-5"
      >
        <svg
          viewBox="0 0 20 20"
          enableBackground="new 0 0 20 20"
          className="w-6 h-6 inline-block"
        >
          <path
            fill="#FFFFFF"
            d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
          />
        </svg>
      </div>
      {/* 
      <Button
        className="p-0 w-12 h-12 bg-darkYellow text-darkGreen dark:text-white dark:bg-lightGreen 
         hover:bg-darkGreen dark:hover:bg-darkYellow hover:text-white rounded-full active:shadow-g mouse shadow transition ease-in duration-200 focus:outline-none fixed bottom-5 right-5"
        variant="outlined"
        onClick={handleClickOpen}
      >
        
      </Button> */}

      <Dialog open={open} onClose={handleClose}>
        <div className="text-black dark:text-white dark:bg-gray-900 flex flex-row">
          <div>
            <DialogTitle className="flex flex-col items-center pb-10">
              Create event
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="eventNameField"
                label="Event name"
                type="text"
                fullWidth
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                variant="standard"
                InputLabelProps={{
                  className: "text-black dark:text-white",
                }}
                InputProps={{
                  className: "text-black dark:text-white",
                }}
              />

              <TextField
                margin="dense"
                id="dateField"
                label=""
                type="datetime-local"
                fullWidth
                value={new Date(data.time)}
                onChange={(e) => setData({ ...data, time: e.target.value })}
                variant="filled"
                className="text-white dark:bg-blue text-white"
                sx={{
                  input: { color: "orange" },
                }}
              />

              <div className="max-w-sm py-3 ">
                <label for="category">Category: </label>

                <Select
                  isMulti
                  defaultValue={selectedOption}
                  onChange={(e) =>
                    setData({ ...data, category: e.map((d) => d.label) })
                  }
                  options={options}
                />
              </div>
              <div className="max-w-sm py-3">
                <label for="eventType">Event type: </label>
                <Select
                  onChange={(e) => setData({ ...data, type: e.label })}
                  options={[
                    { value: "Online", label: "Online" },
                    { value: "InPerson", label: "In-Person" },
                  ]}
                />
              </div>

              <div className="max-w-sm py-2">
                <label for="eventPoster">Poster: </label>
                <TextField
                  id="eventPoster"
                  label=""
                  type="url"
                  placeholder="https://example.com/poster.png"
                  pattern="https://.*"
                  variant="standard"
                  value={data.poster}
                  onChange={(e) => setData({ ...data, poster: e.target.value })}
                  InputLabelProps={{
                    className: "text-black dark:text-white",
                  }}
                  InputProps={{
                    className: "text-black dark:text-white",
                  }}
                />
              </div>
              <div className="max-w-sm py-2">
                <TextField
                  margin="dense"
                  id="eventDescriptionField"
                  label="Description"
                  value={data.description}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                  type="text"
                  fullWidth
                  variant="standard"
                  InputLabelProps={{
                    className: "text-black dark:text-white",
                  }}
                  InputProps={{
                    className: "text-black dark:text-white",
                  }}
                />
              </div>
              <div className="max-w-sm py-2">
                <TextField
                  margin="dense"
                  id="eventLocationField"
                  label="Location"
                  type="text"
                  value={data.location}
                  onChange={(e) =>
                    setData({ ...data, location: e.target.value })
                  }
                  fullWidth
                  variant="standard"
                  InputLabelProps={{
                    className: "text-black dark:text-white",
                  }}
                  InputProps={{
                    className: "text-black dark:text-white",
                  }}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSubmit}>Create Event</Button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
