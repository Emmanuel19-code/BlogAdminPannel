import './globals.css'
import 'react-quill/dist/quill.snow.css';

export const metadata = {
  title: 'Blog Pannel',
  description: 'Generated by Emmanel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
