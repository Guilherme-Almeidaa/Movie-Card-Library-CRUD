import React ,{useState} from 'react';


function Register () {

    const [agilidade , setAg] = useState('');
    const [atack ,setAtack] = useState('');
    const [chacara , setChacara] = useState('');
    const [defesa , setDefesa] = useState('');
    const [hp , setHp] = useState('');
  
   
     const changeAtribute = ({target}) => {
 
         
 
         const  {value , name} = target
         if(name === 'agilidade') {
             setAg(value)
         } else if (name === 'atack') {
             setAtack(value)
         } else if (name === 'defesa') {
             setDefesa(value)
         } else if (name === 'chacara') {
             setChacara(value)
         } else if (name ==='hp') {
             setHp(value)
         }
       
     }
  
     const confirm = () => {
         localStorage.setItem('atributes', JSON.stringify({agilidade,atack,defesa,chacara , hp}))
     }

    return (
        <div>
             <form>
                <label>Atack</label>
                <input onChange={changeAtribute} name="atack" type="number" />
               
                <label>Defesa</label>
                <input onChange={changeAtribute} name="defesa" type="number" />
                
                <label>Agilidade</label>
                <input onChange={changeAtribute} name="agilidade" type="number" />
                
                <label>Chacára</label>
                <input onChange={changeAtribute} name="chacara" type="number" />
                <label>HP:</label>
                <input onChange={changeAtribute} name="hp" type="number" />
                
                

            </form>
            <button onClick={confirm}>Confirma</button>
        </div>

    )
}

export default Register;