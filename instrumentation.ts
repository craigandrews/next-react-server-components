import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel({ serviceName: 'your-project-name' })
}
