import { Fragment } from "react"
import { CardButton } from "../StyledComponent/Card.styles"
import ThemeContext from "../context/ThemeContext"
import { useContext } from "react"

const ContextChild=()=>{
    const {handleTheme}=useContext(ThemeContext);
    return(
        <Fragment>
            <CardButton
            onClick={handleTheme}
            >
                Change Theme With Context
            </CardButton>
        </Fragment>
    )
}
export default ContextChild;