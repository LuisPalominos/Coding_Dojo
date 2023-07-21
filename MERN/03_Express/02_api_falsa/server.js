const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require('./routes/company.routes')(app);
require('./routes/user.routes')(app);
require('./routes/company.user.routes')(app);


app.listen( port, () => console.log(`Listening on port: ${port}`) );


