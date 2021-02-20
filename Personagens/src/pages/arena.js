import React, {useState  ,useEffect} from 'react';
import data from '../data';
import '../css/bulma.min.css';


function Arena () {
    const  { nagato }  =  data
    const [ chakara , setChakara ] = useState(nagato.ck);
    const [age , setAge] = useState(nagato.age);
    const [img , setImage] = useState('')
   
    const test = (func , element, imgJutso) => {
        func((age) => age - element )
        if(img !== '') {
       setImage(imgJutso)
        } else {
            setImage('')
        }
    }

   useEffect(() => {
        if(age <= 0 ) {
            setAge(0)
           alert("Voce morreu")
        } 
    },[age])

    useEffect(() => {
        if(chakara <= 0 ) {
            setChakara(0)
            alert("Voce morreu")
        } 
    },[chakara])

    
    return (
       <div className="container">
           <div className="person comp">
               <div className="infoPerson">
           <h3 className="age jut" >ag:{age}</h3>
           <h3 className="ck jut" >ck:{chakara}</h3>
           </div>
           <img width="300px" alt="person" src={nagato.imgPerson} />
           <div className="arena comp">
         {img !=='' ? <img  className="img-arena" alt="usado" src={img}  /> : null}
         
         </div>
           </div>
         
         <div className="comp" >
           <button  type="button" onClick={() => test(setAge,nagato.shinda.requiredAge, nagato.shinda.img)}>
               <img width="150px" alt="power" src={nagato.shinda.img} />
           </button>
           <button>
               <img onClick={(() => test(setChakara , nagato.rinnegan.requireCK,nagato.rinnegan.img))}  width="135px" alt="power" src={nagato.rinnegan.img} />
           </button>
           </div>
           <button className="button is-primary">
               Atacar
           </button>
 </div>
    )
}

export default Arena;