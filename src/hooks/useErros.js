import {useState} from 'react';

const useErros = (validacoes) => {

    const defaultState = criarEstadoInicial(validacoes);
    const [erros, setErros] = useState(defaultState);
    
    const validarCampos=(event)=>{
        const {name,value} = event.target;
        const novosErros = {...erros}
        novosErros[name] = validacoes[name](value);
        setErros(novosErros);
    }

    const possoEnviar=()=>{
        for (let campo in erros) {
            if(!erros[campo].valido){
                return false;
            }
            
        }
        return true;
    }

    return [erros,validarCampos,possoEnviar];

}

const criarEstadoInicial = (validacoes) =>{
    const estadoInicial = {};
    for (let key in validacoes) {
        estadoInicial[key] = {valido:true,texto:""}
    }
    return estadoInicial;
}

export default useErros;