import * as dotenv from "dotenv";

import app from "./app";

dotenv.config();
const port = process.env.PORT_EXPRESS || 3001;

app.listen(port, () => {
  console.log(`The server is runnig on port ${port}`);
});
