// pages/api/text_to_speech.js
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
    organization: "org-t0WmkBPFapWSFjaxdwErrvTb",
    apiKey: "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",
});




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { text } = req.body;
        try {
            const mp3 = await openai.audio.speech.create({
                model: "tts-1",
                voice: "nova",
                input: text,
            });
            const buffer = Buffer.from(await mp3.arrayBuffer());

            res.status(200).send(buffer);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
