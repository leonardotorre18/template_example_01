import React from 'react'

export default function ItemList({
  title, subtitle, description, year
}) {
  return (
    <div className="flex py-6">
      <div className="min-w-max">
        <span className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-full text-white font-bold text-lg">
          {year}
        </span>
      </div>
      <div className="max-w-md ml-10">
        <div className="flex flex-col sm:flex-row sm:items-end gap-3 mb-3">
          <h4 className="text-2xl font-bold">
            {title}
          </h4>
          <span className="font-bold">
            {subtitle}
          </span>
        </div>
        <p className="text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}
