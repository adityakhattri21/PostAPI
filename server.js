const app = require("./app");

const port = process.env.PORT || 5000;

const server = app.listen(port,()=>{
    console.log(`Server running at port: ${port}`);
})