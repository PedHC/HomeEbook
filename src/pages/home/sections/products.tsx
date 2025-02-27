import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Divider, Typography } from "@mui/material";
import  Grid  from '@mui/material/Grid2'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardImage  from '@assets/images/card-product1.png'
import CommonButton from "components/button";
import { ScrollHome } from "utils/common";

const content = [
    {
        title:'MÉTODO AUMENTE SEU SCORE EM 7 DIAS',
        image:CardImage,
        description:'Você terá em suas mãos o E-book em que faturei mais de 3 milhões de reais.',
        list:['Produto que vende todos os dias','100% de comissão','Direito de revenda','Venda fácil e rápida','Ticket médio de vendas R$97'],
    },
    {
        title:'MANUAL POWER PET',
        image:CardImage,
        description:'O nicho de pets vem ganhando cada dia mais espaço no mercado, é por isso que esse E-book vai te trazer vendas diariamente de forma rápida.',
        list:['Produto que vende todos os dias','100% de comissão','Direito de revenda','Venda fácil e rápida','Ticket médio de vendas R$27'],
    },
    {
        title:'ALFABETIZAÇÃO',
        image:CardImage,
        description:'O nicho de pets vem ganhando cada dia mais espaço no mercado, é por isso que esse E-book vai te trazer vendas diariamente de forma rápida.',
        list:['Produto que vende todos os dias','100% de comissão','Direito de revenda','Venda fácil e rápida','Ticket médio de vendas R$67'],
    },
    {
        title:'12 FORMAS DE GANHAR DINHEIRO ONLINE',
        image:CardImage,
        description:'Vou te dar de bandeja o meu produto sobre Alfabetização Infantil para que você receba notificações de vendas o tempo inteiro sem complicação.',
        list:['Produto que vende todos os dias','100% de comissão','Direito de revenda','Venda fácil e rápida','Ticket médio de vendas R$97'],
    },
    {
        title:'RECEITAS LOW CARB',
        image:CardImage,
        description:'A nova profissão do século com toda a certeza é o trabalho Home Office. Então, a procura por essa classe de trabalho vem tomando conta do mercado, e nesse E-book, listamos as 12 melhores formas de trabalhar sem sair de casa.',
        list:['Produto que vende todos os dias','100% de comissão','Direito de revenda','Venda fácil e rápida','Ticket médio de vendas R$97'],
    },
    {
        title:'CONFEITARIA DE SUCESSO',
        image:CardImage,
        description:'Vou te dar de bandeja o meu E-book onde já faturei mais de 1 milhão em vendas. Ele pode ser seu ainda hoje.',
        list:['Produto que vende todos os dias','100% de comissão','Direito de revenda','Venda fácil e rápida','Ticket médio de vendas R$97'],
    },
    {
        title:'MÉTODO PÁSCOA LUCRATIVA',
        image:CardImage,
        description:'A páscoa vem chegando? É hora de lucrar muito com essa data tão especial. Receba agora mesmo o meu E-book com receitas exclusivas de páscoa para vender diariamente.',
        list:['Produto que vende todos os dias','100% de comissão','Direito de revenda','Venda fácil e rápida','Ticket médio de vendas R$97'],
    },
    {
        title:'RECEITAS DE PÃES E PIZZAS SEM GLÚTEN',
        image:CardImage,
        description:'O número de pessoas intolerantes ao glúten disparou nos últimos anos e a busca por uma alimentação saudável e variada é a febre do momento. Fature alto com esse E-book ainda hoje.',
        list:['Produto que vende todos os dias','100% de comissão','Direito de revenda','Venda fácil e rápida','Ticket médio de vendas R$97'],
    },
    {
        title:'PACK CRIATIVOS WIKIHOW',
        image:CardImage,
        description:'Triplique seu CTR com esse pack de criativos wikihow e que não vão te dar bloqueios. Você não precisa mais quebrar a cabeça na hora de fazer um anúncio.',
        list:[],
    },
    {
        title:'PACK DE CANVA',
        image:CardImage,
        description:'Receba templates validados e editáveis para a criação de seus posts e nunca mais perca tempo na criação de artes. Até porque tempo é dinheiro, e você não pode mais ficar rasgando à toa.',
        list:[],
    },]
interface Props{
title:string,
image:string,
description:string
list:string[]
}
function ProductCard({title,image,description,list}:Props){
    return( 
    <Card sx={{textAlign:'center', height:'auto', background:'#000'}}>
        <Typography fontSize={18} height={'55px'}>{title}</Typography>
        <img className="product-cards-img" src={image} alt=""></img>
        <Box> 
        <Accordion  sx={{background:'transparent', color:'#FF1E00', }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#ff9900"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{flexDirection:'row-reverse',
            '& .Mui-expanded': {
                color:'#ff9900 !important',
    },}}
          
        >
          <Typography component="span" fontSize='20px'>Ver Descrição</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{textAlign:'left', color:"#fff"}}>
          <Typography  fontSize={'16px'}  fontWeight={'bold'}>{description}</Typography>
          {list.length>0 && 
          <ul>
            {list.map((content,key)=>(<li key={key}>- {content}</li>))}
            </ul>}
        </AccordionDetails>
      </Accordion>
      
          <Divider color='#fff'></Divider>
      </Box>
    </Card>
    )
}


export default function SectionProducts(){
    return(
        <section className="section section-products">
<Box  >
        <Typography  variant="h5" textAlign={'center'} marginBottom={15}>QUAIS SÃO OS PRODUTOS CAMPEÕES EM VENDAS QUE VOCÊ IRÁ RECEBER?</Typography>
        <Grid container spacing={1}>
            {content.map((content,key)=>(
            <Grid size={2.4}>
                <ProductCard title={content.title} image={content.image} description={content.description} list={content.list}/>
            </Grid>)
            )}
        </Grid>
        <Box sx={{textAlign:'center', marginTop:15}}>        <CommonButton text="EU QUERO ESSES PRODUTOS" click={ScrollHome}/>
</Box>
    </Box>
        </section>
    )
}