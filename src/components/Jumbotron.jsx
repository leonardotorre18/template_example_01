import { BsFileEarmarkPerson } from 'react-icons/bs';
import Undraw from '../assets/undraw_software_engineer_lvl5.svg';

export default function Jumbotron() {
  return (
    <div>
      <div className="py-24 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div>
          <p className="font-bold text-sm ml-6 mb-2 text-gray-600">
            Welcoment to my portfolio website!
          </p>
          <h1 className="text-4xl font-bold pb-8">
            Hey Folks, I'm
            <span className="text-amber-400 px-4">UI Specialist</span>
          </h1>
          <p
            className="text-gray-600"
          >
            Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.
          </p>
          <div className="py-6 gap-3 flex flex-col sm:flex-row">
            <button className="button bg-gray-200 text-gray-600 flex items-center justify-center gap-2 hover:text-amber-400 transition-colors">
              <BsFileEarmarkPerson className="min-w-min" />
              Download Resume
            </button>
            <button className="button bg-gray-800 text-white hover:bg-amber-400 transition-colors">
              Get a free quote
            </button>
        </div>

        </div>
        <div className="px-4 sm:px-20">
          <img src={Undraw} alt="undraw_software_engineer_lvl5" />
        </div>
      </div>
    </div>
  )
}
