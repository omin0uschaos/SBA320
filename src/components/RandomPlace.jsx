import { useState, useEffect } from "react";
import axios from "axios";

function RandomPlace() {
    const [place, setPlace] = useState(null);

    useEffect(() => {
        const url = "https://random-data-api.com/api/v3/projects/f89e59a9-fe33-4e4c-911c-88450bd1847b";

        async function getPlace() {
            try {
                const res = await axios.get(url);
                setPlace(`${res.data.city}, ${res.data.country}`);
            } catch (error) {
                console.error(error);
            }
        }

        getPlace();
    }, []);

    return (
        <>
            <div className="placeDiv">
                {place}
            </div>
        </>
    );
}

export default RandomPlace;
