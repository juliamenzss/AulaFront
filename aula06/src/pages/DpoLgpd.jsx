import { useEffect, useState } from 'react';
import axios from 'axios';

const DpoLgpd = () => {
  
  const [dpolgpd, setDpolgpd] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/dpolgpd")
    .then(response => setDpolgpd(response.data))
    .catch(error => console.log(error));
  }, [])
  return (
    <div>
        <h1>DPO- Lgpd</h1>
      <ul>
        {
            dpolgpd.map((dpolgpd) => (
                <div key={dpolgpd.id}>
                    <h2>{dpolgpd.titulo}</h2>
                    <p>{dpolgpd.texto}</p>
                </div>
            ))
        }
      </ul>
    </div>
  )
}

export default DpoLgpd
