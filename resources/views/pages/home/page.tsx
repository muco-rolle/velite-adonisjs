type HomePageProps = {
  name: string
}

export function HomePage({ name }: HomePageProps) {
  return (
    <>
      {'<!DOCTYPE html>'}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Tresor Muco | Fullstack Software Developer</title>
        </head>
        <body>
          <h1 safe>Welcome {name}</h1>
        </body>
      </html>
    </>
  )
}
