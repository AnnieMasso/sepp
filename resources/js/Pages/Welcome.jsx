import { ChartBarStacked, ChartBarStackedIcon, FileBarChart, ForkKnifeCrossed, Link } from "lucide-react";
import { useState } from "react";
import AccueilLayout from "@/layouts/AcceuilLayout";
import Avis from "@/layouts/AvisLayout";
import APropos from "@/layouts/AProposLayout";
import Fonctionnalités from "@/layouts/FonctionnalitésLayout";
import Utilisation from "@/layouts/UtilisationLayout";
import { FaBars, FaCrop, FaCropAlt, FaCross, FaCrosshairs, FaMarkdown, FaMarker, FaMinusSquare, FaTimes } from 'react-icons/fa';
export default function WelcomeLayout(){

    const [showMenu, setShowMenu] = useState(false);
    const menu =()=>{
        setShowMenu(!showMenu)
    }

    const [showContent, setShowContent] = useState('accueil');

    return(
        <div className="">
            {/* entete */}
            <div className="grid grid-flow-col z-10 fixed ">
                <div className={`bg-blue-700 md:w-[1015px] 2xl:w-[2060px] xl:w-[1800px] lg:w-[1300px] xl:h-20 lg:h-32 md:h-24 sm:w-[990px] w-[813px] ${showMenu ? 'blur-xs' : ''} top-0 z-0 absolute items-center flex h-32 text-white`}>
                    <div className="mr-12 ml-12">logo</div>
                    {!showMenu &&(
                        <button onClick={menu} className=" ml-auto mr-8">
                            <FaBars className="size-14 md:hidden sm:size-10 "></FaBars>
                        </button>
                    )}
                    
                </div>
                {showMenu && (
                <div className="text-yellow-200 sm:w-[400px] justify-end text-center absolute opacity-90 bg-blue-700 z-10 w-[813px]">
                    <button onClick={menu} className="border-b-2 w-full sm:py-4 py-6">
                        <FaTimes className="size-16 sm:size-10 text-white text-end mr-10 ml-auto"></FaTimes>
                    </button>  
                    <a href="#" onClick={()=>{setShowContent('accueil'); setShowMenu(false)}} >
                        <div className="text-xl hover:border-b-2 xl:text-xl lg:text-2xl py-6">Accueil</div>
                    </a>
                    <a href="#" onClick={()=>{setShowContent('fonctionnalités'); setShowMenu(false)}}>
                        <div className="text-xl hover:border-b-2 xl:text-xl lg:text-2xl py-6">Fonctionnalités</div>
                    </a> 
                    <a href="#" onClick={()=>{setShowContent('utilisation'), setShowMenu(false)}}>
                        <div className="text-xl hover:border-b-2 xl:text-xl lg:text-2xl py-6">Utilisation</div>
                    </a>
                    <a href="/login">
                        <div className="text-xl hover:border-b-2 xl:text-xl lg:text-2xl py-6">Connexion</div>
                    </a> 
                    <a href="#" onClick={()=>{setShowContent('avis'); setShowMenu(false)}}>
                        <div className="text-xl hover:border-b-2 xl:text-xl lg:text-2xl py-6">Avis</div>
                    </a> 
                    <a href="#" onClick={()=>{setShowContent('apropos'); setShowMenu(false)}}>
                        <div className="text-xl hover:border-b-2 xl:text-xl lg:text-2xl py-6">A propos</div>
                    </a>
                </div>
                )}
                <div className="text-yellow-200 2xl:ml-[700px] xl:pt-0.5 lg:pt-6 pt-2 md:w-full ml-60 xl:ml-[370px] lg:ml-80 hidden md:grid md:grid-flow-col text-center opacity-90 bg-blue-700">
                    <a href="#" onClick={()=>{setShowContent('accueil')}} >
                        <div className="text-xl hover:border-b-2 xl:text-xl lg:text-2xl py-6">Accueil</div>
                    </a>
                    <a href="#" onClick={()=>setShowContent('fonctionnalités')}>
                        <div className="text-xl hover:border-b-2 xl:text-xl lg:text-2xl py-6">Fonctionnalités</div>
                    </a> 
                    <a href="#" onClick={()=>setShowContent('utilisation')}>
                        <div className="text-xl hover:border-b-2 xl:text-xl lg:text-2xl py-6">Utilisation</div>
                    </a>
                    <a href="/login">
                        <div className="text-xl hover:border-b-2 xl:text-xl lg:text-2xl py-6">Connexion</div>
                    </a> 
                    <a href="#" onClick={()=>setShowContent('avis')}>
                        <div className="text-xl hover:border-b-2 xl:text-xl lg:text-2xl py-6">Avis</div>
                    </a> 
                    <a href="#" onClick={()=>setShowContent('apropos')}>
                        <div className="text-xl hover:border-b-2 xl:text-xl lg:text-2xl py-6">A propos</div>
                    </a>
                </div>
            </div>
            {/* corps */}
            <div className={`pt-20 z-0 relative ${showMenu ? 'blur-md' : ''}`}>
                {showContent === 'accueil' &&(
                    <AccueilLayout/>
                )}
                {showContent === 'fonctionnalités' &&(
                    <Fonctionnalités/>
                )}
                {showContent === 'utilisation' &&(
                    <Utilisation/>
                )}
                {showContent === 'avis' &&(
                    <Avis/>
                )}
                {showContent === 'apropos' &&(
                    <APropos/>
                )}
            </div>
            {/* pied de page */}
            <div className="bg-blue-700 lg:w-[1300px] 2xl:w-[2060px] xl:w-[1264px] md:w-[1008px] sm:w-[990px] mt-20 w-[813px] h-32">

            </div>
        </div>
    )
}