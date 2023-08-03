const app = require('./config/express');
const Url = require('./api/models/Url');

Url.sync({ force: true });

const port = parseInt(process.env.PORT, 10) || 8080;

app.listen(port, () => {
  console.log(`The server is running at localhost: ${port}`);
});
