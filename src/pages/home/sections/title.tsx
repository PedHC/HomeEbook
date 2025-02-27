import { Box, Typography } from "@mui/material";
import Background from '@assets/images/bg.png'

export default function SectionTitle(){
    return (
            <section className="section section-title">
    <Box 
    height={'fit-content'}
    color="#fff" 
    fontSize={'25px'} 
    textAlign={"left"}
    justifyContent={'center'} 
    fontWeight={'bold'} 
    padding={'200px 0px 200px 0px'}
    sx={{    backgroundImage:`url(${Background})`,
    backgroundPosition:'center',
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",}}>
    <Box width={'38%'} marginLeft={'15%'} 
><p>CHEGA DE RASGAR DINHEIRO COMPRANDO PLR's QUE NÃO VENDEM E SEM QUALIDADE!
</p>
<p>DEIXE DE SER AFILIADO E TENHA EM MÃOS PRODUTOS PARA LUCRAR 100% DE COMISSÃO E VENDER DIARIAMENTE NA INTERNET SEM APARECER OU CRIAR CONTEÚDO
</p>
<p>O ÚNICO PACK COM PLR's TESTADOS E APROVADOS QUE JÁ GERARAM MILHÕES EM VENDAS, E O MELHOR, ELES PODEM SER SEUS AGORA MESMO!
</p>

        </Box>



    </Box>
    </section>)
}