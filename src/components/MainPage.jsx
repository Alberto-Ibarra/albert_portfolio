import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import myImage from '../images/me.png'


const MainPage = () => {
    return (
        <>
            <div className='text-center p-2 font-medium'>
                <h1 className='text-6xl md:text-7xl py-2'>Alberto Ibarra</h1>
                <h2 className='text-3xl md:text-4xl py-2'>Full Stack Developer</h2>
                <img src={myImage} className='rounded-full md:h-96 md:w-96 max-h-max mx-auto'/>
            </div>
            <div className='text-7xl flex justify-center gap-8 py-3 mt-3'>
                <AiFillGithub />
                <AiFillLinkedin />
            </div>
            <div className='mt-20 text-center'>
                <h2 className='text-3xl md:text-4xl py-2 font-medium'>About me</h2>
                <p className='text-lg md:text-xl py-5 leading-6'>I am a full-stack developer from La Puente, California with a passion for coding and problem-solving. My journey in programming began a year ago, and since then, I have honed my skills by attending a bootcamp at General Assembly. Through the bootcamp, I have gained experience in developing web applications and have learned how to work with various tools and technologies. I am enthusiastic about using my skills to build impactful and innovative applications. In my free time, I enjoy reading and exploring new technologies.</p>
            </div>
        </>
    )
}

export default MainPage
