import React, { useState } from 'react'

export default function TextPlace(props) {
    const [text, setText] = useState("ENTER TEXT...")
    const handleOnChange = (e) => setText(e.target.value)
    const handleUpClick = () => setText(text.toUpperCase())
    const handlermClick = () => setText("")
    const handleLwClick = () => setText(text.toLowerCase())
    return (
        <div>
            <h1>{props.head}</h1>

            <div className="mb-3 mt-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange} ></textarea>
            </div>
            {/* <button className='btn btn-primary ml-3 mr-3 mt-3' onClick={handleUpClick}>convert to upper case</button>
        <button className='btn btn-danger ml-3 mr-3 mt-3' onClick={handlermClick}>Remove</button> */}

            <div className="container " >
                <button type="button" className="btn btn-primary " onClick={handleUpClick}>Upper Case</button>
                <span>&nbsp;</span>
                <button type="button" className="btn btn-danger" onClick={handlermClick}>Remove</button>
                <span>&nbsp;</span>
                <button type="button" className="btn btn-primary " onClick={handleLwClick}>Lower Case</button>
            </div>

        </div>
    )
}
