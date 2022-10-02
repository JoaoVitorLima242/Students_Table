import styled from 'styled-components'

export const StyledLabel = styled.label.attrs(() => ({
  className: 'form-label'
}))`
    margin-bottom: 11px;
    font-weight: 400;
    font-size: 23px;

    display: flex;
`

export const RequiredStar = styled.div`
  color: red;
`
