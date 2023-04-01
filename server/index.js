import app from "./app.js";
import mongoose from "mongoose";

import env from "dotenv";

env.config();

const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.PRODUCTION_DATABASE_MONGODB)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
