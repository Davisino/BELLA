import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  if (req.method === "POST") {
    // use messaged from body to detect the intent with RASA MODEL
    const message = req.body
    const response = await fetch('http://0.0.0.0:5005/model/parse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: message })
    })
    const rasaMessageObject = await response.json()
    console.log(rasaMessageObject)

    // Base on the intent, do operation



    res.status(200).json({ message: "Output from the backend " });

  }


}
