import React, { Fragment } from 'react'
import { IoAlertCircleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'
import { IActions } from '../../lib/interface'
import { Action } from '../Styled/Common'

const Actions: React.FC<IActions> = ({ type, message }) => {
  let icon

  switch (type) {
    case 'failure':
      icon = <IoAlertCircleOutline size='1.5em' className='mx-1' />
      break
    case 'success':
      icon = <IoCheckmarkCircleOutline size='1.5em' className='mx-1' />
      break
    default:
      icon = null
      break
  }
  return (
    <Fragment>
      <Action type={type}>
        <div style={{ display: 'flex' }}>
          {icon}
          <span>{message}</span>
        </div>
      </Action>
    </Fragment>
  )
}

export default Actions
