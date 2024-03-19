import './Creations.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Creations() {
  const [creationList, setCreationList] = useState([]);

  useEffect(() => {
    populateCreationList();
  }, []);

  const populateCreationList = () => {
    const creations = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) creations.push(key);
    }
    setCreationList(creations);
  };

  const handleDelete = (creation) => {
    localStorage.removeItem(creation); 
    populateCreationList(); 
  };

  return (
    <section id='creationsSection'>
      <h1>Creations</h1>
      <ul>
        {creationList.map((creation, index) => (
          <li key={index}>
            <Link to={`/creations/${encodeURIComponent(creation)}`}>{creation}</Link>
            <button onClick={() => handleDelete(creation)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Creations;
