import express from 'express';
import userRoute from './routes/user.route.js'; // .js extension is important with type module
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Insert your routes from your routers folder here
app.use('/user', userRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
