import styled from 'styled-components'
import theme from '../../theme'

const NabvarButton = styled.button`
    outline: none;
    padding: 10px 30px;
    transition: background .2s ease;
    background: ${theme.colors.primary};
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 4px;
    font-weight: bold;
    color: #fff;

    &:hover{
        background: transparent;
        border: 2px solid ${theme.colors.secondary};
        color: ${theme.colors.secondary};
    }
`

export default NabvarButton
