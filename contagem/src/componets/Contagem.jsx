import'./contagem.css'

const Contagem=({title,number})=>{
    return(
        <div className="counter">
            <p className="number">{number}</p>
            <h3 className="text">{title}</h3>
        </div>
    )
}
export default Contagem