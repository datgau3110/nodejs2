import '../Style/main.css'
import React, { useState } from "react";
import List from './ListMenu';
function Menu() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };


    return (
        <div style={{marginLeft:'5rem'}} >
            <h1 style={{marginLeft:'4rem'}}>React Search</h1>
            <div className="search" style={{marginLeft:'4rem'}}>
                <input
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    label="Search"
                />
            </div>
            <List input={inputText}></List>
        </div>
    );
}

export default Menu;