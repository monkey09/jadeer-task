import { Avatar } from ".."
import { AvatarsProps } from "./types"

export const Avatars = ({ avatars }: AvatarsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {avatars.map(item => (
        <Avatar key={item.name} {...item} />
      ))}
    </div>
  )
}