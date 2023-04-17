import styled from 'styled-components'
import theme from '../../theme'

const Tooltip = styled.span`
    color: #fff;
    background: linear-gradient(${theme.colors.secondary}, ${theme.colors.primary});
    border-radius: 4px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    top: -60px;
    text-transform: uppercase;
    font-weight: bold;
    user-select: none; 
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    &::before {
        content: '';
        border-top: 12px solid ${theme.colors.primary};
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        position: absolute;
        bottom: -12px;
        left: calc(50% - 10px);
    }
`

export default Tooltip
