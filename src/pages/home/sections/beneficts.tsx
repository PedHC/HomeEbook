import { Box, Button, Card, CardContent, CardHeader, Icon, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2'
import { CadastroIcon, ComissaoIcon, FerramentasIcon, GarantiaIcon, LancamentoIcon, PremioIcon, RicoIcon, TempoIcon } from '@assets/icons/index'
import CommonButton from "components/button";
import { ScrollHome } from "utils/common";
const content = [{
    icon: PremioIcon(),
    text:'E-BOOKS MILIONÁRIOS COM QUALIDADE PREMIUM'
},
{
    icon: ComissaoIcon(),
    text:'100% DE COMISSÃO POR VENDA'
},
{
    icon:GarantiaIcon(),
    text:'DIREITO GARANTIDO DE REVENDA'
},
{
    icon:CadastroIcon(),
    text:'COMO CADASTRAR O PRODUTO NAS MAIORES PLATAFORMAS, COMO MONETIZZE, HOTMART, BRAIP, KIWIFY'
},
{
    icon:RicoIcon(),
    text:'TORNE-SE UM INFOPRODUTOR'
},
{
    icon:TempoIcon(),
    text:'ECONOMIZE TEMPO E DINHEIRO EM CRIAÇÃO DE PRODUTOS'
},{
    icon:LancamentoIcon(),
    text:'PRODUTOS 100% EDITÁVEIS'
},
{
    icon:FerramentasIcon(),
    text:'DESIGNER PROFISSIONAL'
},
]

const handleClickScroll = () => {
    const element = document.getElementById('buysection');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

export default function SectionBeneficts(){
    console.log(content);
    return(
        <section className="section section-beneficts">
        <Box sx={{textAlign:'center'}}>
            <Typography fontSize={22}>VEJA O QUÊ PODE SER SEU AINDA HOJE:</Typography>
            <Grid container spacing={2} marginBottom={5} marginTop={5} justifyContent={'center'}>
                {content.map((content,key)=>
                    <Grid size={{md:4,xs:12}} key={key}>
                        <Card sx={{borderRadius:7,height:'100%', backgroundColor:'transparent', backgroundImage: 'linear-gradient(180deg, #FF9600 0%, #FF1E00 100%)'}}>
                            <CardContent sx={{display:'flex', flexDirection:'column', alignItems:'center', gap:5}}>{content.icon}{content.text}</CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
            <CommonButton text="EU PRECISO DISSO AINDA HOJE"  click={ScrollHome} />
        </Box>
        </section>
    )
}