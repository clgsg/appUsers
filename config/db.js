const mongoose=require('mongoose');

mongoose
	.connect('mongodb://localhost:27017/BasicLogin')
	.then(()=> console.info('✅Connected to MongoDB'))
	.catch((error)=>{
		console.error("💔 Couldn't connect to MongoDB:", error.message);
		process.exit(0);
	});