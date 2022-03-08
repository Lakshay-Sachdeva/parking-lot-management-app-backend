const app = require(".");
require("dotenv").config();

const connect = require("./configs/db");

app.listen(process.env.PORT, async () => {
  await connect();
  console.log(`Server is Live on ${process.env.PORT}`);
});
