import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { MyHome } from '../interfaces/postTypes'

// interface PageTypesProps {
//   data: MyHome[]
// }


export default function Home( {data} ) {
  const [state, setState] = useState(data)

  useEffect(() => {
    setInterval(async () => {
      const data = await (await fetch(`/api/currency`))?.json()
      setState(data)
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

export const getStaticProps: GetServerSideProps = async () => {

  const data = await (await fetch(`${process.env.API_URL}/api/currency`))?.json()
  
  if (!data) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
  
  return {
    props: {
      data
    }
  }

}
