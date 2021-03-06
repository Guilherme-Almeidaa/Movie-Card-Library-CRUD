import React, { useEffect , useState } from 'react';
import Context from './context';



function Provider({ children }) {

    const [statusSharingan , setStatusSharingan ] = useState(0);
    const [ statusConfirm , setStatusConfirm] = useState(false);
    const [agilidadeAgora, setAg] = useState('');
    const [atackAgora, setAtack] = useState('');
    const [chacaraAgora, setChacara] = useState('');
    const [defesaAgora, setDefesa] = useState('');
    const [powerUse , setPowerUse] = useState([])
    const [statusKunai , setStatusKunai] = useState(false);
    const [ powerUsed , setPowerUsed] = useState([]);
    const [hpAgora , setHp] = useState('');
    
   
    const ATRIBUTES = JSON.parse(localStorage.getItem('atributes')) || { atack:0, agilidade:0, chacara:0, defesa:0, hp:0 } ;
    
    const { atack, agilidade, chacara, defesa , hp } = ATRIBUTES

    useEffect(() => {
     setAg(agilidade)
     setAtack(atack)
     setDefesa(defesa)
     setChacara(chacara)
     setHp(hp);
    },[atack,agilidade,chacara,defesa,hp])


    const convertNumber = (number) => {
        if(number.toString().length === 4 ) {
            return  number.toString().substring('.', 1) +'.'+ number.toString().substr(1)
        } else if (number.toString().length === 5){
         return number.toString().substring('.', 2) +'.'+ number.toString().substr(2)
        } else if (number.toString().length === 6) {
         return number.toString().substring('.', 3) +'.'+ number.toString().substr(3)
        } else {
            return  number
        }
    }

  

    const context = {
        agilidadeAgora,
        atackAgora,
        chacaraAgora,
        defesaAgora,
        statusKunai,
        powerUse,
        powerUsed,
        statusSharingan ,
        statusConfirm ,
        hpAgora,
        setStatusConfirm,
        setStatusSharingan,
        convertNumber,
        setPowerUsed,
        setPowerUse,
        setChacara,
        setAg,
        setAtack,
        setDefesa,
        setStatusKunai,
    }
    return (
        <Context.Provider value={context} >
            {children}
        </Context.Provider>
    )

}

export default Provider