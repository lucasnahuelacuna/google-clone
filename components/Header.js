import { SearchIcon } from "@heroicons/react/outline"
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useRouter} from 'next/router'
import { useRef } from "react"
import Avatar from "./Avatar"
import HeaderOptions from "./HeaderOptions"

const Header = () => {
    const router = useRouter()
    const searchInputRef = useRef()

    const search = e => {
        e.preventDefault()

        const term = searchInputRef.current.value

        if (!term) {
            return
        }

        router.push(`/search?term=${term}`)
    }

    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center'>
                <Image 
                    src='https://logos-marcas.com/wp-content/uploads/2020/09/Google-Logo.png'
                    height={40}
                    width={120}
                    objectFit='cover'
                    onClick={() => router.push('/')}
                    className='cursor-pointer'
                />
                <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
                    <input ref={searchInputRef} type="text" className='flex-grow w-full focus:outline-none'/>
                    <XIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' 
                        onClick={() => (searchInputRef.current.value = '')}
                    />
                    <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
                    <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
                    <button hidden type='submit' onClick={search}>Search</button>
                </form>
                <Avatar
                    className='ml-auto' 
                    url='https://www.tonica.la/__export/1612726249424/sites/debate/img/2021/02/07/hugh-jackman-forma-fxsica-wolverine_1.jpg_1037907269.jpg'
                />
            </div>
            <HeaderOptions />
        </header>
    )
}

export default Header
