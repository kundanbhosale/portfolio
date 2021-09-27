import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import { NavItems, NavWraper } from '../Styled/Navbar'

const Navbar = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > 110) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  return (
    <Fragment>
      <NavWraper show={show}>
        <div>
          <Link href='/' passHref>
            <a>
              <h3 className='m-0'>
                <span className='text-pink'>K</span>B
              </h3>
            </a>
          </Link>
        </div>
        <NavItems>
          <a href='#about' className='pinkhover'>
            About
          </a>
          <a href='#work' className='pinkhover'>
            Work
          </a>
          <a href='#contact' className='pinkhover'>
            Contact
          </a>
        </NavItems>
      </NavWraper>
    </Fragment>
  )
}

export default Navbar
