import Adicao from "./components/Adicao"
import Multiplicacao from "./components/Multiplicacao"
import Subtracao from "./components/Subtracao"
import Divisao from "./components/Divisao"

const App = () => {
  return (
    <div>
      <Adicao num1={10} num2={5}/>
      <Subtracao num1={12} num2={3}/>
      <Divisao num1={9} num2={2}/>
      <Multiplicacao num1={90} num2={5}/>
    </div>
  )
}

export default App
