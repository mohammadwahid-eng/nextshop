import { FunctionComponent } from "react"
import Footer from "./Footer"
import Header from "./Header"

type Props = {
  children: JSX.Element
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout