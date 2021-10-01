import React, { Fragment } from 'react'
import Image from 'next/image'
import { useViewport } from '../../providers/viewport'
import { HeroWrapper } from '../Styled/HeroSection'
import { Button, FlexWrapper, MyImage } from '../Styled/Common'
import { IoLogoGithub } from 'react-icons/io5'

const HeroSection = () => {
  const { width, desktop } = useViewport()

  return (
    <Fragment>
      <HeroWrapper>
        <div>
          {width < 800 && (
            <MyImage style={{ marginBottom: '3rem' }}>
              <Image
                src='/kundan.png'
                alt='Kundan Bhosale'
                width={300}
                height={321}
                quality={75}
              />
            </MyImage>
          )}
          <h1>
            Hey, I&apos;m <span className='text-pink'>Kundan</span>
          </h1>
          <h2>
            a <span className='text-pink'>self-taught</span> full-stack
          </h2>
          <h2>web developer</h2>
          <FlexWrapper className='my-2'>
            <Button href='#work'>See My Work</Button>
            <Button
              icon
              href='https://github.com/Kundan435'
              target='_blank'
              rel='noreferrer'
            >
              <IoLogoGithub size='2em' />
            </Button>
          </FlexWrapper>
        </div>
        {width > 800 && (
          <div>
            <Image
              src='/1.svg'
              alt='coder'
              width={desktop ? 500 : 300}
              height={desktop ? 500 : 300}
            />
          </div>
        )}
      </HeroWrapper>
    </Fragment>
  )
}

export default HeroSection
