import {useState} from'react'
//construção da contagem regressiva
//duas funçoes 
const usecount=(date)=>{
    const[day,setday]=useState();
    const[hour,sethour]=useState();
    const[minut,setminut]=useState();
    const[sec,setcsec]=useState();
   
        const usecount=()=>{
            const coutDate=new Date(date).getTime()
        const now=new Date().getTime()

       const intervalo= coutDate - now

       const second=1000
       const minute=second*60
       const hour=minute * 60
       const day= hour *24

       const daynumber=Math.floor(intervalo/day)
       const hournumber=Math.floor((intervalo%day) /hour)
       const minnumber=Math.floor((intervalo%hour)/minute)
       const secnumber=Math.floor((intervalo%minute)/second)
       console.log(daynumber,hournumber,minnumber,secnumber);

       setday(daynumber)
       sethour(hournumber)
       setminut(minnumber)
       setcsec(secnumber)
        }
        setInterval(usecount,1000)
     

        return [day,hour,minut,sec];
    
}
export default usecount