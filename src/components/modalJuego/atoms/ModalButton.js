import styled from 'styled-components'

const ModalButton = styled.button`
    outline: none;
    padding: 10px 30px;
    transition: background .2s ease;
    background: rgb(0, 88, 202);
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 4px;
    font-weight: bold;
    color: #fff;
    user-select: none; 
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    &:hover{
        background: transparent;
        border: 2px solid rgb(0, 88, 202);
        color: rgb(0, 88, 202);
    }
`

export default ModalButton
