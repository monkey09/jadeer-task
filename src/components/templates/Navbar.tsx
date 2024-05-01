import { DesktopNavbar, Logo, MobileNavbar } from ".."

export const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex justify-between items-center py-5">
        <Logo />
        <DesktopNavbar />
      </div>
      <MobileNavbar />
    </nav>
  )
}