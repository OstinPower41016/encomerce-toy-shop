import app from "./express";
import mongoose from "mongoose";

mongoose.connect(process.env.mongoUri!, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", () => {
  throw Error("unable to connect to db");
});

app.listen(process.env.port, () => {
  console.info("Server started on port %s.", process.env.port);
});
