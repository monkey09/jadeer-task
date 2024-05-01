import { HTMLAttributes, ReactNode } from "react"

export interface NavLinkProps {
  title: string
  href: string
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export interface IconLinkProps {
  title: string | ReactNode
  href: string
}