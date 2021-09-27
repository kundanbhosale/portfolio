import React, { Fragment } from 'react'
import Heading from '../UI/Heading'
import IconCards from '../UI/IconCards'

const SkillSection = () => {
  return (
    <Fragment>
      <Heading name='Skills' />
      <h3 className='py-1'>Things I&apos;m Good At</h3>
      <IconCards />
    </Fragment>
  )
}

export default SkillSection
