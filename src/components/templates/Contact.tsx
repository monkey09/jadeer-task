import { Button } from "../atoms"

export const Contact = () => {
  return (
    <section className="mt-[150px] relative max-w-[1000px] mx-auto">
      <div className="bg-blue-500 h-[500px] rounded-[100px] mx-3 px-3 overflow-hidden relative">
        <div className="w-[800px] h-[500px] bg-blue-400 -skew-x-[50deg] absolute -bottom-2 -right-[500px] z-0"></div>
        <div className="flex flex-col items-center justify-center w-full h-full z-10 relative text-center text-white">
          <h1 className="text-4xl lg:text-5xl mb-10 capitalize">
            Need more information about our fundraising?
          </h1>
          <p className="text-lg mb-10">Please reach out by email or Linkedin</p>
          <Button className="bg-white text-black">
            Contact Us
          </Button>
        </div>
      </div>
      <div className="w-[300px] h-[600px] bg-gray-400 rounded absolute -top-[50px] -right-[200px] hidden xl:flex items-center justify-center opacity-80">
        300x600
      </div>
    </section>
  )
}