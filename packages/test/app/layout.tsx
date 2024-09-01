import '@egjs/flicking/sass/flicking.sass'
import '@egjs/flicking-plugins/dist/flicking-plugins.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
