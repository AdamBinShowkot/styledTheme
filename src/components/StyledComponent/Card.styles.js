import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    background: ${(props)=>props.theme.mode==="dark"?"#262626":"#fff"};
    width: 100%;
    height: 100vh;
`;

export const CardContiner=styled.div`
    position: relative;
    background: ${(props)=>props.theme.mode==="dark"?"#1e1e1e":"#dbdbdb"};
    height: 350px;
    width: 550px;
    overflow: hidden;
    display: flex;
    align-items: center;
`;

export const CardTop=styled.div`
    top:0;
    padding-right: 5px;
    position: absolute;
    height: 10%;
    width: 100%;
    display: flex;
    overflow: hidden;
    justify-content: end;
    align-items: end;
`;
export const CardBottom=styled.div`
    padding:10px;
    width:100%;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items: center;
`;
export const CardButton=styled.button`
    padding: 5px 8px;
    border:1px solid #236a80;
    border-radius: 4px;
    font-family: "Montserrat", sans-serif;
    background-color: #247a94;
    color: #fff;
    &:hover{
        cursor: pointer;
        background-color: aqua;
        border:1px solid aqua;
        transition: .5s;
        color: #1e1e1e;
    }
`;