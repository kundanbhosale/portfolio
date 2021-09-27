import React, { Fragment } from 'react'
import { CatlogWrapper } from '../Styled/Common'
import Image from 'next/image'
import { useViewport } from '../../providers/viewport'
const IconCards = () => {
  const { mobile } = useViewport()

  const imgHW = mobile ? 30 : 70
  const nextHW = mobile ? 50 : 100

  return (
    <Fragment>
      <CatlogWrapper
        colWidth={!mobile ? '75px' : '50px'}
        gap={!mobile ? '2rem' : '1rem'}
        className='text-sm'
      >
        <div>
          <Image
            src='/javascript.svg'
            alt='javascrip-logo'
            title='Javascript'
            width={imgHW}
            height={imgHW}
          />
          <p className='text-sm'>Javascript</p>
        </div>
        <div>
          <Image
            src='/typescript.svg'
            alt='typescript-logo'
            title='Typescript'
            width={imgHW}
            height={imgHW}
          />
          <p className='text-sm'>Typescript</p>
        </div>
        <div>
          <Image
            src='/php.svg'
            alt='php-logo'
            title='PHP'
            width={imgHW}
            height={imgHW}
          />
          <p className='text-sm'>PHP</p>
        </div>
        <div>
          <Image
            src='/nodejs.svg'
            alt='nodejs-logo'
            title='Node JS'
            width={imgHW}
            height={imgHW}
          />
          <p className='text-sm'>Node JS</p>
        </div>
        <div>
          <Image
            src='/next.svg'
            alt='next-logo'
            title='Next JS'
            width={nextHW}
            height={imgHW}
          />
          <p className='text-sm'>Next JS</p>
        </div>
        <div>
          <Image
            src='/react.svg'
            alt='react-logo'
            title='React'
            width={imgHW}
            height={imgHW}
          />
          <p className='text-sm'>React</p>
        </div>
        <div>
          <Image
            src='/mongodb.svg'
            alt='mongodb-logo'
            title='Mongo DB'
            width={imgHW}
            height={imgHW}
          />
          <p className='text-sm'>Mongo DB</p>
        </div>
        <div>
          <Image
            src='/postgres.svg'
            alt='postgres-logo'
            title='Postgres SQL'
            width={imgHW}
            height={imgHW}
          />
          <p className='text-sm'>Postgres SQL</p>
        </div>
        <div>
          <Image
            src='/redis.svg'
            alt='redis-logo'
            title='Redis'
            width={imgHW}
            height={imgHW}
          />
          <p className='text-sm'>Redis</p>
        </div>
        <div>
          <Image
            src='/graphql.svg'
            alt='graphql-logo'
            title='GraphQL'
            width={imgHW}
            height={imgHW}
          />
          <p className='text-sm'>GraphQL</p>
        </div>
      </CatlogWrapper>
    </Fragment>
  )
}

export default IconCards
