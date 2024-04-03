import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to uppercase", "success");
    }
    const handleLoClick = () => {
        console.log("lowercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted to lowercase", "success");
        

    }
    const handleclearClick = () => {
        console.log("Uppercase was Clicked" + text);
        let newText = ("");
        setText(newText)
        props.showalert("Cleared Text Successfully", "success");
        
    }
    const handlerespaceClick = () => {
        const trimmedText = text.replace(/\s+/g, ' ').trim();
        setText(trimmedText);
        props.showalert("Removed Extra Space Succesfully", "success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showalert("Speaking........", "success");
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('')
    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(32 33 95)' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'rgb(32 33 95)' }} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handlerespaceClick}>Remove Space</button>
            <button className="btn btn-warning mx-2 my-2" onClick={speak}>Speak</button>
            <div className="container my-3" style={{ Color: props.mode === 'dark' ? 'rgb(32 33 95)' : 'white' }}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Write something to preview it here!"}</p>
            </div>

        </div>

    )
}
