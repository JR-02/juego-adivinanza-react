import styled from 'styled-components'
import theme from '../../theme'

const RespuestaForm = styled.form`
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr auto;
    overflow: hidden;
    width: 22%;
    margin-bottom: 20px;
    background: ${theme.colors.accentForm};
    border-radius: 6px;
`

export default RespuestaForm
