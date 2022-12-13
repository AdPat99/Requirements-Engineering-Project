import styled from 'styled-components'

export const Container = styled.div`
    height:50px;
    display: flex;
    background-color:#6fa8dc;
    box-shadow:0 0 5px 1px;

    >svg{
        position: fixed;
        color:white;
        width:25px;
        height:25px;
        margin-top:10px;
        margin-left:10px;
        cursor:pointer;
    }
`;

export const Title =  styled.div`
    display: flex;
    font-size: 26px;
    padding: 4px;
    color: white;
    border-radius: 10px;
    margin: 0 50px 20px;
`;