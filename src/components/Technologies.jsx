import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript, DiReact, DiPostgresql, DiMongodb, DiNodejs, DiPython, DiBootstrap, DiJqueryLogo, DiGit, DiMysql } from 'react-icons/di';
import { SiExpress, SiPostman, SiTailwindcss, SiVite} from 'react-icons/si';


const Technologies = () => {
    return (
        <>
            <div className='text-center mt-10'>
                <h2 className='text-3xl md:text-4xl py-2 font-medium'>Technologies</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 text-8xl shadow-xl p-10 rounded-xl my-10 ' style={{'box-shadow': '0 0 15px rgba(226, 232, 240)'}}>
                        <AiFillHtml5 className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <DiCss3 className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <DiJavascript className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <DiReact className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <SiExpress className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <DiNodejs className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <DiMongodb className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <DiPostgresql className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <DiMysql className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <DiPython className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <SiPostman className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <SiTailwindcss className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <DiBootstrap className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <SiVite className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <DiJqueryLogo className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                        <DiGit className='mx-auto hover:scale-150 transform transition duration-300 ease-in-out'/>
                    </div>
                </div>
        </>
    )
}

export default Technologies
