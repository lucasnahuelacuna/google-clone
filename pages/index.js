import Head from 'next/head'
import Avatar from './components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

          {/* Avatar */}
          <Avatar 
            url='https://www.tonica.la/__export/1612726249424/sites/debate/img/2021/02/07/hugh-jackman-forma-fxsica-wolverine_1.jpg_1037907269.jpg'
          />
        </div>
      </header>

      {/* Body */}

      {/* Footer */}
    </div>
  )
}
