import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { dark } from "@mui/material/styles/createPalette";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="p-0 w-12 h-12 bg-darkYellow text-darkGreen dark:text-white dark:bg-lightGreen 
         hover:bg-darkGreen dark:hover:bg-darkYellow hover:text-white rounded-full active:shadow-g mouse shadow transition ease-in duration-200 focus:outline-none fixed bottom-5 right-5"
        variant="outlined"
        onClick={handleClickOpen}
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
      </Button>

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
                variant="standard"
                sx={{
                  input: { color: "white" },
                }}
              />

              <div className="max-w-sm py-3">
                <label for="category">Category: </label>
                <select
                  id="category"
                  name="categoryField"
                  className="dark:border-gray-600 dark:placeholder-gray-400 dark:bg-gray-700"
                >
                  <optgroup className="backgroundColor:black">
                    <option value="Athletics" className="Black">
                      Athletics
                    </option>
                    <option value="Academic">Academic</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Food">Food</option>
                    <option value="Cultural">Cultural</option>
                  </optgroup>
                </select>
              </div>
              <div className="max-w-sm py-3">
                <label for="eventType">Event type: </label>
                <select
                  id="eventType"
                  name="eventTypeField"
                  className="dark:border-gray-600 dark:placeholder-gray-400 dark:bg-gray-700"
                >
                  <option value="inperson">in-person</option>
                  <option value="online">online</option>
                </select>
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
              <Button onClick={handleClose}>Create Event</Button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
