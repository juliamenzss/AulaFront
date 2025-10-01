import { useEffect, useState } from 'react';
import axios from 'axios';

const Noticias = () => {

    const [noticias, setNoticias] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/noticias")
        .then(response => setNoticias(response.data))
        .catch(error => console.log(error));
    }, [])
  return (
    <div>
      <h1>Notícias</h1>
      <ul>
        {
            noticias.map((noticia) => (
                <li key={noticia.id}>
                    <h2>{noticia.titulo}</h2>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Noticias
