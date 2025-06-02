import React from 'react'

export const Home = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-[200px]">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Chrome Extension
      </h1>
      <div className="bg-white rounded-lg shadow p-4">
        <p className="text-gray-600">
          you can start do change at sec/pages/home.jsx
        </p>
        <button className="text-red-500 mt-4 bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded">
          Click me!
        </button>
      </div>
    </div>
  )
}
