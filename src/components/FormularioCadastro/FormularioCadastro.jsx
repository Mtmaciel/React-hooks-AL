import React, { useState,useEffect } from "react";
import {Typography, Stepper, StepLabel,Step } from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({aoEnviar}) {
  
  const [etapaAtual,setEtapaAtual] = useState(0);
  const [dadosColetados,setDadoscoletados] = useState({});
  
  const proximo = () =>(
    setEtapaAtual(prevstate => prevstate+1)
  );

  const coletarDados=(dados)=>{
    setDadoscoletados({...dadosColetados,...dados});
    proximo();
  }

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados}/>,
    <DadosPessoais aoEnviar={coletarDados}/>,
    <DadosEntrega aoEnviar={coletarDados}/>,
    <Typography variant="h5">Obrigado pelo cadastro</Typography>
  ];

  useEffect(() => {
    if(etapaAtual===formularios.length-1)
      aoEnviar(dadosColetados);
  });

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
    
  )

}

export default FormularioCadastro;
