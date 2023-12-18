const express=require('express');
const colors=require('colors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const connectDB=require("./config/db")
//
dotenv.config();

//mongo connected
connectDB();

// Rest Object
const app=express();


// Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/api/v1/user',require("./routes/userRoutes"))
app.use('/api/v1/doctor',require("./routes/doctorRoutes"))

//admin
app.use("/api/v1/admin", require("./routes/adminRoutes"));
const port=process.env.PORT || 8080
// Listen port
app.listen(port,()=>{
    console.log(
        `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white
    );
})