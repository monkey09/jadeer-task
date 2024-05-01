import { Visions } from ".."

export const WhyUs = () => {
  const visions = [
    {
      title: 'automates protection',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat itaque, blanditiis explicabo quo nihil dolore minus cum veniam corrupti, pariatur corporis tempora porro necessitatibus delectus!'
    },
    {
      title: 'strengthens cases',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat itaque, blanditiis explicabo quo nihil dolore minus cum veniam corrupti, pariatur corporis tempora porro necessitatibus delectus!'
    },
    {
      title: 'watches for opportunities',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat itaque, blanditiis explicabo quo nihil dolore minus cum veniam corrupti, pariatur corporis tempora porro necessitatibus delectus!'
    },
    {
      title: 'flags risks',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat itaque, blanditiis explicabo quo nihil dolore minus cum veniam corrupti, pariatur corporis tempora porro necessitatibus delectus!'
    },
    {
      title: 'assists with examinations',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat itaque, blanditiis explicabo quo nihil dolore minus cum veniam corrupti, pariatur corporis tempora porro necessitatibus delectus!'
    },
  ]
  
  return (
    <section className="max-w-[1350px] ml-auto mt-[150px] font-light bg-gray-200 py-16 px-3 rounded-l-[100px]">
      <div className="max-w-[1100px] mx-auto">
        <p className="uppercase text-blue-700 mb-7">why us?</p>
        <h1 className="text-4xl mb-10">Our vision is to build an AI enabled trademark expert that...</h1>
        <Visions visions={visions} />
      </div>
    </section>
  )
}