import { Button, TextField } from '@material-ui/core';
import React, { useState,useContext } from 'react';
import validacoesCadastro from "../../context/Validacoes"
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar}){
    const [senha,setSenha] = useState("");
    const [email,setEmail] = useState("");

    const validacoes = useContext(validacoesCadastro);

    const [erros,validarCampos,possoEnviar] = useErros(validacoes);

    return(
        <form 
            onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar())
                aoEnviar({email,senha});
          }}>
            <TextField id="email" label="Email" type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField id="senha" name="senha" label="Senha" type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                value={senha}
                onChange={(e)=>setSenha(e.target.value)}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
            />
            <Button 
                type="submit"
                variant="contained" 
                color="primary"
            >
                Proximo
            </Button>
        </form>
    )
}

export default DadosUsuario;
