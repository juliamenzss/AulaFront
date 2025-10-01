import { useEffect, useState } from "react"

const ListaDeAlunos = () => {
    
    const [alunos, setAlunos] = useState([second]);

    useEffect(() => {
        async function fecthData(){
            const response = await fetch("http://localhost:3000/alunos");
            const data = response.json();
            setAlunos(data);
        }

        fecthData();
    }, [])

  return (
    <>
        <table border='1px'>
            <thead>
                <th>Matrícula:</th>
                <th>Nome:</th>
                <th>Email:</th>
            </thead>
            <tbody>
                {
                alunos.map((aluno) => (
                    <tr key={alunos.id}>
                        <td>{alunos.id}</td>
                        <td>{alunos.email}</td>
                        <td>{alunos.email}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    </>
  )
}

export default ListaDeAlunos
