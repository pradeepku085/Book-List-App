require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Users = require("./Model/Users");
const Books = require("./Model/Books");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

const connectDB = async()=>{
    try {
        return await mongoose.connect(process.env.MONGO_URI, ()=>{
            console.log("Database Connected Successfully.")
        })
    } catch (error) {
        message: error;
        console.log("Database not connected");
    }
}

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Api for registration
app.post("/register", async(req, res)=>{
    try {
        if(true){
            const user = await Users.create({
                username: req.body.username,
                password: req.body.password,
            });
            res.status(200).json({
                status: "Success",
                data: {
                    user,
                },
            });
        }
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message,
        })
    }
})

//Api for Login

app.post("/login", async(req, res)=>{
    try {
        if(true){
            const result = await Users.findOne({
                username: req.body.username,
                password: req.body.password,
            }).select("-password");

            if(result){
                res.status(200).json({
                    status: "Success",
                    data: {
                        result,
                    }
                });
            }else{
                res.status(400).json({
                    status: "Failed",
                    data: {
                        message: "Invalid Username/Password",
                    }
                });
            }

        
        }
    } catch (error) {
        res.status(404).json({     
            status: "Failed",
            message: error.message,
        }
        )
    }
})


//Api for Add books

app.post("/addbooks", async(req, res)=>{
    try {
        if(true){
            const book = await Books.create({
                Title: req.body.Title,
                Author: req.body.Author,
                ISBN: req.body.ISBN,
                Publisher: req.body.Publisher,
                Published_Date: req.body.Published_Date,
                Description: req.body.Description
            });

            res.status(200).json({
                status: 'Success',
                data :{
                    book,
                }
            })
        }
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message,
        })
    }
})


// Api for find all books
app.get("/showbook", async(req, res)=>{
    try {
        if(true){
            const result = await Books.find();
            res.status(200).json(result);
        }

    } catch (error) {
       res.status(404).json({
        status: "Failed",
        message: error.message,
       }) 
    }
})

// API for find a book

app.get("/showbook/:id", async(req, res)=>{
    try {
        const book = await Books.findById({_id: req.params.id});
        res.status(200).json({
            status: "Success",
            data: {
                book,
            }
        })
    } catch (error) {
        res.status(404).json({
            status: "failed",
            message: error.message,
        })
    }
})

//Api for delete a book

app.delete("/deletebook/:id", async(req, res)=>{
    try {
        if(true){
            const book = await Books.deleteOne({_id: req.params.id});
            res.status(200).json({
                status: "Success",
                data : {
                    message: " Book deleted successfully."
                }
            })
        }
    } catch (error) {
        res.status(404).json({
            status: "failed",
            message: error.message,
        })
    }
})

//Api for search

app.get("/searchbook/:key", async(req, res)=>{
    try {
        if(true){
            const book = await Books.find({
                $or:[
                    {
                        Title: {$regex: req.params.key},
                    },
                    {
                        Author: {$regex: req.params.key},
                    }
                ]
            });
            res.status(200).json(book);
        }
    } catch (error) {
        res.status(404).json({
            status: "failed",
            message: error.message,
        })
    }
})

// API for edit a book
app.put("/editbook/:id", async(req, res)=>{
    try {
        if(true){
            const id = req.params.id;
            console.log(id);
            const book = await Books.updateOne(
                {_id: req.params.id},
                {
                    $set:{Title: req.body.Title,
                        Author: req.body.Author,
                        ISBN: req.body.ISBN,
                        Publisher: req.body.Publisher,
                        Published_Date: req.body.Published_Date,
                        Description: req.body.Description
                    }
                },
                {new: true}
            );
            res.status(200).json({
                staus: "Success",
                data: {
                    book,
                }
            })
        }
    } catch (error) {
        res.status(404).json({
            status: "failed",
            message: error.message,
        })
    }
});

app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}.`);
})
