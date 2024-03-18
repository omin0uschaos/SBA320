import { useState, useEffect } from "react";
import axios from "axios";

function RandomName() {
    const [name, setName] = useState(null);

    useEffect(() => {
        const url = "https://randomuser.me/api/";

        async function getName() {
            try {
                const res = await axios.get(url);
                setName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);
            } catch (error) {
                console.error(error);
            }
        }

        getName();
    }, []);

    return (
        <>
            <div className="quoteDiv">
                {name}
            </div>
        </>
    );
}

export default RandomName;
