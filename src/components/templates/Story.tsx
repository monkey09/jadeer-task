export const Story = () => {
  return (
    <section className="mt-[150px] font-light">
      <div className="grid md:grid-cols-2">
        <div className="bg-gray-200 py-16 px-3">
          <div className="max-w-[600px] mx-auto">
            <p className="uppercase text-blue-700 mb-7">our story.</p>
            <h1 className="text-4xl mb-3">How it all started...</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aspernatur facere optio sequi necessitatibus voluptatum quisquam excepturi, repudiandae maiores nam aliquid.
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat itaque, blanditiis explicabo quo nihil dolore minus cum veniam corrupti, pariatur corporis tempora porro necessitatibus delectus!
            </p>
            <p className="mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam temporibus obcaecati aperiam consequuntur expedita dolorem eligendi iure ullam cupiditate earum.
            </p>
            <div className="flex items-center gap-5">
              <div className="rounded-full w-[70px] h-[70px] bg-gray-400 flex items-center justify-center">
                70x70
              </div>
              <div className="text-blue-700">
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[500px]">
          <div className="bg-gray-400 max-w-[500px] h-[50%] border-b flex items-center justify-center">
            500x500
          </div>
          <div className="bg-gray-400 max-w-[500px] h-[50%] rounded-br-[100px] flex items-center justify-center">
            500x500
          </div>
        </div>
      </div>
    </section>
  )
}