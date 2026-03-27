import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { FaBars, FaBriefcase, FaCode, FaServer, FaFileAlt, FaFolder, FaProjectDiagram, FaRProject, FaTasks, FaTimes, FaTable, FaUser } from 'react-icons/fa';
import MesProjets from './dashboardContains/MesProjets';
import Gantt from './dashboardContains/Gantt/Gantt';
import Rapports from './dashboardContains/Rapports';
import Données from './dashboardContains/Données';
import TousLesChefs from './dashboardContains/TousLesChefs';
import {Link} from '@inertiajs/react';

export default function Dashboard() {

    const [showBoard, setShowBoard] = useState(false);

    const Board = () => {
        setShowBoard(!showBoard);
    };

    const [showDashboardContains, setShowDashboardContains] = useState('mesprojets')

    return (
        <AuthenticatedLayout>
            <div className="relative">   
                {/* div pour les titres */}
                <div className="p-6 sticky top-0 shadow-xl xl:hidden bg-white z-0 flex text-blue-700">
                    <button onClick={Board} className="hover:text-blue-500 transition">
                        <FaBars className='size-6' />
                    </button>
                    {showDashboardContains== "mesprojets"&&(
                        <h1 className='text-gray-500 ml-3 text-xl font-semibold'>Mes projets</h1>
                    )}
                    {showDashboardContains== "gantt"&&(
                        <h1 className='text-gray-500 ml-3 text-xl font-semibold'>Tableau de Gantt</h1>
                    )}
                    {showDashboardContains== "rapport"&&(
                        <h1 className='text-gray-500 ml-3 text-xl font-semibold'>Rapports</h1>
                    )}
                    {showDashboardContains== "données"&&(
                        <h1 className='text-gray-500 ml-3 text-xl font-semibold'>Données</h1>
                    )}
                </div>

                {/* div pour le sidebar duunamique */}
                {showBoard && (
                    <div className='fixed h-screen xl:hidden inset-0 z-10 flex'>
                        <div className='p-6 w-2/3 h-full bg-blue-600 opacity-95 text-white shadow-xl'>
                            <button 
                                onClick={Board} 
                                className='text-white  p-1 rounded mb-6 hover:bg-gray-100'
                            >
                                <FaTimes className='size-6' />
                            </button> 
                            <nav className="flex flex-col gap-3">
                                <a onClick={()=>{setShowDashboardContains('mesprojets'); setShowBoard(false)}} className='bg-blue-700 flex flex-row gap-2 cursor-pointer text-left p-3 w-full rounded hover:bg-blue-800 transition'>
                                    <FaBriefcase className='mt-1'></FaBriefcase>
                                    Mes projets
                                </a>
                                <a onClick={()=>{setShowDashboardContains('chefsdeprojets'); setShowBoard(false)}} className='bg-blue-700 flex flex-row gap-2 text-left p-3 w-full rounded hover:bg-blue-800 cursor-pointer transition'>
                                    <FaUser className='mt-1'></FaUser>
                                    Voir les profils des chefs
                                </a>
                                {/* <Link href={route('tousleschefsdeprojet')} as="button" method='get' >chefs</Link> */}
                                <a onClick={()=>{setShowDashboardContains('gantt'); setShowBoard(false)}} className='bg-blue-700 flex flex-row gap-2 text-left cursor-pointer p-3 w-full rounded hover:bg-blue-800 transition'>
                                    <FaProjectDiagram className='mt-1'/>
                                    Gantt
                                </a>
                                <a onClick={()=>{setShowDashboardContains('rapports'); setShowBoard(false)}} className='bg-blue-700 flex flex-row gap-2 text-left cursor-pointer p-3 w-full rounded hover:bg-blue-800 transition'>
                                    <FaFileAlt className='mt-1'></FaFileAlt>
                                    Rapports
                                </a>
                                <a onClick={()=>{setShowDashboardContains('données'); setShowBoard(false)}} className='bg-blue-700 flex flex-row gap-2 text-left cursor-pointer p-3 w-full rounded hover:bg-blue-800 transition'>
                                    <FaServer className='mt-1'></FaServer>
                                    Données
                                </a>
                            </nav>
                        </div>
                        <div className="flex-1" onClick={Board}></div>
                    </div>
                )}

                <div className='flex'>
                    {/* sidebar sur écran large */}
                    <div className='hidden h-screen sticky top-16 w-1/2 xl:flex'>
                        <div className='p-6 h-full pt-10 bg-blue-600 opacity-95 text-white shadow-xl'>
                            <nav className="flex flex-col gap-3">
                                <a onClick={()=>{setShowDashboardContains('mesprojets'); setShowBoard(false)}} className='bg-blue-700 cursor-pointer flex flex-row gap-2 text-left p-3 w-full rounded hover:bg-blue-800 transition'>
                                    <FaBriefcase className='mt-1'></FaBriefcase>
                                    Mes projets
                                </a>
                                <a onClick={()=>{setShowDashboardContains('chefsdeprojets'); setShowBoard(false)}} className='bg-blue-700 flex flex-row cursor-pointer gap-2 text-left p-3 w-full rounded hover:bg-blue-800 transition'>
                                    <FaUser className='mt-1'></FaUser>
                                    Voir les profils des chefs
                                </a>
                                {/* <Link href={route('tousleschefsdeprojet')} as="button" method='get' >chefs</Link> */}
                                <a href={route('gantt')} className='bg-blue-700 cursor-pointer flex flex-row gap-2 text-left p-3 w-full rounded hover:bg-blue-800 transition'>
                                    <FaProjectDiagram className='mt-1'/>
                                    Gantt
                                </a>
                                <a onClick={()=>{setShowDashboardContains('rapports'); setShowBoard(false)}} className='bg-blue-700 cursor-pointer flex flex-row gap-2 text-left p-3 w-full rounded hover:bg-blue-800 transition'>
                                    <FaFileAlt className='mt-1'></FaFileAlt>
                                    Rapports
                                </a>
                                <a onClick={()=>{setShowDashboardContains('données'); setShowBoard(false)}} className='bg-blue-700 cursor-pointer flex flex-row gap-2 text-left p-3 w-full rounded hover:bg-blue-800 transition'>
                                    <FaServer className='mt-1'></FaServer>
                                    Données
                                </a>
                            </nav>
                        </div>
                        <div className="flex-1" onClick={Board}></div>
                    </div>

                    <div className={` ${showBoard ? 'blur-sm' : ''} `}>
                        {/* div pour mes projets */}
                        {showDashboardContains =="mesprojets" &&(
                            <MesProjets/>
                        )}
                        {/* div pour les chefs dee projet */}
                        {showDashboardContains === 'chefsdeprojets' &&(
                            <TousLesChefs/>
                        )}
                        {/* div pour gantt */}
                        {/* {showDashboardContains =='gantt'&&(
                            <Gantt/>
                        )} */}
                        {/* div pour les rapports */}
                        {showDashboardContains =='rapports'&&(
                            <Rapports/>
                        )}
                        {/* div pour les données */}
                        {showDashboardContains =='données'&&(
                            <Données/>
                        )}
                    </div>  
                </div>  
            </div>
        </AuthenticatedLayout>
    );
}
