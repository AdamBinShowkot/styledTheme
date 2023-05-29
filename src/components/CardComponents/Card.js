import { Fragment } from 'react'
import '../../assets/css/dark.css'
import {Container, CardBottom,CardContiner,CardTop,CardButton,TestBTN,MyCard } from '../StyledComponent/Card.styles'
import { CustomCom } from '../StyledComponent/CustomComponent'

const Card=({handleTheme})=>{
    return(
        <Fragment>
            <Container>
                <CardContiner>
                    {/* <MyCard title="TESTT">
                        KKKK
                    </MyCard> */}
                    <CardTop>
                        <CardButton
                        onClick={handleTheme}
                        >
                            Switch Theme
                        </CardButton>
                        {/* <TestBTN>KKK</TestBTN> */}
                    </CardTop>
                    <CardBottom>
                        <CustomCom text="This is Demo Test."/>
                    </CardBottom>
                </CardContiner>
            </Container>
        </Fragment>
    )
}
export default Card;