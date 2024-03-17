import { useState, useEffect } from "react";
import axios from "axios";

function RandomQuote() {
    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        const url = "https://api.quotable.io/quotes/random";

        async function getQuote() {
            try {
                const res = await axios.get(url);
                setQuote(res.data[0]?.content);
                setAuthor(res.data[0]?.author);
            } catch (error) {
                console.error(error);
            }
        }

        getQuote();
    }, []);

    return (
        <>
            <div className="quoteDiv">
                <p>{quote}</p>
                <p>{author}</p>
            </div>
        </>
    );
}

export default RandomQuote;
