import express from "express";
const app = express();
export default app;

import usersRouter from "#api/users";
import getUserFromToken from "#middleware/getUserFromToken";
import handlePostgresErrors from "#middleware/handlePostgresErrors";
import cors from "cors";
import morgan from "morgan";
import ratingsRouter from "#api/ratings";
import moviesRouter from "#api/movies";
import watchlistRouter from "#api/watchlist"
import reviewsRouter from "#api/reviews";

app.use(cors({ origin: ["https://leisurebuddy.netlify.app", "http://localhost:5173"],
  credentials: true
}));

app.use(morgan("dev"));

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(getUserFromToken);

// app.get("/", (req, res) => res.send("Hello, World!"));

app.use("/users", usersRouter);
app.use("/ratings", ratingsRouter);
app.use("/movies", moviesRouter);
app.use("/api/movies", moviesRouter);
app.use("/watchlist", watchlistRouter);
app.use("/reviews", reviewsRouter);

app.use(handlePostgresErrors);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});
