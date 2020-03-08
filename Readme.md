# NOTOR

Example:
`
const app=require("express")();
const notor = require("blocktor");
app.use(notor("<h1>Tor not Allowed</h1>"));
app.get("/",(req,res)=>{
res.json({"You are not Using tor:)"});
});
app.listen(8080,()=>{console.log("Listen");});
`
