import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/DeveloperSRGOnline')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // })
    return (
        <div className='text-center m-4 p-10 bg-gray-600 text-white text-5xl'>Github Followers : <span className='text-amber-400 font-extrabold text-6xl'>{data.followers}</span>
            <img className='mx-auto my-10 block border rounded-3xl' src={data.avatar_url} alt="git picture" /></div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/DeveloperSRGOnline')
    return response.json()
}