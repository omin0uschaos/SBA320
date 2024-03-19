import { useState, useEffect } from "react";
import axios from "axios";

function RandomImage() {
    const [imageUrl, setImageUrl] = useState(null);
    const [imageSize, setImageSize] = useState(null);

    useEffect(() => {
        const divSize = document.getElementById('randomImageDiv').getBoundingClientRect()
        let divWidth = Math.floor(divSize.width);
        let divHeight = Math.floor(divSize.height)
        const url = `https://picsum.photos/${divWidth}/${divHeight}`;

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
            <div>
                <img src={imageUrl} alt="Random Image" />
            </div>
        </>
    );
}

export default RandomImage;
