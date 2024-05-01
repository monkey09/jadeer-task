export const Hero = () => {
  return (
    <section className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl capitalize py-10 bg-gradient-to-t from-indigo-300">
      <div className="container mx-auto">
        <p className="text-center mb-7">easy trademarks is <span className="text-blue-700">transforming</span> how brands are</p>
        <div className="grid grid-cols-2">
          <div>
            <div className="w-[150px] h-[220px] absolute bg-gray-400 flex items-center justify-center text-base rounded">
              150x220
            </div>
          </div>
          <div>
            <p>protected</p>
            <p>enforced</p>
            <p>commercialized</p>
          </div>
        </div>
      </div>
    </section>
  )
}