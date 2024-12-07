import express from 'express'
const app = express();
 
 
app.use(express.static("public"));
app.use(express.json());
 
app.get("/recivedData" , (req , res)=>{
    const {name , age} = req.body;
    if(name && age) {
        res.status(200).json({
            message : 'message recived successfully ',
            data : {
                name : name ,
                age : age
            }
        });
    }
    else{
        res.status(404).json({
            message  :"data not recived"
        });
    }
 
});
 
app.post("/getData" ,(req , res)=>{
    const{name , age } = req.body;
    res.status(200).json({
        message : "data recived successfully",
        data  : {
            name : name ,
            age : age
        }
    });
});
 
app.listen(3000 , ()=>{
    console.log("Server is running on 3000")
});