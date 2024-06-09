import dynamic from 'next/dynamic'
import Head from 'next/head'

const GameView = dynamic(() => import('@/features/game/GameView/GameView'), { ssr: false })

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
