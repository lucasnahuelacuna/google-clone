import Image from 'next/image'

const Avatar = ({ url }) => {
    return (
        <img
            loading='lazy' 
            src={url}
            alt='profile-pic'
            className='h-10 w-10 object-cover rounded-full 
            cursor-pointer transition duration-150 transform
            hover:scale-110'
        />
    )
}

export default Avatar
