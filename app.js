const PORT = 8000;
const express = require("express");

const accountsRouetes = require("./apis/accounts/accounts.routes")
app = express();

app.use(express.json());


app.listen(PORT, () => console.log(`server running in ${PORT}`));