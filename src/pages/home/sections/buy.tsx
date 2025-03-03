import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import CommonButton from "components/button";
import Garantia from "@assets/images/garantia.png";
import Money from "@assets/images/money.png";
import { Line, TextOrange } from "../style";

const BuyCardContent = [
  "MÉTODO AUMENTE SEU SCORE EM 7 DIAS",
  "MANUAL POWER PET",
  "ALFABETIZAÇÃO",
  "12 FORMAS DE GANHAR DINHEIRO ONLINE",
  "RECEITAS LOW CARB",
  "CONFEITARIA DE SUCESSO",
  "MÉTODO PÁSCOA LUCRATIVA",
  "RECEITAS DE PÃES E PIZZAS SEM GLÚTEN",
  "PACK DE CANVA",
];

const BuyCard = (
  <Card
    sx={{
      height: "100%",
      textAlign: "center",
      borderRadius: 9,
      backgroundColor: "#000",
      opacity: "72%",
      boxShadow: "0px 0px 23px 5px rgba(0, 0, 0, 0.5)",
      padding: 2,
    }}
  >
    <CardContent>
      <Line fontSize={25} bold>
        COMPRANDO HOJE, VOCÊ LEVA TODOS ESTES PRODUTOS COM UM{" "}
        <TextOrange>DESCONTO ESPECIAL</TextOrange>!
      </Line>
      <ul>
        {BuyCardContent.map((text, key) => (
          <li key={key} className="flex justify-center">
            <CheckIcon sx={{ marginRight: 1, color: "#FF1E00" }} />
            <Line fontSize={18}>{text}</Line>
          </li>
        ))}
      </ul>
      <Line fontSize={25} bold>
        DE: <s>R$1.999</s>
      </Line>
      <Line fontSize={59} bold>
        <span style={{ color: "#FFD500" }}>POR R$97</span>
      </Line>
      <Line>OU 12X DE R$9,74</Line>
      <Box marginTop={"3.5rem"}>
        <CommonButton
          text="Comprar Agora"
          href="https://app.monetizze.com.br/checkout/KJV326612"
        />
      </Box>
    </CardContent>
  </Card>
);

const DiscountCard = (
  <Card
    sx={{
      height: "100%",
      textAlign: "center",
      borderRadius: 9,
      backgroundColor: "#000",
      opacity: 0.72,
      boxShadow: "0px 0px 23px 5px rgba(0, 0, 0, 0.5)",
      padding: 2,
    }}
    elevation={5}
  >
    <CardContent>
      <img src={Garantia} alt={"Garantia"} width={"100%"}></img>
      <Line>
        Ciente da <b>qualidade do conteúdo</b> ministrado e com a finalidade de
        dar segurança às pessoas que queiram adquirir,{" "}
        <b>concedemos 7 dias de garantia</b>, para que você possa solicitar o{" "}
        <b>reembolso</b> de seu investimento, caso não estejam satisfeitos com
        sua compra.
      </Line>
    </CardContent>
  </Card>
);
export default function SectionBuy() {
  return (
    <section id="buysection" className="section section-buy">
      <Box paddingTop={5} paddingBottom={5}>
        <Grid container spacing={4} sx={{ background: Money }}>
          <Grid size={{ md: 6, xs: 12 }}>{BuyCard}</Grid>
          <Grid size={{ md: 6, xs: 12 }}>{DiscountCard}</Grid>
        </Grid>
      </Box>
    </section>
  );
}
