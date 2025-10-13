const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const petRoutes = require("./routes/petRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const { ensureDb } = require("./utils/jsonDb");
ensureDb();

app.use("/anims", petRoutes);

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
