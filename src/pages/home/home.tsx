import { Box, Container, List, ListItem, Typography } from "@mui/material";
import SectionTitle from "./sections/title";
import SectionBeneficts from "./sections/beneficts";
import SectionBuy from "./sections/buy";
import SectionProducts from "./sections/products";
import SectionBonus from "./sections/bonus";

export default function Home(){
    return(
        <Container
        maxWidth={false} 
        >
            <SectionTitle></SectionTitle>
            <SectionBeneficts></SectionBeneficts>
            <SectionProducts></SectionProducts>
            <SectionBonus></SectionBonus>
            <SectionBuy></SectionBuy>
        </Container>
    )
}