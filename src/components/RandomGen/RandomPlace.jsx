import { useState, useEffect } from "react";
import axios from "axios";
import placeIcon from '../../assets/images/place.svg'


function RandomPlace() {
    const [place, setPlace] = useState('');

    const getPlace = async () => {
        try {
            const url = "https://randomuser.me/api/";
            const res = await axios.get(url);
            setPlace(`${res.data.results[0].location.city}, ${res.data.results[0].location.country}`);
        } catch (error) {
            console.error(error);
        }
    }

    function copyToClipboard() {
        // Get the text field
        var copyText = document.getElementById('placeDiv');
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        
        // Alert the copied text
        alert("Copied the text: " + copyText.value);
      }

    useEffect(() => {
        getPlace();
    }, []);

    const handleClick = async () => {
        await getPlace();
    };

    return (
        <div className="randomGenContainer">
            <button type="button" onClick={handleClick}><img src={placeIcon} alt="Place" /></button><br />
            <div><input id="placeDiv" value={place} readOnly /><input className="copyButton" type="button" value="Copy" onClick={copyToClipboard} /></div>
                
        </div>
    );
}

export default RandomPlace;
