import { Fragment } from "react"
import { Button, NavLink } from ".."
import { useNavbar } from "../../providers"
import { ChevronDown, Menu, X } from "lucide-react"

export const DesktopNavbar = () => {
  const { navbar, setNavbar, links } = useNavbar()
  
  return (
    <>
      <div className="hidden xl:block">
        {links.map((item, i) => (
          <Fragment key={item.href}>
            <NavLink {...item} />
            {i != links.length - 1 && <span className="mx-2">.</span>}
          </Fragment>
        ))}
      </div>
      <div className="items-center justify-between hidden xl:flex">
        <div className="uppercase flex items-center justify-between mr-3 gap-2">
          language / currency <ChevronDown />
        </div>
        <Button>
          Login
        </Button>
      </div>
      <div className="xl:hidden">
        {navbar ? (
          <X
            className="cursor-pointer"
            onClick={() => setNavbar(false)} 
          />
        ) : (
          <Menu
            className="cursor-pointer"
            onClick={() => setNavbar(true)} 
          />
        )}
      </div>
    </>
  )
}