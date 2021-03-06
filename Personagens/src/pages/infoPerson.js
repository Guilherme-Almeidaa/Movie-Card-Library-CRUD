import React,{ useContext , useState} from 'react';
import InfoRyusPerson from '../components/infoRyusPerson';
import infoContext from '../context/infoContext'

function InfoPerson() {
  const { setShowFilter,setSearch } = useContext(infoContext)  
  const [ status , setStatus] = useState(false)
  
  const clearInfo = () => {
    localStorage.clear()
    setStatus(!status);
}
 

    const changeSearch = ({target}) => {
       const { value } = target
       setSearch(value)
       setShowFilter(true)
    }
    return (
        <div className="contaner-total">

<div className="title" >
            <h1 className="title is-2" >Personagens</h1>
            </div>
              <div className="containe-search">
                <div className="search" >
                <label>Pesquisa:
                    <input data-testid="search-chacteres" className="input-search" onChange={changeSearch} type="text" />

                </label>
                <button className="button is-danger is-rounded is-small" onClick={clearInfo} >Limpar</button>
                </div>
                </div>
                
           
            <div className="conteiner-name">
            <h2 className="title is-3">Ryus</h2>
            </div>
            <InfoRyusPerson />
            
        </div>

    )
}
export default InfoPerson;