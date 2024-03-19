import './Creations.css'
import { useParams } from 'react-router-dom';


function Creation() {
    const { title } = useParams();
  const creationContent = localStorage.getItem(title);

  return (
    <section id='creationSection'>
      <h1>{title}</h1>
      <p>{creationContent}</p>
    </section>
  );
}

export default Creation