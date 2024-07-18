const express = require("express");
const connectToDB = require("./src/config/db");
const userRouter = require("./src/routes/userRoutes");
const bookRouter = require("./src/routes/bookRoutes");
const auth = require("./src/middlewares/auth");
const MongoStore = require("connect-mongo");
const session = require("express-session");
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 9090;
const db_url = process.env.DB_URI;


const app = express();
app.use(cors({origin:process.env.FRONTEND_URL}));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: db_url }),
    cookie: {
      // secure: true,
      httpOnly: true,
    },
  })
);

app.get("/", (req, res) => {
  res.send("this is a home route");
});
app.use("/user", userRouter);
app.use("/books", auth, bookRouter);

app.listen(port, async () => {
  try {
    await connectToDB(db_url);
    console.log("connect to database");
    console.log(`server is running at ${port}`);
  } catch (err) {
    console.log(err);
  }
});
