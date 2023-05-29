import { Fragment } from 'react'
import '../../assets/css/dark.css'
import {Container, CardBottom,CardContiner,CardTop,CardButton } from '../StyledComponent/Card.styles'
import { CustomCom } from '../StyledComponent/CustomComponent'

const Card=({handleTheme})=>{
    return(
        <Fragment>
            <Container>
                <CardContiner>
                    <CardTop>
                        <CardButton
                        onClick={handleTheme}
                        >
                            Switch Theme
                        </CardButton>
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