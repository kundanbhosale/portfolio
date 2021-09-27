import React, { Fragment } from 'react'
import Link from 'next/link'
import { IProps } from '../../lib/interface'
import { Badge, Button, CatalogGit, CatlogWrapper } from '../Styled/Common'
import { useViewport } from '../../providers/viewport'

const GitCatlog: React.FC<IProps> = ({ data }) => {
  const { mobile } = useViewport()

  return (
    <Fragment>
      <CatlogWrapper colWidth='300px' gap='3rem'>
        {data.map((item, i) => (
          <div style={{ height: '100%' }} key={i}>
            <Link href={item.html_url} passHref>
              <a target='_blank'>
                <CatalogGit>
                  <p>{item.name}</p>
                  <p className='line-clamp' style={{ fontSize: '0.85rem' }}>
                    {item.description}
                  </p>
                  {item.topics.map((topic: string, i: number) => (
                    <Fragment key={i}>
                      <Badge>
                        <span>{topic}</span>
                      </Badge>
                    </Fragment>
                  ))}
                </CatalogGit>
              </a>
            </Link>
          </div>
        ))}
      </CatlogWrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: `${!mobile ? 'start' : 'center'}`,
          marginTop: '1rem'
        }}
      >
        <Button
          href='https://github.com/Kundan435?tab=repositories'
          target='_blank'
        >
          View All On Github
        </Button>
      </div>
    </Fragment>
  )
}

export default GitCatlog
