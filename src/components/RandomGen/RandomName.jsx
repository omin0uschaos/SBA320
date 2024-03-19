import { useState, useEffect } from "react";
import axios from "axios";
import personIcon from '../../assets/images/person.svg'


function RandomName() {
    const [name, setName] = useState('');

    const getName = async () => {
        try {
            const url = "https://randomuser.me/api/";
            const res = await axios.get(url);
            setName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);
        } catch (error) {
            console.error(error);
        }
    };

    function copyToClipboard() {
        var copyText = document.getElementById('nameDiv');
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        alert("Copied the text: " + copyText.value);
      }

    useEffect(() => {
        getName();
    }, []);

    const handleClick = async () => {
        await getName();
    };

    return (
        <div className="randomGenContainer">        
            <button type="button" onClick={handleClick}><img src={personIcon} alt="Person" /></button><br />
            <div><input id="nameDiv" value={name} readOnly /><input className="copyButton" type="button" value="Copy" onClick={copyToClipboard} /></div>
        </div>
    );
}

export default RandomName;
