import styled from 'styled-components'

export const Container = styled.div`
    height:50px;
    display: flex;
    background-color:#6fa8dc;
    box-shadow:0 0 20px 3px;

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