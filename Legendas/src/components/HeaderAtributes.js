import React, { useContext } from 'react';
import context from '../Provider/context';
import RemainingAttributes from './RemainingAttributes';

function PageLegends() {
    const { agilidadeAgora,
        atackAgora,
        chacaraAgora,
        defesaAgora, setPowerUsed , powerUsed , powerUse ,setChacara ,statusSharingan ,setStatusSharingan,setStatusConfirm ,hpAgora} = useContext(context)
   

      const usedSharingan = () => {
         if(powerUse.includes('Sharingan') && statusSharingan > 0) {
              setPowerUsed([...powerUsed,`passo 500 de Ck para Sharingan`])
             setChacara(chacaraAgora - 500)
        }
        
          if(powerUse.includes('Sharingan')) {
          setStatusSharingan(statusSharingan + 1)
          } else {
              setStatusSharingan(0)
          }
          setStatusConfirm(true)
      }
   
    return (
        <div >
           
            <div  className="atributes-legends">
            <div className="atributes-now" >
                <div className="now-container">
                    <p className="now">Atack</p>
                < p className="now">{atackAgora}</p>
                </div>
                <div className="now-container">
                    <p className="now">Defesa</p>
                <p className="now" >{defesaAgora}</p>
                </div>
                <div className="now-container">
                <p className="now">Chakra</p>
                <p className="now">{chacaraAgora}</p>
                </div>
                <div className="now-container">
                    <p className="now">Agilidade</p>
                <p className="now">{agilidadeAgora}</p>
                </div>
                <div className="now-container">
                    <p className="now">HP</p>
                <p className="now">{hpAgora}</p>
                </div>
            </div>
            <div className="over">
            <RemainingAttributes/>
            <button className="confirm-over-button" onClick={usedSharingan}>
                Confirmar
            </button>
            </div>
            </div>
            
        </div>

    )
}

export default PageLegends;