import React from 'react'

export default function Contact() {
  return (
    <div className="py-4 max-w-4xl mx-auto">
      <form onSubmit={e => {
        e.preventDefault();
        alert('Enviado...')
      }}>
        <div
          className="flex flex-col"
        >
          <input 
            type="text"
            placeholder="Your Name"
            className="input"
          />
          <input 
            type="text"
            placeholder="Email"  
            className="input"
          />
          <textarea
          name="Message"
          rows="6"
          placeholder="Message"
          className="input"
          />
          <button 
            type="submit"
            className="bg-amber-400 p-3 rounded-full my-6 text-white hover:bg-gray-600 font-bold text-lg transition-colors"
          >
            Send Button
          </button>
        </div>
      </form>
    </div>
  )
}
