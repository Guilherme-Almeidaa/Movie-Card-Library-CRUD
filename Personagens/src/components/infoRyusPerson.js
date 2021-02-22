import React, {  useContext, useEffect } from 'react';
import '../css/infoRyusPerson.css';
import infoContext from '../context/infoContext';
import {Link} from 'react-router-dom';




function InfoRyus() {
    const { search , setSearch  } = useContext(infoContext)
    const datacheck = JSON.parse(localStorage.getItem('data')) || { infoRyus: [] }
    const {infoRyus} = datacheck
    
    

    const changeSorted = (a, b) => {
        if (a.name > b.name) {
            return 1
        }
        if (a.name < b.name) {
            return -1
        }

        return 0
    }

   useEffect(() => {
        setSearch('')
    },[setSearch])
   

    
  
    return (
        <div className="container-principal" >
            {infoRyus.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).sort(changeSorted).map((info , index) => {
                const img =info.img
                
                return (
                
                 <Link className="card-info" key={index} to={`/cardinfo/${info.id}`} >
                    <div key={index}  >
                        <div className="buttons-card">
                </div>
<div className="container-img-person" >
                            <img hidden={info.img !== '' ? '' : 'hidden'} className="images-person"  alt="personagem" src={img} />
                            </div>
                        <div className="conteiner-name" >
                            <h2 className="card-title" >{info.name}</h2>
                        </div>
                        <div className="ryus-title-card">
                            <p className={info.ryus < 0 ? 'ryus ryus-negative' : 'ryus'} >${info.ryus}</p>
                        </div>
                         </div>
                    </Link>
                )
            })}
            
        </div>
    )
}

export default InfoRyus;