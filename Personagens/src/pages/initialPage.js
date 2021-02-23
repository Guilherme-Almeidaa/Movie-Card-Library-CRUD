import React, { useState, useContext , useEffect } from 'react';
import infoContext from '../context/infoContext'

function InitialPage() {
    const {  setDataRyus , diretoryImage , setDiretoryImage } = useContext(infoContext)
    const [dataRyus, setRyus] = useState(0);
    const [name, setName] = useState('');
    const [imagePrevius , setImgPrevius] = useState('')

    useEffect(() => {
        setDiretoryImage('')
    },[setDiretoryImage])

    const addName = ({ target }) => {
        const { value } = target
        setName(value)
    }

    const addRyus = ({ target }) => {
        const { value } = target
        setRyus(value)
    }
    
    const showAlert = (message) => {
        alert(message)
    }

    const addInfo = () => {
       if(name === '') {
       showAlert('Dijite o nome do Personagem')
       } else {

        
        const dataSaved = JSON.parse(localStorage.getItem('data')) || { infoRyus: [] };
        const {infoRyus} = dataSaved
        const lastPerson = infoRyus.length - 1
        const saveNow = {id:lastPerson + 1, name, ryus: Number(dataRyus), spentItens:[] , gainItens:[{ id: 0, itemGain: 'Valor inicial', valueItemGain: Number(dataRyus) }] , img:diretoryImage };
        localStorage.setItem('data', JSON.stringify({ ...dataSaved, infoRyus: [...infoRyus, saveNow] }))
        setDataRyus({ ...dataSaved, infoRyus: [...infoRyus, saveNow] })
        setDiretoryImage('')
       }
 }

    
    const uploadImageNet = ({target}) => {
        const {value} = target;
        setImgPrevius(value)
        setDiretoryImage(value)
    }
   
    return (
        <div className="container-initial" >
            <h1 className="title is-1">Cadastrar</h1>

            <form>
                
                <div className="field form-initial" >
                <label className="label" >Nome:</label>
                <div className="control">
              <input data-testid="input-name-register" onChange={addName} type="text" />
              </div>
                </div>
                <div className="field form-initial" >
                <label className="label" > Ryus: </label>
                <div className="control" >
                  <input data-testid="input-ryos-register"  placeholder={0} onChange={addRyus} type="number" />
                  </div>
                  </div>
           <div></div>
        <div className="uploadImage" >
        <label>Insira o Link da imagem:</label>
        <input data-testid="input-img-register" onChange={uploadImageNet} type="text" />
    </div>
            </form>
            <div  className="container-img-previus" >
                <img data-testid="img-previus" hidden={diretoryImage !== '' ? '' : 'hidden' } className="img-previus" alt="previus" src = {imagePrevius} />
            </div>
            <div  className="form-primary" >

            <button data-testid="button-add"  className="button is-success" onClick={addInfo} >Adicionar</button>
            </div>
      
        </div>
    )
}

export default InitialPage;