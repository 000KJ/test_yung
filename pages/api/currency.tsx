// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"

type Data = {
  currency: string,
  rate: number,
  // error: string,
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    res.status(200).json({
      currency: 'RUB/USD',
      rate: 10+Math.random()*50, 
    })
  } catch (error) {
    res.status(401).json({ error })
  }
}

