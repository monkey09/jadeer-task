import { IconLink, Logo } from ".."
import { RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiTwitterFill } from "@remixicon/react"

export const Footer = () => {
  return (
    <footer className="bg-blue-100 mt-[150px] font-light">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between py-5 border-b-4 border-b-blue-200">
          <Logo />
          <div className="flex items-center gap-2">
            Follow us at: 
            <IconLink href="#" title={<RiInstagramLine />} />
            <IconLink href="#" title={<RiFacebookLine />} />
            <IconLink href="#" title={<RiLinkedinLine />} />
            <IconLink href="#" title={<RiTwitterFill />} />
          </div>
        </div>
        <div className="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div>
            <div className="mb-5">
              <p className="uppercase text-blue-700">us office</p>
              <p>+1 415224117</p>
              <p>09pm - 05pm</p>
            </div>
            <div>
              <p className="uppercase text-blue-700">egypt office</p>
              <p>+1 415224117</p>
              <p>09pm - 05pm</p>
            </div>
          </div>
          <div>
            <p className="capitalize text-xl font-normal mb-3">resource service</p>
            <div className="capitalize flex flex-col">
              <a href="#">templates & forms</a>
              <a href="#">user guide</a>
              <a href="#">our community</a>
              <a href="#">what's new?</a>
            </div>
          </div>
          <div>
            <p className="capitalize text-xl font-normal mb-3">useful links</p>
            <div className="capitalize flex flex-col">
              <a href="#">home</a>
              <a href="#">services</a>
              <a href="#">about us</a>
              <a href="#">resource center</a>
            </div>
          </div>
          <div>
            <p className="capitalize text-xl font-normal mb-3">supported by:</p>
            <div className="flex gap-2 mb-3">
              <div className="w-[50px] h-[30px] bg-gray-400 rounded flex items-center justify-center">50x30</div>
              <div className="w-[50px] h-[30px] bg-gray-400 rounded flex items-center justify-center">50x30</div>
              <div className="w-[50px] h-[30px] bg-gray-400 rounded flex items-center justify-center">50x30</div>
            </div>
            <div className="w-[70px] h-[50px] bg-gray-400 rounded flex items-center justify-center mb-2">70x50</div>
            <div className="w-[70px] h-[50px] bg-gray-400 rounded flex items-center justify-center">70x50</div>
          </div>
        </div>
        <div className="py-5 border-t-4 border-t-blue-200">
          <p className="capitalize">
            &copy; easy trademarks. all rights reserved - <span className="text-blue-700">
              <a href="#">privacy policy</a> - <a href="#">terms of use</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}