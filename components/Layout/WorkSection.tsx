import React, { Fragment } from 'react'
import { IProps } from '../../lib/interface'
import Actions from '../UI/actions'
import Catlog from '../UI/catalog'
import GitCatlog from '../UI/GitCatlog'
import Heading from '../UI/Heading'

const WorkSection: React.FC<IProps> = (props) => {
  return (
    <Fragment>
      <section id='work' className='py-3'>
        <Heading name='Websites' />
        <h3 className='py-1'>Few Recent Websites</h3>
        <Catlog />
      </section>

      <section className='py-3'>
        <Heading name='Projects' />
        <h3 className='py-1'>Recent Github Repositories</h3>
        {props.data.length !== 0 ? (
          <GitCatlog data={props.data} />
        ) : (
          <Actions
            type='failure'
            message='Unable To fetch Github repositories'
          />
        )}
      </section>
    </Fragment>
  )
}

export default WorkSection
