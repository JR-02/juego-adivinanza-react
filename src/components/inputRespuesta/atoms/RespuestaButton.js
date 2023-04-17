import styled from 'styled-components'
import theme from '../../theme'

const RespuestaButton = styled.button`
    padding: 10px 20px;
    background: ${theme.colors.primary};
    cursor: pointer;
    border: none;
    font-size: 16px;
    color: #fff;
    transition: .2s background ease;
    user-select: none; 
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    &:hover{
        background: ${theme.colors.secondary};
    }
`

export default RespuestaButton
