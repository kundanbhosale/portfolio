import React, { Fragment } from 'react'
import Image from 'next/image'
import { useViewport } from '../../providers/viewport'
import { Button, FlexWrapper, MyImage } from '../Styled/Common'
import Heading from '../UI/Heading'
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'

const AboutSection = () => {
  const { width, desktop, tablet, mobile } = useViewport()

  return (
    <Fragment>
      <FlexWrapper style={{ justifyContent: 'space-between' }}>
        <div
          style={{
            width: `${mobile || width < 800 ? '100%' : tablet ? '70%' : '50%'}`
          }}
        >
          <Heading name='About Me' />

          <h3 className='py-1'>Who I am ?</h3>

          <p> I&apos;m Kundan Bhosale, 21 year old from Pune, India.</p>
          <p>
            Since childhood I have been interested in computers. <br />
            In my college days I started to learn coding by just googling things
            and learnt basics and started building websites for my friends and
            family. Once I was confident enough I started to build website for
            local NGOs and small business.
          </p>
          <p>
            I gained a lot of experience and I am still expanding my tech stack,
            I can build modern & complex websites, web apps with clean code
          </p>
          <FlexWrapper className='my-2'>
            <Button href='#contact'>Let&apos;s Talk</Button>

            <Button
              icon
              href='https://www.linkedin.com/in/kundan-bhosale/'
              target='_blank'
              rel='noreferrer'
            >
              <IoLogoLinkedin size='1.7em' />
            </Button>
            <Button
              icon
              href='https://www.instagram.com/kundanbhosale_/'
              target='_blank'
              rel='noreferrer'
            >
              <IoLogoInstagram size='1.7em' />
            </Button>
          </FlexWrapper>
        </div>
        {width > 800 && (
          <div
            style={{
              width: '30%',
              textAlign: 'center',
              paddingLeft: `${desktop ? '0' : '5vw'}`
            }}
          >
            <MyImage>
              <Image
                src='/kundan.png'
                alt='Kundan Bhosale'
                width={300}
                height={321}
                quality={75}
              />
            </MyImage>
          </div>
        )}
      </FlexWrapper>
    </Fragment>
  )
}

export default AboutSection
