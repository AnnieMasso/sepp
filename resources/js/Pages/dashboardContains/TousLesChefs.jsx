import { useState } from "react";
import { FaArrowRight, FaBriefcase, FaCheckCircle, FaSearch, FaStepForward } from "react-icons/fa";

export default function TousLesProjets(){

    // const [choice, setChoice] = useState(false)


    const [selectedChef, setSelectedChef] = useState(null)
    const chefs = [
        {key: 0, image : '', nom: 'Carelle', description: 'Chef de projet et de programme · Gestionnaire de projet/programme Chef de projet et de programme · Gestionnaire de projet/programme - Gestion des : projets (certifié PMP)', experience: '2', pr: '3'},
        {key: 1, image : '', nom: 'Annie', description: 'Chef de projet et de programme · Gestionnaire de projet/programme - Gestion des : projets (certifié PMP)', experience: '1', pr: '0'},
        {key: 2, image : '', nom: 'Masso', description: 'Chef de projet et de programme · Gestionnaire de projet/programme - Gestion des : projets (certifié PMP)', experience: '0', pr: '0'},
        {key: 3, image : '', nom: 'Masso Annie', description: 'Chef de projet et de programme · Gestionnaire de projet/programme - Gestion des : projets (certifié PMP)', experience: '3', pr: '4'},
    ]

    return(
        <div className="py-5 mx-5">
            <div className="flex border xl:w-1/2 rounded-full focus-within:border-blue-500 focus-within:ring-1 border-gray-300 h-12 mx-2 pb-3">
                <FaSearch className="mx-2 my-3 size-6 text-blue-500"></FaSearch>
                <input type="search" className="w-full mr-6 outline-none focus:ring-0 border-none h-11" placeholder="Rechercher" name="" id="" />
            </div>
            <div className=" grid gap-3 pt-5 xl:grid-cols-3 sm:grid-cols-2" >

                {chefs.map((chef)=>
                    <div key={chef.key} className={`shadow-lg my-3 p-3 sm:p-5 rounded-lg $choice ${selectedChef === chef.key ? ' transition-shadow ease-in-out duration-1000 shadow-blue-600 shadow-2xl' : '' } `}>
                        <div className="text-end">
                        {selectedChef === chef.key ?
                        <button className="bg-blue-200 px-2 border-blue-700 border text-blue-700 rounded" onClick={()=>setSelectedChef(!chef.key)} type="button">Annuler</button> : 
                        <button className="bg-blue-200 px-2 border-blue-700 border text-blue-700 rounded" onClick={()=>setSelectedChef(chef.key)} type="button">Choisir</button> }
                        
                        </div>
                        <div className=" my-4 text-center">
                            <div className="flex mt-4 mb-1 items-center justify-center">
                                <img className="size-28 rounded-full sm:size-36 border-2 p-1 border-blue-600" src="/image1.png" alt="user" srcset="" />
                            </div>
                
                            <span className="text-gray-600">{chef.nom} </span>
                        </div>
                        <span className="text-gray-600 text-xs line-clamp-4 "> {chef.description} </span>
                        <div className="my-3 text-sm">
                            <div className="flex">
                                <FaBriefcase className="mx-2 my-1 text-green-500"></FaBriefcase>
                                <span>{chef.experience} ans d'expérience</span>
                                
                            </div>
                            <div className="flex">
                                <FaCheckCircle className="mx-2 my-1 text-green-500"></FaCheckCircle>
                                <span> {chef.pr} projets réalisés </span>
                            </div>
                        </div>
                        <div className="grid mt-6 text-sm sm:ml-4 grid-flow-col w-full">
                            <a className="text-blue-500 underline" href="#">Notes et avis</a>
                            <a className="text-blue-500 flex underline ml-auto" href="#">Voir plus <FaArrowRight className="my-1 mx-2"/></a> 
                        </div>
                    </div>
                )}
            </div>
        </div>
        
    )
}