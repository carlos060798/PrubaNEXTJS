import NavigatePage from '@/components/Navigate'
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>PostAPP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <NavigatePage/>
        {children}</body>
    </html>
  )
}
