const express = require("express");
const app = express();
const cors = require("cors");

const corsOption = {
    origin : ["http://localhost:3000"]
}
app.use(cors(corsOption));
app.use(express.json());

const routers = require("./api/routers");

for (const route in routers){
    app.use(`/${route}`, new routers[route]().router)
}

app.use('/', (req, res)=>{
    res.send("ok")
});

const PORT = 5001;
app.listen(PORT, ()=> {
    console.log(`Serveur is running on port ${PORT}.`);
});