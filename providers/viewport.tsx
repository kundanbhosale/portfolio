import React, { useEffect, useState } from 'react'

const viewportContext = React.createContext({
  width: 0,
  height: 0,
  desktop: false,
  tablet: false,
  mobile: false
})

const ViewportProvider = ({ children }: { children: React.ReactNode }) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [desktop, setDesktop] = useState(false)
  const [tablet, setTablet] = useState(false)
  const [mobile, setMobile] = useState(false)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    reponsive(window.innerWidth)
  }

  const reponsive = (width: number) => {
    if (width <= 480) {
      setMobile(true)
      setTablet(false)
      setDesktop(false)
    }

    if (width > 480 && width < 1200) {
      setMobile(false)
      setTablet(true)
      setDesktop(false)
    }

    if (width > 1200) {
      setMobile(false)
      setTablet(false)
      setDesktop(true)
    }
    return
  }

  useEffect(() => {
    if (width === 0 && height === 0) {
      handleWindowResize()
    } else {
      window.addEventListener('resize', handleWindowResize)
      return () => {
        window.removeEventListener('resize', handleWindowResize)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height])

  return (
    <viewportContext.Provider
      value={{ width, height, desktop, tablet, mobile }}
    >
      {children}
    </viewportContext.Provider>
  )
}

const useViewport = () => {
  const { width, height, desktop, tablet, mobile } =
    React.useContext(viewportContext)

  return { width, height, desktop, tablet, mobile }
}

export { ViewportProvider, useViewport }
