import NavigatePage from '@/components/Navigate'
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigatePage/>
        {children}</body>
    </html>
  )
}
