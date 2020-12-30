import styled from 'styled-components';

export const SHeader = styled.div`
    width: 100%;
    height: 145px;
    background-color: #EB6F46;
    border-radius: 8px;
    margin-top: 25px;
    box-shadow: 2px 2px 2px #000111;
    display: flex;
    align-items:center;
    justify-content: space-around;

`;
export const Box = styled.div`
    margin:0;
    padding:0;
    display: flex;
    align-items:center;
    justify-content:center;

     input{
        width:340px;
        height: 48px;
        font-size: 20px;
        border-right:0
    }
    input:focus{
        outline:none
    }
    button{
        width:48px;
        height:48px;
        border-left: 0;
        border-radius: 0 8px 8px 0;
        background-color: #FFF;
    }
`;
export const Title = styled.h2`
    font-size: 30px;



`;
