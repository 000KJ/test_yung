import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react'

export default function Home() {
  const [state, setState] = useState({})

  useEffect(() => {
    async function myFetch() {
      const data = await fetch(`/api/currency`)
      let log = await data.json()
      setState(log)
    }
    myFetch()
  }, [])

  useEffect(() => {
    setInterval(async () => {
      const data = await fetch(`/api/currency`)
      let log = await data.json()
      setState(log)
    }, 10000)
  }, [])
  
  return (
    <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500">
      <p className="text-center" >
        Курс {state.currency}: {state.rate}
      </p>
    </div>
  )
}
