import { useState, useEffect } from "react";
import axios from "axios";

function RandomImage() {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const url = "https://picsum.photos/600/300";

        async function getImage() {
            try {
                const res = await axios.get(url);
                setImageUrl(res.request.responseURL);
            } catch (error) {
                console.error(error);
            }
        }

        getImage();
    }, []);

    return (
        <>
            <div className="randomImageDiv">
                {imageUrl && <img src={imageUrl} alt="Random Image" />}
            </div>
        </>
    );
}

export default RandomImage;
