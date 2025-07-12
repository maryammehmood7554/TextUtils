import React, {useState} from 'react'
export default function TextForm(props) {
    
    // const[text, setText]= useState('Enter text here');  // state(HOOKS)
    const[text, setText]= useState('');  // state(HOOKS)
    const UpClick= ()=>{  
        // console.log('Upper Case was Clicked' + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase!", "success");
    }
    const LowClick= ()=>{  
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase!", "success");
    }
    const ClearTextClick= ()=>{  
        let newText= "";
        setText(newText);
        props.showAlert("Text Cleared!", "info");
    }
    
    const handleOnChange= (event)=>{
        // console.log('On Change');
        setText(event.target.value); //using this we will be able to type text
    } 
    const handleCopy=()=>{
        // console.log('Copied'); 
        var text = document.getElementById('box');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard!", "info");
    }
  return (
    <>
    <div className="container">
  <div className="mb-3">
        <h1 className="text-center font-family">{props.heading}</h1>
        <hr />
    <label htmlFor="box" className="form-label">Message:</label>
    <textarea id="box" className="form-control"style={{boxShadow:props.mode ==='light'?'0 4px 10px grey':'1 3px 3px white'}}
     value={text} onChange={handleOnChange} rows="8"placeholder="Type Message Here"></textarea>
  </div>
   <button type="submit" className="btn btn-primary" onClick={UpClick}>Convert To UpperCase</button>
   <button type="submit" className="btn btn-primary ms-3" onClick={LowClick}>Convert To LowerCase</button>
   <button type="submit" className="btn btn-primary ms-3" onClick={ClearTextClick}>Clear Text</button>
   <button type="submit" className="btn btn-primary ms-3" onClick={handleCopy}>Copy Text</button>
</div>
<br /> <hr />

<div className="container my-4">
<div className="card p-3 my-3 card-custom shadow-sm bg-secondary text-light rounded-4">
  <h1 className="font-family">Your Text Summary:</h1>
  <hr />
  <p><b>Words:</b> {text.split(" ").length-1}</p>
  <p><b>Characters:</b> {text.length}</p>
  <p><b>Sentences:</b> {text.split(".").length-1}</p>  
  <p><b>Estimated Read Time:</b> {0.008 * text.split(" ").length} Minutes</p>
</div>
  
  <h2 className="subtitle mt-4 fw-semibold text-secondary">Preview</h2>
  <p className="border p-3 bg-light rounded" style={{boxShadow:props.mode ==='light'?'0 4px 10px grey':'1 3px 3px white'}}>
    {text.length>0?text:'Enter Something In The Textbox Box Above To Preview It Here' }</p>
</div>

</>
  )
}