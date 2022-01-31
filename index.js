const express=require('express');
const app = express();
require("./config/db")

app.use(express.json())
app.use((error, req, res, next)=> {
	res.status(400).json({
		success: false,
		message: error.message,
	})
})

app.listen(3000, ()=>{
	console.info("Listening... 🛸👂🏻")
});



