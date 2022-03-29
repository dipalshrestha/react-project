import React, { useState } from "react";

function CreateArea(props)  {
    const [isExpandable, setisExpandable] = useState(false)

    const [ note, setNote] = useState({
        title: "",
        content: ""
    });
    function handleChange(event){
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote, [name] : value
            };
        });

        

    }

    function submitNode(event) {
        if(note.title === "" || note.content === ""){
            alert("Please enter both Title and Content" )
           
        }   else {
            props.onAdd(note);
                }
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();

    }
    function expand(){
        setisExpandable(true);
    }
    
    return(
        <div>
            <form>
                {isExpandable && <input name="title" value={note.title} onChange={handleChange}placeholder="Title" />}
                {/* <input name="title" value={note.title} onChange={handleChange}placeholder="Title" /> */}
                <textarea onClick={expand} name="content" value={note.content} onChange={handleChange}placeholder="Take a note..." rows={isExpandable ? "3": "1"} />
                {isExpandable &&<button onClick={submitNode}>Add</button> }
            </form>
        </div>
    )
}


export default CreateArea;