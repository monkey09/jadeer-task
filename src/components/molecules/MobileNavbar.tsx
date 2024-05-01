import { cn } from "../../lib"
import { Button, NavLink } from ".."
import { ChevronDown } from "lucide-react"
import { useNavbar } from "../../providers"

export const MobileNavbar = () => {
  const { navbar, links } = useNavbar()

  return (
    <div className={cn(
      "transition-all duration-300 overflow-hidden flex xl:hidden flex-col items-center divide-y *:py-4 *:w-full *:px-3",
      navbar ? "h-[410px]" : "h-0"
    )}>
      {links.map(item => (
        <NavLink key={item.href} {...item} />
      ))}
      <div>
        <div className="uppercase flex items-center justify-between gap-2 cursor-pointer max-w-[400px]">
          language / currency <ChevronDown />
        </div>
      </div>
      <div>
        <Button className="w-full max-w-[400px]">
          Login
        </Button>
      </div>
    </div>
  )
}