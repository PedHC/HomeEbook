import { Box, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  CadastroIcon,
  ComissaoIcon,
  FerramentasIcon,
  GarantiaIcon,
  LancamentoIcon,
  PremioIcon,
  RicoIcon,
  TempoIcon,
} from "@assets/icons/index";
import CommonButton from "components/button";
import { ScrollHome } from "utils/common";
import { Line, TextOrange } from "../style";

const content = [
  {
    icon: PremioIcon(),
    text: "E-BOOKS MILIONÁRIOS COM QUALIDADE PREMIUM",
  },
  {
    icon: ComissaoIcon(),
    text: "100% DE COMISSÃO POR VENDA",
  },
  {
    icon: GarantiaIcon(),
    text: "DIREITO GARANTIDO DE REVENDA",
  },
  {
    icon: CadastroIcon(),
    text: "COMO CADASTRAR O PRODUTO NAS MAIORES PLATAFORMAS, COMO MONETIZZE, HOTMART, BRAIP, KIWIFY",
  },
  {
    icon: RicoIcon(),
    text: "TORNE-SE UM INFOPRODUTOR",
  },
  {
    icon: TempoIcon(),
    text: "ECONOMIZE TEMPO E DINHEIRO EM CRIAÇÃO DE PRODUTOS",
  },
  {
    icon: LancamentoIcon(),
    text: "PRODUTOS 100% EDITÁVEIS",
  },
  {
    icon: FerramentasIcon(),
    text: "DESIGNER PROFISSIONAL",
  },
];

export default function SectionBeneficts() {
  console.log(content);
  return (
    <section className="section section-beneficts">
      <Box sx={{ textAlign: "center" }}>
        <Line fontSize={22} bold>
          VEJA O QUÊ <TextOrange>PODE SER SEU</TextOrange> AINDA HOJE:
        </Line>
        <Grid
          container
          spacing={2}
          marginBottom={5}
          marginTop={5}
          justifyContent={"center"}
        >
          {content.map((content, key) => (
            <Grid size={{ md: 4, xs: 12 }} key={key}>
              <Card
                sx={{
                  borderRadius: 7,
                  height: "100%",
                  backgroundColor: "transparent",
                  backgroundImage:
                    "linear-gradient(180deg, #FF9600 0%, #FF1E00 100%)",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0px 20px 0px 20px",
                    gap: 3,
                  }}
                >
                  {content.icon}
                  <Line>{content.text}</Line>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <CommonButton text="EU PRECISO DISSO AINDA HOJE" click={ScrollHome} />
      </Box>
    </section>
  );
}
