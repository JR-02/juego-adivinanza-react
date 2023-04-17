import styled from 'styled-components';

const CardContent = styled.div`
    backface-visibility: hidden;
    box-shadow: 0px 4px 10px hsl(0, 0%, 70%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: rotateY(180deg);
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 6px;
    font-size: 24px;
`;

export default CardContent