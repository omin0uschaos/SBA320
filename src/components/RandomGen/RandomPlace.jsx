import { useState, useEffect } from "react";
import axios from "axios";
import placeIcon from '../../assets/images/place.svg'


function RandomPlace() {
    const [place, setPlace] = useState(null);

    const getPlace = async () => {
        try {
            const url = "https://random-data-api.com/api/v3/projects/f89e59a9-fe33-4e4c-911c-88450bd1847b";
            const res = await axios.get(url);
            setPlace(`${res.data.city}, ${res.data.country}`);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPlace();
    }, []);

    const handleClick = async () => {
        await getPlace();
    };

    return (
        <>
            <button type="button" onClick={handleClick}><img src={placeIcon} alt="Place" /></button>
            <div className="placeDiv">
                {place}
            </div>
        </>
    );
}

export default RandomPlace;
