import React from 'react'
import PetRescue from '../images/petrescue3.png'
import Realist from '../images/realist.png'
import SightSeer from '../images/sightseer2.png'
import Ecommerce from '../images/ecommerce.png'
import '../index.css'


const Projects = () => {
    return (
        <>
            <div className='text-center mt-20'>
                <h2 className='text-3xl md:text-4xl py-2 font-medium'>Projects</h2>
            </div>
            <div className='flex flex-col justify-center gap-10 py-10 lg:flex-row lg:flex-wrap'>
                <div className="basis-1/3 flex-1 relative" id='projectBox'>
                    <a href='https://pet-rescue-qfuc.onrender.com/pets' target='_blank'>
                        <img src={PetRescue} className=" rounded-lg object-cover w-full h-full" layout="responsive" />
                        <div className="overlay">
                            <h3 className="text-4xl font-2xl">Pet Rescue</h3>
                            <p className="text-xl">Technologies used: EJS, Express, Node.js, MongoDB</p>
                        </div>
                    </a>
                </div>
                <div className=" basis-1/3 flex-1 relative" id='projectBox'>
                    <a href='https://sightseer-frontend.onrender.com' target='_blank'>
                        <img src={SightSeer} className=" rounded-lg object-cover w-full h-full" layout="responsive"/>
                        <div className="overlay">
                            <h3 className="text-4xl font-2xl">SightSeer</h3>
                            <p className="text-xl">Technologies used: React, Express, Node.js, MongoDB</p>
                        </div>
                    </a>
                </div>
                <div className=" basis-1/3 flex-1 relative" id='projectBox'>
                    <a href='https://real-ist-frontend.onrender.com/' target='_blank'>
                        <img src={Realist} className=" rounded-lg object-cover w-full h-full" layout="responsive"/>
                        <div className="overlay">
                            <h3 className="text-4xl font-2xl">Real-ist</h3>
                            <p className="text-xl">Technologies used: Python, Django, React</p>
                        </div>
                    </a>
                </div>
                <div className=" basis-1/3 flex-1 relative" id='projectBox'>
                    <a href='https://github.com/Alberto-Ibarra/Ecommerce-frontend' target='_blank'>
                        <img src={Ecommerce} className=" rounded-lg object-cover w-full h-full" layout="responsive"/>
                        <div className="overlay">
                            <h3 className="text-4xl font-2xl">Ecommerce</h3>
                            <p className="text-xl">Technologies used: React, Redux, Express, Node.js, MongoDB</p>
                        </div>
                    </a>
                </div>
            </div>
            
        </>
    )
}

export default Projects
