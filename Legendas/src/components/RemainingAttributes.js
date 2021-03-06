import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import context from '../Provider/context';
import copy from 'clipboard-copy';

function RemainingAttributes() {
    const { agilidadeAgora,
        atackAgora,
        chacaraAgora,
         powerUsed , convertNumber , setPowerUsed, statusConfirm , setStatusConfirm } = useContext(context)
   
      const copyResult = ({target}) => {
        const { innerText } = target
        copy(innerText)
        setPowerUsed([])
        setStatusConfirm(false)
      }

   
    return (
        <Link  onClick = {copyResult} className={statusConfirm ?  "remaining-attributes" : "remaining-attributes-desabled" }>
            atk:{convertNumber(atackAgora)}<br/>
            {powerUsed.map((item) => `${item} ||`  )}<br/>
            - - - - - - - - - - - - - - - - - - - -<br/>
            ag Restante:{convertNumber(agilidadeAgora)}<br/>
            ck restante:{convertNumber(chacaraAgora)}<br/>
             
        </Link>

    )
}

export default RemainingAttributes;