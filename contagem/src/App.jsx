
import Contagem from './componets/Contagem'
import Titulo from './componets/Titulo'
//imagem
import imagem from'./assets/desert.jpg'
import usecount from './hooks/usecount'
import'./App.css'


function App() {
  const [day,hour,minut,sec] =usecount('jan 1,2024 00:00:00')
  
//abaixo imagem colocada de forma dinamica
  return (
    <div className='App' style={{backgroundImage:`URL${imagem}`}}>
      <div className='container'>
       <Titulo title='Contagem Regressiva 2024'/>
        <div className='contagem'>
          <Contagem title='Dias' number={day}/>
          <Contagem title='Horas' number={hour}/>
          <Contagem title='Minutos' number={minut}/>
          <Contagem title='Segundos' number={sec}/>
        </div>
        
      </div>
    </div>
  )
}

export default App
