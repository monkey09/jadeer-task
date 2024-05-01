import { RiLinkedinLine } from "@remixicon/react"
import { IconLink } from ".."
import { AvatarProps } from "./types"

export const Avatar = ({ linkedin, name }: AvatarProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[200px] h-[200px] bg-gray-400 rounded-full flex items-center justify-center mb-4">200x200</div>
      <p className="mb-3">{name}</p>
      <div>
        <IconLink href={linkedin} title={<RiLinkedinLine />} />
      </div>
    </div>
  )
}