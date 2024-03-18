import { useState, useEffect } from "react";
import axios from "axios";
import placeIcon from '../../assets/images/place.svg'


function RandomPlace() {
    const [place, setPlace] = useState(null);

    const getPlace = async () => {
        try {
            const url = "https://randomuser.me/api/";
            const res = await axios.get(url);
            setPlace(`${res.data.results[0].location.city} ${res.data.results[0].location.country}`);
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
