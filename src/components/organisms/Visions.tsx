import { Visin } from ".."
import { VisionsProps } from "./types"

export const Visions = ({ visions }: VisionsProps) => {
  return (
    <div className="flex flex-wrap lg:*:basis-1/2 xl:*:basis-1/3 *:mx-auto">
      {visions.map(item => (
        <Visin key={item.title} {...item} />
      ))}
    </div>
  )
}