import '../styles/globals.css';
import Head from './head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Head />
      </head>
      <body>{children}</body>
    </html>
  )
}
