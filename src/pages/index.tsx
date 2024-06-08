import Head from 'next/head'
import { GameView } from '@/features/game/GameView/GameView'

export default function Home() {
  return (
    <>
      <Head>
        <title>Profit Channel</title>
        <meta name="description" content="Profit Channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <GameView />
      </main>
    </>
  )
}
