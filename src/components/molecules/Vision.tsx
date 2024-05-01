import { VisionProps } from "./types"

export const Visin = ({ content, title }: VisionProps) => {
  return (
    <div className="flex items-start space-x-4 mb-7 md:px-3 lg:px-4 xl:px-5">
      <div>
        <div className="w-[70px] h-[70px] rounded-full bg-gray-400 flex items-center justify-center">
          70x70
        </div>
      </div>
      <div>
        <p className="text-blue-600 uppercase mb-4">{title}</p>
        <p className="capitalize">{content}</p>
      </div>
    </div>
  )
}