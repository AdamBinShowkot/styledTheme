import { Fragment } from "react"
import ContextChild from "./ContextChild";

const ContextMain=()=>{
    console.log("Main Context Called...");
    return(
        <Fragment>
            <h2>I'm Main Context Component.</h2><br/>
            <ContextChild/>
        </Fragment>
    )
}
export default ContextMain;