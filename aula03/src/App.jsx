import Aluno from "./components/Aluno"
import Linguagens from "./components/Linguagens"
import Produto from "./components/Produto"

const App = () => {
  return (
    <div>
      {/* {
        [
          {nome: 'João', email: 'joao@gmail.com', curso: 'Engenharia', media: 8.5},
          {nome: 'Maria', email: 'maria@gmail.com', curso: 'Medicina', media: 6.0},
          {nome: 'Jose', email: 'jose@gmail.com', curso: 'Psicologia', media: 7.0},
        ].map((aluno) => 
        <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media} />)
      }

      {
        [
          {nome: 'Java', dificuldade: 'Média'},
          {nome: 'JavaScript', dificuldade: 'Fácil'},
          {nome: 'C++', dificuldade: 'Difícil'},
          {nome: 'C#', dificuldade: 'Médio'},
          {nome: 'Python', dificuldade: 'Fácil'} 
        ].map((linguagem) =>
        <Linguagens nome={linguagem.nome} dificuldade={linguagem.dificuldade} />)
      } */}

      {
        [
          {nome: 'Bota de rodeio', preco: 100, categoria: 'Sapato', quantidade: 10},
          {nome: 'Blusa', preco: 15, categoria: 'Roupa', quantidade: 30},
          {nome: 'Saia', preco: 37, categoria: 'Roupa', quantidade: 0},
        ].map((produto) =>
        <Produto nome={produto.nome} preco={produto.preco} categoria={produto.categoria} quantidade={produto.quantidade} status={produto.status} />)
      }

    </div>
  )
}

export default App
