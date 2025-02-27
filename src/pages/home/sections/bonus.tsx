import { Box, Typography } from "@mui/material";
import BonusBg from '@assets/images/bonus-bg.png'
export default function SectionBonus(){
    return(
        <section className="section section-bonus">
    <Box sx={{textAlign:'center'}}>
        <Typography>COMPRANDO AINDA HOJE, VOCÊ VAI GANHAR DE FORMA 100% GRATUITA UM MEGA BÔNUS!</Typography>
        <img src={BonusBg} alt="" width={'100%'}></img>
        <p>CURSO DE TRÁFEGO DIRETO</p>
        <p>(de 197 por 0)</p>
        <p>Vou abrir as minhas estratégias para você!</p>
        <p>Através de um Curso de Tráfego Direto vou te mostrar o passo a passo que me fez faturar MAIS DE 5 MILHÕES com meus produtos, para você apenas COPIAR E COLAR quando for anunciar qualquer dos Infoprodutos do pack.</p>
        <p>Eu vou direto ao ponto, no clique a clique, para que você também possa FATURAR ALTO com tráfego direto!</p>
    </Box></section>)
}