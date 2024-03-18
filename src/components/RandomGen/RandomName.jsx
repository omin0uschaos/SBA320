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

    useEffect(() => {
        getName();
    }, []);

    const handleClick = async () => {
        await getName();
    };

    return (
        <>        
            <button type="button" onClick={handleClick}><img src={personIcon} alt="Person" /></button>
            <div className="nameDiv">
                {name}
            </div>
        </>
    );
}

export default RandomName;
