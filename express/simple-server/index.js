const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Insert your routes from your routers folder here
// app.use('/some-route', route)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
