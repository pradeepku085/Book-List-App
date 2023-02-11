import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook() {
    const [Title, setTitle] = useState("");
    const [Author, setAuthor] = useState("");
    const [ISBN, setISBN] = useState("");
    const [Publisher, setPublisher] = useState("");
    const [Published_Date, setPublished_Date] = useState("");
    const [Description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = async() =>{
        console.log(Title, Author, ISBN, Publisher, Published_Date, Description);
        let result = await fetch("http://localhost:5000/addbooks", {
            method: "post",
            body: JSON.stringify({
                Title, Author, ISBN, Publisher, Published_Date, Description
            }),
            headers:{
                "Content-Type" : "application/json",
            },
        });
        result = await result.json();
        console.log(result);
        navigate("/");
    };

    return (
        <div className='addBook'>
            <form className='addbook-form'>
                <button type='button' className='addbook-form-sunbit-btn1' onClick={()=>{navigate("/")}}>Show Book List</button>
                <h1>Add Book</h1>
                <h4>Create new book</h4>
                <input type="text" value={Title} placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} /> <br></br>
                <input type="text" value={Author} placeholder="Author" onChange={(e) => { setAuthor(e.target.value) }} /> <br></br>
                <input type="text" value={ISBN} placeholder="ISBN" onChange={(e) => { setISBN(e.target.value) }} /> <br></br>
                <input type="text" value={Publisher} placeholder="Publisher" onChange={(e) => { setPublisher(e.target.value) }} /> <br></br>
                <input type="text" value={Published_Date} placeholder="Published_Date" onChange={(e) => { setPublished_Date(e.target.value) }} /> <br></br>
                <input type="text" value={Description} placeholder="Description" onChange={(e) => { setDescription(e.target.value) }} /> <br></br>
                <button type='button' className='addbook-form-sunbit-btn2' onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default AddBook;