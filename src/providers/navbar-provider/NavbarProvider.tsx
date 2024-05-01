import { 
  useState,
  ReactNode, 
  useContext, 
  createContext, 
} from "react"
import { NavbarContext_TP } from "./types"

const NavbarContext = createContext<NavbarContext_TP>({
  navbar: true, setNavbar: (navbar) => !navbar, links: []
})

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [navbar, setNavbar] = useState(false)
  const links = [
    {
      title: 'Home',
      href: '/home'
    },
    {
      title: 'Services',
      href: '/services'
    },
    {
      title: 'About Us',
      href: '/about-us'
    },
    {
      title: 'Resource Center',
      href: '/resource-center'
    },
    {
      title: 'Contact Us',
      href: '/contact-us'
    },
  ]

  return (
    <NavbarContext.Provider value={{navbar, setNavbar, links}}>
      {children}
    </NavbarContext.Provider>
  )
}

export const useNavbar = () => useContext(NavbarContext)