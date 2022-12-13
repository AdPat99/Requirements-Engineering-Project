import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .switch {
        position: relative;
        display: inline-block;
        width: 34px;
        height: 21px;
        margin-right:8px;
        visibility:${props => props.active ? 'hidden' : 'visible'};
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }
      
    .slider:before {
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }
      
    input:checked + .slider {
        background-color: #2196F3;
    }
      
    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }
      
    input:checked + .slider:before {
        -webkit-transform: translateX(15px);
        -ms-transform: translateX(15px);
        transform: translateX(15px);
    }
      
    .slider.round {
        border-radius: 34px;
    }
      
    .slider.round:before {
        border-radius: 50%;
    }
`;

export const Box = styled.div`
    border-radius: 30px;
    box-shadow: 0px 0px 5px 1px #A5A5A5;
    background-color:#f3f6f4;
    padding:10px;
    border:10px;
    margin:20px;
`;

export const SubTitle = styled.div`
    font-size: 22px;
    letter-spacing: 0px;
    color: #000000;
    font-weight: 700;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    padding:5px 5px 15px 5px; 
`;

export const SwitchText = styled.div`
    font-size: 18px;
    letter-spacing: 0px;
    word-spacing: 2px;
    color: #000000;
    font-weight: 400;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    padding:5px;
`;
