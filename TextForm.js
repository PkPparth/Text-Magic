import React,{ useState } from 'react'

export default function TextForm(props){

    const handleUpclick = ()=>{
            console.log("upper case has clicked"+ text);
            let newText = text.toUpperCase(); 
            setText(newText) 
            props.showAlert("converted to uppercase","success");
            document.title='Text Magic - Uppercase';
    }
    const handleLoclick = ()=>{
        console.log("lower case has clicked"+ text);
        let newText = text.toLowerCase(); 
        setText(newText) 
        props.showAlert("converted to lowercase","success");
        document.title='Text Magic - Lowercase';
}

// const speak = () => {
//     let msg = new SpeechSynthesisUtterance();
//     msg.text = text;
//     window.speechSynthesis.speak(msg);
//   }

const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");

}
const handleClear=()=>{
    let newtxt = ('');
    setText(newtxt);
    props.showAlert("Cleared text","success");
}
const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces","success");

}
    const handleOnChange = (event)=>{ 
            console.log("on charge");
            setText(event.target.value);
    } 
    const[text,setText] = useState("");
    return(
        <> 
        <div style={{color:props.mode === 'dark'?'white':'black'}}>
        <div className="container" style={{backgroundColor :props.mode === 'dark'?'#24688d':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                 <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode === 'dark'?'#24688d':'white',color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
            {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button> */}
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
        </div>

        <div className="container my-3" style={{backgroundColor :props.mode === 'dark'?'#24688d':'white'}}>
            <h1>your summary</h1> 
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minuted read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </div>
        </>
        
    );
}

