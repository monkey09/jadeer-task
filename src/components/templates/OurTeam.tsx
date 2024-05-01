import { Avatars } from ".."

export const OurTeam = () => {
  const avatars = [
    {
      name: 'bahia',
      linkedin: '#'
    },
    {
      name: 'ruba',
      linkedin: '#'
    },
    {
      name: 'joanna',
      linkedin: '#'
    },
    {
      name: 'ahmed',
      linkedin: '#'
    },
  ]

  return (
    <section className="text-center font-light py-[100px]">
      <div className="max-w-[900px] mx-auto">
        <p className="text-blue-700 uppercase mb-5">meet our team</p>
        <h1 className="text-4xl lg:text-5xl mb-10 capitalize">our team are business professionals with subject matter expertise</h1>
        <p className="text-lg mb-10">Please feel free to reach out to us and connect with us on Linkedin</p>
        <Avatars avatars={avatars} />
      </div>
    </section>
  )
}