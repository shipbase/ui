import { createAnthropic } from "@ai-sdk/anthropic"
import "dotenv/config"

export const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  baseUrl: process.env.ANTHROPIC_BASE_URL,
})
