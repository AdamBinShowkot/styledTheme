import { Fragment } from "react"

const Title=({className,text})=>{
    //console.log("P",props);
    return(
        <Fragment>
            <span className={className}>Your props text is : {text}</span>
        </Fragment>
    )
}
export default Title;