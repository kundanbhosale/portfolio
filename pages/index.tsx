import React, { Fragment } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { Data, IProps } from '../lib/interface'
import HeroSection from '../components/Layout/HeroSection'
import Navbar from '../components/Layout/Navbar'
import WorkSection from '../components/Layout/WorkSection'
import SkillSection from '../components/Layout/SkillSection'
import AboutSection from '../components/Layout/AboutSection'
import ContactSection from '../components/Layout/ContactSection'
import Footer from '../components/Layout/Footer'
import { useViewport } from '../providers/viewport'

export const getStaticProps = async () => {
  try {
    const { data } = await axios.get(
      'https://api.github.com/users/Kundan435/repos?per_page=5',
      {
        headers: {
          Accept: 'application/vnd.github.mercy-preview+json'
        }
      }
    )

    const newData = data
      .filter(({ name }: { name: string }) => name !== 'Kundan435')
      .sort((a: any, b: any) => {
        return (
          new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
        )
      })
      .slice(0, 4)
      .map(({ name, topics, description, html_url }: Data) => {
        return { name, topics, description, html_url }
      })

    return {
      props: {
        data: newData
      },
      revalidate: 60 * 60
    }
  } catch (error) {
    return {
      props: {
        data: []
      }
    }
  }
}

const Home: React.FC<IProps> = ({ data }) => {
  const { desktop } = useViewport()

  return (
    <Fragment>
      <Head>
        <title>Kundan Bhosale</title>
        <meta
          name='description'
          content='Hey I am Kundan Bhosale a Full Stack Web Developer. I can build complex and mordern websites and web apps.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          <section className='vh-100'>
            <Navbar />
            <HeroSection />
          </section>
        </div>
        <section id='about' className='py-3'>
          <SkillSection />
        </section>
        <section className='py-3'>
          <AboutSection />
        </section>
        <WorkSection data={data} />
        <section id='contact' className='py-3'>
          <ContactSection />
          {desktop && <Footer />}
        </section>
        {!desktop && (
          <section>
            <Footer />
          </section>
        )}
      </main>
    </Fragment>
  )
}

export default Home
