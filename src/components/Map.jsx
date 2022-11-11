import React from 'react'
import { AiOutlineInstagram, AiOutlineDribbble, AiOutlineYoutube } from 'react-icons/ai'

export default function Map() {
  return (
    <div className="py-6 max-w-7xl mx-auto">
      <div className="h-96 lg:min-h-[70vh]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13671.1371109461!2d-68.01487008438569!3d10.279318439236405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e805c79529e5953%3A0x9c93fad61fb00ebe!2sUniversidad%20de%20Carabobo!5e0!3m2!1ses!2sve!4v1668187751474!5m2!1ses!2sve" 
          width="100%" 
          height="100%" 
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>
      <div className="bg-gray-600 p-6 flex justify-between">
        <div>
          <h5 className="text-white text-4xl font-bold mb-4">Say hello</h5>
          <p className="text-lg text-white">010 020 0960</p>
          <p className="text-lg text-white">hello@company.co</p>
        </div>
        <div className="flex flex-col justify-evenly w-6 text-white">
          <AiOutlineDribbble className="w-full h-full" />
          <AiOutlineInstagram className="w-full h-full" />
          <AiOutlineYoutube className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}
