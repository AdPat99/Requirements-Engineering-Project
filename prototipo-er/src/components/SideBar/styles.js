import styled from 'styled-components'

export const Container = styled.div`
    background-color: #6fa8dc;
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 250px;
    left: ${props => props.sideBar ? '0' : '-100%'};
    animation: showSideBar .3s;

    >svg{
        position: fixed;
        color:white;
        width:25px;
        height:25px;
        margin-top:10px;
        margin-left:10px;
        cursor:pointer;
    }

    @keyframes showSideBar{
        from {
            opacity : 0;
            width: 0;
        }
        to {
            opacity : 1;
            width: 250;
        }
    }
`;

export const Content = styled.div`
    margin-top: 100px;
`;