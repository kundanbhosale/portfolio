import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import { useViewport } from '../../providers/viewport'
import { Button, FlexWrapper, Invalid, Spinner } from '../Styled/Common'
import Heading from '../UI/Heading'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Actions from '../UI/actions'
import { IoReloadCircle } from 'react-icons/io5'

const ContactSection = () => {
  const [show, setShow] = useState<'none' | 'success' | 'failure'>('none')

  const { width, mobile, desktop } = useViewport()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm()

  const onSubmitForm = async (values: any) => {
    try {
      const response = await axios({
        method: 'post',
        url: '/api/contact',
        headers: {
          'Content-Type': 'application/json'
        },
        data: values
      })

      if (response.status == 200) {
        reset()
        setActions('success')
      }
    } catch (err) {
      setActions('failure')
    }
  }

  const setActions = (type: 'none' | 'success' | 'failure') => {
    setShow(type)
    setTimeout(() => setShow('none'), 10000)
  }

  return (
    <Fragment>
      <Heading name='Contact' />
      <h3 style={{ paddingTop: '1rem' }}>
        Are You Intrested ? {mobile && <br />} Let&apos;s Have A Talk
      </h3>
      <p style={{ marginBottom: 0 }}>
        Please fill the contact form or send me an email on&nbsp;
        <a className='text-pink pinkhover'>kundanmbhosale@gmail.com</a>
      </p>
      <FlexWrapper style={{ justifyContent: 'space-between' }}>
        <div style={{ width: `${desktop ? '50%' : '100%'}` }}>
          {show !== 'none' && (
            <Actions
              type={show}
              message={
                show === 'success'
                  ? 'Your message was successfully sent!'
                  : 'Failed to send message!'
              }
            />
          )}

          <form autoComplete='off' onSubmit={handleSubmit(onSubmitForm)}>
            <div className='py-1'>
              <label>What&apos;s your name ?</label>
              <input
                type='text'
                {...register('name', {
                  required: {
                    value: true,
                    message: 'You must enter your name'
                  }
                })}
              />
              <Invalid>{errors?.name?.message}</Invalid>
            </div>
            <div className='py-1'>
              <label>What&apos;s your email ?</label>
              <input
                type='text'
                {...register('email', {
                  required: {
                    value: true,
                    message: 'You must enter your email address'
                  },
                  minLength: {
                    value: 8,
                    message: 'This is not long enough to be an email'
                  },
                  maxLength: {
                    value: 120,
                    message: 'This is too long'
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'email is not valid'
                  }
                })}
              />
              <Invalid>{errors?.email?.message}</Invalid>
            </div>
            <div className='py-1'>
              <label>Type your message </label>
              <textarea
                style={{ height: '150px' }}
                {...register('message', {
                  required: {
                    value: true,
                    message: 'You need to enter your message'
                  },
                  maxLength: {
                    value: 500,
                    message: "Your message can't be more than 500 characters"
                  },
                  minLength: {
                    value: 50,
                    message: 'Your message must be longer than 50 characters!'
                  }
                })}
              />
              <Invalid>{errors?.message?.message}</Invalid>
            </div>
            <Button as='button' type='submit' disabled={isSubmitting}>
              {isSubmitting ? (
                <Spinner>
                  <IoReloadCircle size='2em' />
                </Spinner>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </div>
        <div>
          {desktop && (
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                position: 'relative'
              }}
            >
              <Image
                src='/contact.svg'
                alt='contact-img'
                width={width / 3}
                height={width / 3}
              />
            </div>
          )}
        </div>
      </FlexWrapper>
    </Fragment>
  )
}

export default ContactSection
