import { Box, Typography } from "@mui/material";
import { Line, TextOrange } from "../style";
export default function SectionTitle() {
  return (
    <section className="section section-title">
      <Box
        height={"fit-content"}
        color="#fff"
        fontSize={"25px"}
        lineHeight={1.5}
        textAlign={"left"}
        justifyContent={"center"}
        padding={"200px 0px 200px 0px"}
      >
        <Box width={"50%"} padding={"10px"}>
          <Box marginBottom={"1.25em"}>
            <Line fontSize={25} bold>
              CHEGA DE <TextOrange>RASGAR DINHEIRO</TextOrange> COMPRANDO{" "}
              <TextOrange>PLR's QUE NÃO VENDEM</TextOrange> E SEM QUALIDADE!
            </Line>
            <Line fontSize={25} bold>
              DEIXE DE SER AFILIADO E TENHA EM MÃOS{" "}
              <TextOrange>PRODUTOS PARA LUCRAR 100% DE COMISSÃO</TextOrange> E
              VENDER <TextOrange>DIARIAMENTE</TextOrange> NA{" "}
              <TextOrange>INTERNET</TextOrange> SEM APARECER OU CRIAR CONTEÚDO
            </Line>
          </Box>

          <Line>
            O ÚNICO <b>PACK COM PLR's TESTADOS E APROVADOS</b> QUE JÁ GERARAM{" "}
            <b>MILHÕES EM VENDAS</b>, E O MELHOR, ELES PODEM SER SEUS AGORA
            MESMO!
          </Line>
        </Box>
      </Box>
    </section>
  );
}
