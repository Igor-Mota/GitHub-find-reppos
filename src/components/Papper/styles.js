import styled from 'styled-components';

export const Card = styled.div`
    width: 468px;
    height: 114px;
    background: #EB6F46;
    margin-top: 25px;
    margin-left: 15px;
    border-radius: 4px;
    box-shadow: 2px 2px 2px #000;
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
    padding-top:10px;
    div{

    }
    `;
export const Title = styled.a`
    text-decoration: none;
    font-size:25px;

    color: #000;
    div{}
`;
export const Describe = styled.p`
    font-size: 15px;

    div{}
`;
export const Image = styled.img`
    width:90px;
    height:90px;
    border-radius:40px;
    margin-top: 10px;
    margin-right:10px
`;
