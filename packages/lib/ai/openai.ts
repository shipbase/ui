import { createOpenAI } from "@ai-sdk/openai"
import "dotenv/config"

export const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
})
