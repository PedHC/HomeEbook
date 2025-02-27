import { Box, Button, Card, CardContent, CardHeader, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2'
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";
import CommonButton from "components/button";
import Garantia from '@assets/images/garantia.png'
import Money from '@assets/images/money.png'

const BuyCardContent = ['MÉTODO AUMENTE SEU SCORE EM 7 DIAS',
    'MANUAL POWER PET',
    'ALFABETIZAÇÃO',
    '12 FORMAS DE GANHAR DINHEIRO ONLINE',
    'RECEITAS LOW CARB',
    'CONFEITARIA DE SUCESSO',
    'MÉTODO PÁSCOA LUCRATIVA',
    'RECEITAS DE PÃES E PIZZAS SEM GLÚTEN',
    'PACK DE CANVA']

const BuyCard = <Card sx={{
    height:'100%',
    textAlign:'center',borderRadius:15, backgroundColor:'#000', opacity:'72%', boxShadow: '0px 0px 23px 5px rgba(0, 0, 0, 0.5)'}}>
                            <CardContent >
                            <Typography  sx={{opacity:1}}>COMPRANDO HOJE, VOCÊ LEVA TODOS ESTES PRODUTOS COM UM DESCONTO ESPECIAL!</Typography>
                            <ul>
                                {BuyCardContent.map((text,key) => <li key={key}><CheckIcon sx={{marginRight:1, color:'#FF1E00'}}/>{text}</li>)}
                            </ul>
                            <p>DE: <s>R$1.999</s></p>
                            <p>POR R$97</p>
                            <p>OU 12X DE R$9,74</p>
                            <CommonButton text='Comprar Agora' href="https://app.monetizze.com.br/checkout/KJV326612"/>
                            </CardContent>
                        </Card>

const DiscountCard =  
<Card sx={{height:'100%',borderRadius:15, backgroundColor:'#000', opacity:0.72, boxShadow: '0px 0px 23px 5px rgba(0, 0, 0, 0.5)'}} elevation={5}>
    <CardContent>
        <img src={Garantia} alt={'Garantia'} width={'100%'}></img>
        <p>Ciente da qualidade do conteúdo ministrado e com a finalidade de dar segurança às pessoas que queiram adquirir, concedemos 7 dias de garantia, para que você possa solicitar o reembolso de seu investimento, caso não estejam satisfeitos com sua compra.</p>
    </CardContent>
</Card>
export default function SectionBuy(){
    return(
        <section id="buysection" className="section section-buy">
            <Box padding="5% 15% 5% 15%" sx={{ backgroundColor:'transparent', backgroundImage: 'linear-gradient(180deg, #FF9600 0%, #FF1E00 100%)'}}>
            <Grid container spacing={4} sx={{background:Money}}>
                    <Grid size={{md:6,xs:12}}>
                        {BuyCard}
                    </Grid>
                    <Grid size={{md:6,xs:12}}>
                        {DiscountCard}
                    </Grid>
            </Grid>
        </Box></section>
        
    )
}