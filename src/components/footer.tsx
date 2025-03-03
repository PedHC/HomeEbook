import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqContent = [
  {
    question: "Como vou receber?",
    content:
      "Após a confirmação do pagamento, você receberá o Pack diretamente no seu e-mail.",
  },
  {
    question: "Posso vender em qualquer plataforma?",
    content:
      " Sim! Você pode vender tanto na Monetizze, Hotmart, Braip, ou qualquer outra.",
  },
  {
    question: "Quais são os meus direitos sobre os produtos?",
    content:
      "Depois da compra, você receberá um contrato em seu nome, onde vou te dar plenos direitos sobre o produto.",
  },
  {
    question: "Posso editar os produtos?",
    content:
      "É claro que sim. Você será o dono e pode fazer qualquer alteração que achar necessária.",
  },
];

export default function Footer() {
  return (
    <Box padding={15} paddingRight={35} paddingLeft={35} color={"#FF1E00"}>
      <Typography
        variant="h5"
        textAlign={"center"}
        color="#ff9900"
        fontWeight={"bold"}
      >
        FAQ
      </Typography>
      {FaqContent.map((faq, key) => (
        <div className="footer-accordion" key={key}>
          <Box>
            <Accordion sx={{ background: "transparent", color: "#FF1E00" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#ff9900" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  flexDirection: "row-reverse",
                  "& .Mui-expanded": {
                    color: "#ff9900 !important",
                  },
                }}
              >
                <Typography component="span" fontSize="20px">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize={"16px"} color="#fff">
                  {faq.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Divider color="#fff" />
          </Box>
        </div>
      ))}
    </Box>
  );
}
