import React from 'react'

const Card = ({username="Shivam Garade",btnText="Click Me",desc="Something will go here"}) => {
    // console.log(username)
  return (
    <div className="relative w-80 h-96 rounded-xl border-gray-400 overflow-hidden shadow-2xl group border bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1536148935331-408321065b18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwY29kaW5nfGVufDB8fDB8fHww"
          alt="Profile Photo"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>

        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white">
          <h3 className="text-2xl font-bold tracking-wide mb-2">
            {username}
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed mb-5">
            {desc }
          </p>

          <button className="flex items-center justify-center gap-2 w-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-sm">
            {btnText}
          </button>
        </div>
      </div>
  )
}

export default Card