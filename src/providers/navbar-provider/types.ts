import { Dispatch, SetStateAction } from "react"

export interface NavbarContext_TP {
  navbar: boolean
  setNavbar: Dispatch<SetStateAction<boolean>>
  links: {
    title: string
    href: string
  }[]
}