import React, {useState} from 'react'


export default function TextForm(props) {


    // To change the state of text // events that we triggered // One type of functions which perform the actions what we have define while someone click the buttons.
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLwClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleCtClick = () => {
        let newText = '';
        setText(newText)
    }
    
    // To Change the value of text and to be able to write in text box.
    const handleOnChange = (event) =>{  
        setText(event.target.value)
    }

    // useState syntex
    const [text, setText] = useState("") 

  return (
    <>
    <div className="container">

    
        <div >
            <h1 className = 'mt-5'>{props.heading}</h1>
            <div className="mb-4">
                <textarea value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light'?'white':'lightgrey', color:  props.mode==='light'?'black':'white'}} className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className={`btn btn-${props.mode === 'light'?'primary':'dark'}`}>Upper Case</button>
            <button onClick={handleLwClick} className={`btn btn-${props.mode === 'light'?'primary':'dark'} mx-3`}>Lower Case</button>
            <button onClick={handleCtClick} className={`btn btn-${props.mode === 'light'?'primary':'dark'}`}>Clear Text</button>

        </div>
    </div>

    <div className={`container mt-3`}>
        <h1>
            Text Summary :

        </h1>
        <p>
            {text.length} charactors.  {text.split(" ").length} Words.  {0.008* text.split(" ").length} Minus 

        </p>

        <p style={{color: props.mode==='light'?'black':'white', fontWeight:500}} className='preview my-3' >
            {text.length>0?text:"Write something to preview it."}
        </p>


        </div>
    </> 
  )
}
