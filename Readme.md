# NOTOR

Example:
`
const app=require("express")();
const notor = require("blocktor");
app.use(notor({"forbidden": "tor"}));
app.get("/",(req,res)=>{
res.json({"You are not Using tor:)"});
});
app.listen(8080,()=>{console.log("Listen");});
`
