import * as React from "react"
// import { library } from "@fortawesome/fontawesome-svg-core"
// import { 
//   faBehance, 
//   faCodepen, 
//   faDribbble, 
//   faGithub, 
//   faLinkedinIn, 
//   faMediumM 
// } from "@fortawesome/free-brands-svg-icons"
// import { faHeart, faMusic } from "@fortawesome/pro-solid-svg-icons"

import Header from "../components/Header"
import { Body } from "../components/Layout/LayoutElements"
import Footer from "../components/Footer"

// library.add([
//   faMediumM, faLinkedinIn, faCodepen, faDribbble, faBehance, faGithub, faHeart, faMusic
// ])

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      
      <Body>
        {children}
      </Body>

      <Footer />
    </>
  )
}

export default Layout
