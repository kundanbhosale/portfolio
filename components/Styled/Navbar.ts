import styled from 'styled-components'

export const NavWraper = styled.div<{ show: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  overflow: hidden;
  ${(p) =>
    p.show &&
    `position : fixed;
   top: 0;
   left: 0;
   z-index: 100;
   padding: 1.5rem 10vw;
   background : #141627;
   `}
`
export const NavItems = styled.div`
  display: flex;

  a {
    margin: 0 1rem;
    font-weight: 600;
  }
`
