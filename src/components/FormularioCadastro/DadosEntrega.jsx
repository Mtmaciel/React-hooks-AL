import React, { useState } from 'react';
import {TextField,Button} from "@material-ui/core"
function DadosEntrega({aoEnviar}){
    
    const [cep,setCep] = useState("");
    const [endereco,setEndereco] = useState("");
    const [numero,setNumero] = useState("");
    const [cidade,setCidade] = useState("");
    const [estado,setEstado] = useState("");
    return(
        <form
        onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({cep,endereco,numero,estado,cidade});
          }}
        >
            <TextField 
                id="cep" 
                label="CEP" 
                type="number"
                variant="outlined"
                margin="normal"
                value={cep}
                onChange={(e)=>setCep(e.target.value)}
            />
            <TextField 
                id="endereco" 
                label="Endereço" 
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                value={endereco}
                onChange={(e)=>setEndereco(e.target.value)}
            />
            <TextField 
                id="numero" 
                label="Numero" 
                type="number"
                variant="outlined"
                margin="normal"
                value={numero}
                onChange={(e)=>setNumero(e.target.value)}
            />
             <TextField 
                id="estado" 
                label="Estado" 
                type="text"
                variant="outlined"
                margin="normal"
                value={estado}
                onChange={(e)=>setEstado(e.target.value)}
            />
             <TextField 
                id="Cidade" 
                label="cidade" 
                type="text"
                variant="outlined"
                margin="normal"
                value={cidade}
                onChange={(e)=>setCidade(e.target.value)}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
                Cadastrar
            </Button>
        </form>
    );
}

export default DadosEntrega;
