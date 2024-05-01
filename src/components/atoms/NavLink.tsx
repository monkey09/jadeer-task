import { NavLinkProps } from "./types"

export const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <a href={href} className="uppercase">
      {title}
    </a>
  )
}