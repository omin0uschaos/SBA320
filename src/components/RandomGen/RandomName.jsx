import { useState, useEffect } from "react";
import axios from "axios";
import personIcon from '../../assets/images/person.svg'


function RandomName() {
    const [name, setName] = useState(null);

    const getName = async () => { // Define getName function outside of useEffect
        try {
            const url = "https://randomuser.me/api/";
            const res = await axios.get(url);
            setName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);
        } catch (error) {
            console.error(error);
        }
    };

    function copyToClipboard() {
        // Get the text field
        var copyText = document.getElementById('nameDiv');
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        
        // Alert the copied text
        alert("Copied the text: " + copyText.value);
      }

    useEffect(() => {
        getName();
    }, []);

    const handleClick = async () => {
        await getName();
    };

    return (
        <>        
            <button type="button" onClick={handleClick}><img src={personIcon} alt="Person" /></button>
            <div><input id="nameDiv" value={name} /><input type="button" value="Copy" onClick={copyToClipboard} /></div>
        </>
    );
}

export default RandomName;
