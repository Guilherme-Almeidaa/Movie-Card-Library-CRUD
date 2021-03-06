import React,{useContext} from 'react';
import Kunai from '../legends/usaAgilidade/Kunai';
import Teisho from '../legends/usaAgilidade/Teisho';
import BloqueioDeKunai from '../legends/usaAgilidade/BloqueioKunai'
import Kawarimi from '../legends/usaChakra/Kawrimi';
import Sharingan from '../legends/usaChakra/Sharingan';
import context from '../Provider/context';
import KunaiEmpunhada from '../legends/KunaiEmpunhada';
import AtackKunai from '../legends/AtackKunaiNaoEmpunhada';
import Evasiva from '../legends/usaAgilidade/Evasiva';
import Radio from '../legends/usaAgilidade/Radio';
import RadioAtivo from '../legends/RadioAtivo';
import SharinganAtivo from '../legends/SharinganAtivo';
import GuardoKunai from '../legends/GuardoKunai';
import AtivoSharinganMAngekyou from '../legends/usaChakra/AtivoSharinganMangekyo';
import Mangekyou from '../legends/usaChakra/Mangekyou';
import MangekyouAtivo from '../legends/MangekouAtivo';
import Cintilação from '../legends/usaChakra/Cintilação';

function Legends () {
    
const {powerUse} = useContext(context);
    
  
    return (
        <div className="conteiner-legends" >
            <div className="kunai">
             <h1>Kunai</h1>
            <Kunai/>
            <GuardoKunai/>
            <AtackKunai/>
            {powerUse.includes('Kunai')? <KunaiEmpunhada/> : ''}
            
            <BloqueioDeKunai/>
            </div>
            <div className="defesa">
            <h1>Defesa</h1>
            <Cintilação/>
           <Evasiva/>
            <Kawarimi/>
            </div>
            
            <div className="outros">
            <h1>Outros</h1>
            <Radio/>
            {powerUse.includes('Radio') ? <RadioAtivo/> : ''}
             <Teisho/>
            </div>
            <div className="ativaveis" >
            <h1>Ativaveis</h1>
             <AtivoSharinganMAngekyou/>
             <MangekyouAtivo/>
             <Mangekyou/>
             <SharinganAtivo/> 
            <Sharingan/>
            
            </div>
            
           
        </div>

    )
}

export default Legends;