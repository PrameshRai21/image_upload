import "dotenv/config"
import { app } from "./app.js";
import { connectDB } from "./db/connection.db.js";

const port = process.env.PORT || 8000

connectDB()
.then(() => {

    app.on("error", (error)=> {
        console.log("ERROR! Server unable to connect with DB!!!", error);
    })

    app.listen(port, ()=> {
        console.log(`Server listening on port : ${port}`);
    })
})
.catch((error) => {
    console.log("ERROR! DB connection failed!!!", error);
})
