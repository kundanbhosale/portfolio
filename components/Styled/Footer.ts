import styled from 'styled-components'

export const FootWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  div {
    display: flex;
  }
  @media (max-width: 1200px) {
    margin: 1rem 0;
  }
  @media (max-width: 480px) {
    flex-flow: column-reverse;
    div:last-child {
      margin: 0 0 1rem;
    }
  }
`

export const FootLink = styled.a`
  display: inline-flex;
  margin: 0 2rem 0 0;
  transition: all 300ms ease-in-out;
  color: #8f94b5;
  font-size: 1.1rem;
  font-weight: 400;
  &:hover {
    color: #fe4370;
  }
  @media (max-width: 480px) {
    margin: 0 0.5rem;
  }
`
