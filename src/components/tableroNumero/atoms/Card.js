import styled from 'styled-components'
import theme from '../../theme'

const Card = styled.div`
    backface-visibility: hidden;
    box-shadow: 0px 4px 10px hsl(0, 0%, 70%);
    transform-style: preserve-3d;
    position: relative;
    width: 150px;
    height: 150px;
    transition: transform .5s, background 2s;
    background: linear-gradient(${theme.colors.secondary}, ${theme.colors.primary});
    border-radius: 6px;

    ${props => props.active === true ? 'transform: rotateY(180deg);' : 'transform: none;'};

    ${props => props.error === true
    ? 'animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;'
    : 'animation: none;'};

    ${props => props.error === true
    ? `background: linear-gradient(${theme.colors.errorSecondary}, ${theme.colors.errorPrimary})`
    : ''};

    @keyframes shake-horizontal {

        0%,
        100% {
            transform: translateX(0);
        }

        10%,
        30%,
        50%,
        70% {
            transform: translateX(-10px);
        }

        20%,
        40%,
        60% {
            transform: translateX(10px);
        }

        80% {
            transform: translateX(8px);
        }

        90% {
            transform: translateX(-8px);
        }
    }
`

export default Card
