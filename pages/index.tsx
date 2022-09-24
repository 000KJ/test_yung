import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react'

export default function Home() {
  const [state, setState] = useState({})

  useEffect(() => {
    setInterval(async () => {
      const data = await fetch('http://localhost:3000/api/currency')
      let log = await data.json()
      setState(log)
    }, 10000)
  }, [state])

  return (
    <div>
      <p>
        Курс {state.currency}: {state.rate}
      </p>
    </div>
  )
}
