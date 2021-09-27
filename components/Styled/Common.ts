import styled, { keyframes } from 'styled-components'

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const Button = styled.a<{ icon?: boolean }>`
  background-color: #fe4370;
  padding: ${(p) => `5px ${!p.icon ? '40px' : '10px'}`};
  height: 50px;
  min-width: fit-content;
  max-width: fit-content;
  color: white;
  font-size: 1.1rem;
  border: 4px solid #fe4370;
  margin-right: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  transition: background 300ms ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;

  &:hover {
    background: transparent;
  }

  @media (max-width: 480px) {
    padding: ${(p) => `5px ${!p.icon && '25px'}`};
    margin-right: 1rem;
    font-size: 0.85rem;
  }
`
export const Bar = styled.div`
  content: '';
  height: 4px;
  width: 50px;
  margin-right: 1rem;
  background-color: #fe4370;
`
export const CatlogWrapper = styled.div<{
  colWidth: string
  gap: string
}>`
  display: grid;
  grid-template-columns: ${(p) =>
    `repeat(auto-fit, minmax(${p.colWidth}, 1fr))`};
  grid-gap: ${(p) => p.gap};
  padding: 2rem 0;
  align-items: center;
  text-align: center;
  div {
    p {
      margin-top: 0.5rem;
    }
  }
`

export const CatlogImage = styled.div`
  display: inline-flex;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  height: 200px;
  width: 100%;
  &:before {
    content: '';
    position: absolute;
    background-color: #fe4370;
    width: 100%;
    height: 100%;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: all 300ms ease-in-out;
  }
`
export const CatlogTitle = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0 5px;
  text-align: start;
  transition: all 300ms ease-in-out;
`
export const CatlogItem = styled.div`
  &:hover ${CatlogImage}:before {
    visibility: visible;
    opacity: 0.1;
  }
  &:hover ${CatlogTitle} {
    color: #fe4370;
  }
`
export const CatalogGit = styled.div`
  border: 4px solid #fe4370ba;
  background: rgb(254 67 112 / 20%);
  border-radius: 1rem;
  padding: 1rem;
  text-align: start;
  height: 100%;
  transition: background 300ms ease-in-out;
  &:hover {
    background: transparent;
  }
  p {
    margin-top: 0 !important;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
`

export const Badge = styled.div`
  background-color: #fe43706e;
  border: 1px solid #fe4370;
  border-radius: 50rem;
  padding: 0.2rem 0.7rem;
  display: inline-flex;
  font-size: 0.8rem;
  margin: 0.3rem 0.5rem 0.3rem 0;
`

export const MyImage = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  width: 100%;
`

export const Invalid = styled.span`
  color: red;
  font-size: 0.8rem;
`
export const Action = styled.div<{ type: 'failure' | 'success' }>`
  background-color: ${(p) =>
    p.type === 'failure'
      ? 'rgb(255 152 0 / 20%)'
      : p.type === 'success'
      ? 'rgb(0 150 136 / 20%)'
      : null};
  color: ${(p) =>
    p.type === 'failure'
      ? 'rgb(255 152 0)'
      : p.type === 'success'
      ? 'rgb(0 150 136 )'
      : null};
  padding: 1rem;
  border: 2px solid
    ${(p) =>
      p.type === 'failure'
        ? 'rgb(255 152 0)'
        : p.type === 'success'
        ? 'rgb(0 150 136 )'
        : null};
  display: flex;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`
const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
export const Spinner = styled.span`
  display: inline-flex;
  animation: ${Spin} 1s linear infinite;
`
