import React, { useState } from 'react'

export default function TextPlace(props) {
    const [text, setText] = useState("ENTER TEXT...")
    const handleOnChange = (e) => setText(e.target.value)
    const handleUpClick = () => {
        if (text.length === 0) {
            props.alert("Enter Something ...", "suceess");
            return;

        }
        setText(text.toUpperCase())
        props.alert("Converted to Upper case Successfilly..", "suceess");
    }
    const handlermClick = () => {
        setText("");
        props.alert("Cleared text..!", "suceess");


    }
    const handleLwClick = () => {
        if (text.length === 0) if (text.length === 0) {
            props.alert("Enter Something ...", "warning");
            return;

        }
        setText(text.toLowerCase())
        props.alert("Converted to Lower case Successfilly..", "success");
    }

    const handlerevClick = () => {
        if (text.length === 0) {
            props.alert("Enter Something ...", "warning");
            return;

        }
        setText(text.split(" ").reverse().join(" "))
        props.alert("Text Reversed Successfilly..", "success");

    }
    const handlerepClick = () => {
        if (text.length === 0) {
            props.alert("Enter Something ...", "warning");
            return;

        }
        let t = prompt("Enter Word to be changed")
        let u = prompt("Enter New Word")
        setText(text.replace(t, u))
        setText(text.replace(t, u))
        props.alert("Data Replaced Successfilly.. ", "primary");
    }

    const countWords = (text) => {
        // Trim the text and split by spaces using regex to handle multiple spaces
        const words = text.trim().split(/\s+/);
        return words[0] === "" ? 0 : words.length; // Return 0 if the first word is empty
    };

    return (
        <>
            <h1>{props.head}</h1>

            <div className="mb-3 mt-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange} ></textarea>
            </div>
            {/* <button className='btn btn-primary ml-3 mr-3 mt-3' onClick={handleUpClick}>convert to upper case</button>
        <button className='btn btn-danger ml-3 mr-3 mt-3' onClick={handlermClick}>Remove</button> */}




            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Upper Case</button>
            <button type="button" className="btn btn-secondary mx-1 my-1" onClick={handlermClick}>Remove</button>
            <button type="button" className="btn btn-success mx-1 my-1" onClick={handleLwClick}>Lower Case</button>
            <button type="button" className="btn btn-danger mx-1 my-1" onClick={handlerevClick}>Reverse</button>
            <button type="button" className="btn btn-warning mx-1 my-1" onClick={handlerepClick}>Find & Replace</button>












            <div className="container my-3 ">
                <h1> Your Text Summary </h1>
                <p>{text.length} Characters , {countWords(text)} Words</p>
                <p>{countWords(text) * 0.08}Minutes to read</p>
                <h2>Preview</h2>
                <p><code>{text}</code></p>
            </div>






        </>
    )
}
