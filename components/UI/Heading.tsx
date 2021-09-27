import React, { Fragment } from 'react'
import { Bar, FlexWrapper } from '../Styled/Common'

interface HeadingProps {
  name: string
}

const Heading: React.FC<HeadingProps> = ({ name }) => {
  return (
    <Fragment>
      <FlexWrapper>
        <Bar />
        <h4 className='m-0 text-light'>{name}</h4>
      </FlexWrapper>
    </Fragment>
  )
}

export default Heading
