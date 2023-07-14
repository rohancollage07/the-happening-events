// import { useRef } from 'react'
import Event from '../components/Event'
import Testimony from '../components/Testimony'
import events from '../data/Event'
import testimony from '../data/Testimony'
import ContactUs from '../pages/ContactUs'
import '../pages/Main.css'

const Home = () => {
  // const contactRef = useRef(null)
  // const handleContactClick = () => {
  //   contactRef.current.scrollIntoView({ behavior: 'smooth' })
  // }
  return (
    <main className="bg-black text-white">
      <section className="container ml-auto flex items-center w-full">
        <div className="w-1/2 absolute z-10">
          <h1 className="text-7xl mb-3 font-bold text-[#f0f8ff]">
            Transforming Dreams into Unforgettable Moments
          </h1>
          <p className="w-1/2 text-2xl inline-block flex text-[#faebd7]">
            We are a group of GenZ people who are very much creative and have
            specialization in their required fields. We have also conducted many
            events and helped people to make their imagination come alive
          </p>
          <a
            
            className=" text-2xl border-2 border-[#c69d4d] hover:bg-[#AA771C] px-6 py-1.5 mt-5 rounded-md inline-block transition-all"
          >
            Contact Us
          </a>
        </div>
        <div className="w-4/6 h-[calc(100vh-3rem)] ml-auto">
          <div className="relative h-full w-full">
            <img
              src="/src/pages/Images/H1.jpg"
              alt="Your Image"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-10 mt-16 grid grid-cols-3 gap-8">
        <h2 className="font-bold text-5xl text-center mb-8 col-span-3 ">
          Our Past Events
        </h2>
        {events.map((item) => (
          <Event
            key={item.img_src}
            img_src={item.img_src}
            heading={item.heading}
          />
        ))}
      </section>
      <section className="container mx-auto px-10 mt-32 grid gap-y-5 place-items-center mb-20">
        <h2 className="font-bold text-5xl text-center mb-8">
          Some of our compliments
        </h2>
        <div className="flex gap-8">
          {testimony.map((item) => (
            <Testimony
              key={item.img_src}
              img_src={item.img_src}
              name={item.name}
              review={item.review}
              reviewer={item.reviewer}
            />
          ))}
        </div>
      </section>
      <div className="Contact">
        <ContactUs />
      </div>
    </main>
  )
}

export default Home
