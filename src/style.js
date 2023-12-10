import { styled } from "styled-components"

export const Container = styled.div `
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    h1{
        font-size: 30px;
    }

    p{
        color: green;
    }

    img{
        border: 5px solid black;
        border-radius: 15px;
    }

    input{
        width: 100px;
    }

`;