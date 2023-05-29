import styled from "styled-components";
import Title from "../CardComponents/Title";

export const CustomCom=styled(Title)`
    color:${(props)=>props.theme.mode==="dark"?"#fff":"#000"};
`;