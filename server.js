// DEPENDENCIES
require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 3003;

// LISTEN
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
