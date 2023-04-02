import React from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function UserProfile({ open, setOpen }) {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <FaUserCircle
        size="24"
        className="top-navigation-icon"
        onClick={() => setOpen(!open)}
      />

      <Dialog open={open} onClose={handleClose}>
        <div className="text-black dark:text-white dark:bg-gray-900 flex flex-row">
          <div>
            <DialogTitle className="flex flex-col items-center pb-10">
              View Profile
            </DialogTitle>
            <div className="flex flex-col items-center pb-10">
              <div class="relative inline-flex items-center justify-center w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span class="font-medium text-gray-600 dark:text-gray-300 mr-2">
                  JL
                </span>
              </div>
            </div>
            <div>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="FullNameField"
                  label="Full Name:"
                  type="text"
                  fullWidth
                  disabled={true}
                  variant="standard"
                  InputLabelProps={{
                    className: "text-gray-600 dark:text-white",
                  }}
                  InputProps={{
                    className: "text-gray-600 dark:text-white",
                  }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="EmailField"
                  label="Email:"
                  type="text"
                  fullWidth
                  variant="standard"
                  disabled={true}
                  InputLabelProps={{
                    className: "text-black dark:text-white",
                  }}
                  InputProps={{
                    className: "text-black dark:text-white",
                  }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="UserNameField"
                  label="User Name:"
                  type="text"
                  fullWidth
                  variant="standard"
                  disabled={true}
                  InputLabelProps={{
                    className: "text-black dark:text-white",
                  }}
                  InputProps={{
                    className: "text-black dark:text-white",
                  }}
                />
              </DialogContent>
              <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                {/* <Button onClick={handleOpen}>Change Password</Button> */}
              </div>
              <DialogActions>
                <Button className="  dark:bg-darkGreen" onClick={handleClose}>
                  Close
                </Button>
              </DialogActions>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
