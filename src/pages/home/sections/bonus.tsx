import { Box, Typography } from "@mui/material";
import BonusBg from "@assets/images/bonus-bg.png";
import { Line } from "../style";
export default function SectionBonus() {
  return (
    <section className="section section-bonus">
      <Box
        sx={{
          textAlign: "center",
          padding: { xs: 0, md: "0px 150px 0px 150px" },
        }}
      >
        <Typography>
          COMPRANDO AINDA HOJE, VOCÊ VAI GANHAR DE FORMA 100% GRATUITA UM MEGA
          BÔNUS!
        </Typography>
        <img src={BonusBg} alt="" width={"100%"}></img>
        <Line fontSize={22} bold>
          CURSO DE TRÁFEGO DIRETO
        </Line>
        <Line>(de 197 por 0)</Line>
        <Line>Vou abrir as minhas estratégias para você!</Line>
        <Line>
          Através de um <b>Curso de Tráfego Direto</b> vou te mostrar o passo a
          passo que me fez faturar <b>MAIS DE 5 MILHÕES</b> com meus produtos,
          para você apenas <b>COPIAR E COLAR</b> quando for anunciar qualquer
          dos Infoprodutos do pack.
        </Line>
        <Line>
          Eu vou direto ao ponto, no clique a clique, para que você também possa
          <b>FATURAR ALTO</b> com tráfego direto!
        </Line>
      </Box>
    </section>
  );
}
