import React,{useState} from 'react';

function ChangeAtributes () {
   const [agilidade , setAg] = useState('');
   const [atack ,setAtack] = useState('');
   const [chacara , setChacara] = useState('');
   const [defesa , setDefesa] = useState('');
   const [hp , setHp] = useState('');
 
   const ATRIBUTES = JSON.parse(localStorage.getItem('atributes'));
    const changeAtribute = ({target}) => {

        

        const  {value , name} = target
        if(name === 'agilidade') {
            setAg(Number(value))
        } else if (name === 'atack') {
            setAtack(Number(value))
        } else if (name === 'defesa') {
            setDefesa(Number(value))
        } else if (name === 'chacara') {
            setChacara(Number(value))
        } else if (name ==='hp') {
            setHp(Number(value))
        }
      
    }

    const confirmAg =() => {
        
        localStorage.setItem('atributes' , JSON.stringify({...ATRIBUTES, agilidade}))
    }

    const confirmAtk = () => {
        localStorage.setItem('atributes' , JSON.stringify({...ATRIBUTES, atack}))
    }

    const confirmChacara =() => {
        localStorage.setItem('atributes' , JSON.stringify({...ATRIBUTES, chacara}))
    }

    const confirmDefesa = () => {
        localStorage.setItem('atributes' , JSON.stringify({...ATRIBUTES, defesa}))
    }

    const confirmHP = () => {
        localStorage.setItem('atributes' , JSON.stringify({...ATRIBUTES, hp}))
    }

    return (
        <div>
            <form>
                <label>Atack</label>
                <input onChange={changeAtribute} name="atack" type="number" />
                <button onClick={confirmAtk} >Confirmar</button>
                <label>Defesa</label>
                <input onChange={changeAtribute} name="defesa" type="number" />
                <button onClick={confirmDefesa} >Confirmar</button>
                <label>Agilidade</label>
                <input onChange={changeAtribute} name="agilidade" type="number" />
                <button onClick={confirmAg} >Confirmar</button>
                <label>Chacára</label>
                <input onChange={changeAtribute} name="chacara" type="number" />
                <button onClick={confirmChacara} >Confirmar</button>
                <label>HP:</label>
                
                <input onChange={changeAtribute} name="hp" type="number" />
                <button onClick={confirmHP} >Confirmar</button>
                
                

            </form>
            
        </div>
    )
}

export default ChangeAtributes;