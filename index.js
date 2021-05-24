const express = require("express");
const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");
const app = express();
const jsonParser = express.json();

const cors = require("cors");

app.use(cors());
app.use(jsonParser);

app.use("/users", userRouter);
app.use("/images", imageRouter);

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log("Server is running on ", PORT));
