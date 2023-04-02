import toast from "react-hot-toast";

const notify = (message, icon = "❌") =>
  toast(message, {
    icon: icon,
    style: {
      borderRadius: "50px",
      boxShadow: "0 90",
      background: "white",
      color: "black",
      fontWeight: "bold",
    },
  });

export default notify;
