import { IconLinkProps } from "./types"

export const IconLink = ({ href, title }: IconLinkProps) => {
  return (
    <a href={href} className="bg-blue-400 rounded-full p-1 w-[30px] h-[30px] flex items-center justify-center text-white">
      {title}
    </a>
  )
}