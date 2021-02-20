import React, { useEffect, useState } from 'react';
import infoContext from './infoContext';


function Provider({ children }) {
    const [dataRyusInfo, setDataRyus] = useState([]);
    const [showFilter, setShowFilter] = useState(false)
    const [search ,setSearch] = useState('');
    const [diretoryImage , setDiretoryImage] = useState('');

    useEffect(() => {
        const dataRyus = JSON.parse(localStorage.getItem('data')) || { infoRyus: [ {name:'' , ryus:0}] }
        setDataRyus(dataRyus)
    }, [])



    const context = {
        dataRyusInfo,
        showFilter,
        search ,
        diretoryImage ,
        setDiretoryImage,
        setSearch,
        setShowFilter,
        setDataRyus,
    }
    return (
        <infoContext.Provider value={context} >
            {children}
        </infoContext.Provider>

    )
}

export default Provider;