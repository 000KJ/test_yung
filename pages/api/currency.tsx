// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import { MyHome } from '../../interfaces/postTypes'

export default function handler(req: NextApiRequest, res: NextApiResponse<MyHome>) {
  try {
    res.status(200).json({
      currency: 'RUB/USD',
      rate: 10+Math.random()*50, 
    })
  } catch (err) {
    res.status(401).json({ error: err.message })
  }
}

