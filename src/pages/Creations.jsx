import React, { useState, useEffect } from 'react';

function Creations() {
  const [creationList, setCreationList] = useState([]);

  useEffect(() => {
    const populateCreationList = () => {
      const creations = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        creations.push(key);
      }
      setCreationList(creations);
    };
    populateCreationList();
  }, []);

  return (
    <>
      <h1>Creations</h1>
      <ul>
        {creationList.map((creation, index) => (
          <li key={index}>{creation}</li>
        ))}
      </ul>
    </>
  );
}

export default Creations;
