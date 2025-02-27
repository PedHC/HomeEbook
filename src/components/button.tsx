import { Button } from "@mui/material";
interface  Props{
text?:string
href?:string
click?:() => void
}

export default function CommonButton({text,href,click}:Props ){
                return(
                <Button 
                onClick={click ?? undefined} 
                href={href ?? undefined}
                sx={{
                    backgroundColor:'#F8B603', 
                    boxShadow:'0px 0px 10px 0px #F8B603',
                    fill:'#000',
                    color:'#000', 
                    fontSize:'22px', 
                    fontWeight:'bold'}}>
                        {text}
                </Button>)

}