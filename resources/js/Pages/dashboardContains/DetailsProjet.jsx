// import { Link } from "react-router-dom"
import { Link } from "@inertiajs/react"
import DetailsTache from "./DetailsTaches"
import { useState } from "react"
import NewTache from "./NewTache"
import { FaTimes } from "react-icons/fa"

export default function Taches(){

    const [selectedTache, setSelectedTache] = useState(null)
    const taches = [
        {clé : 7, nom: "Analyse des besoins", statut: "terminée", délai: "30/02/2026", priorité: "Elevée"},
        {clé : 1, nom: "Conception", statut: "En cours", délai: "30/02/2026", priorité: "Basse"},
        {clé : 2, nom: "Programmation", statut: "En retard", délai: "30/02/2026", priorité: "Elevée"},
        {clé : 3, nom: "Tests", statut: "Non commencée", délai: "30/02/2026", priorité: "Elevée"},
        {clé : 4, nom: "Validation", statut: "terminé", délai: "30/02/2026", priorité: "Moyenne"},
        {clé : 5, nom: "Déploiement", statut: "en cours", délai: "30/02/2026", priorité: "Elevée"},
        {clé : 6, nom: "Conception", statut: "terminé", délai: "30/02/2026", priorité: "Elevée"},
    ]

    const [newTache, setNewTache] = useState(false)

    return(
        <div className="relative">
            {/* {newTache === false &&( */}
            <div className={`lg:text-lg absolute w-full ${newTache ? 'blur-xl' : ''} ` }>
                <div className="bg-blue-600 sticky z-10 top-0 text-white md:text-md lg:text-lg text-xs p-2">
                    <div className="">Mise en place d'une application de suivi et d'évaluation des projets</div> <br />
                    <div className="md:flex">
                        <div className=" -mt-2 flex">
                            <div className=""> Montant utilisé : 30000 / 200000</div>
                            <div className="bg-green-200 md:ml-10 text-xs text-end ml-auto text-green-700 p-0.5 rounded">85 % achevé</div> <br />
                        </div>
                        <div className="mt-1 md:ml-5 md:-mt-2 flex">
                            <div >Durée : 60 jours</div>
                            <Link className="ml-auto md:ml-10 underline" href={route('dashboard')} >Plus d'informations</Link>
                        </div>
                    </div>

                </div>
                <div className="px-3 py-2">
                    <div className="flex md:w-2/3 text-xs lg:text-lg lg:w-1/2 lg:mx-20 m-2">
                        <div className="border border-blue-300 p-2 w-2/5 bg-gray-100 rounded">
                            <span>Taches totales</span> <br />
                            <span>20</span> <br />
                            <span className="text-red-500">4 en retard</span>
                        </div>
                        <div className="ml-auto border border-blue-300 p-2 w-2/5 bg-gray-100 rounded">
                            <span>Taches terminées</span><br />
                            <span>10</span><br />
                            <span>50%</span>
                        </div>
                    </div>

                    <div className="mt-5">
                        <button onClick={()=>setNewTache(true)} className="mx-2 lg:mx-20 bg-blue-500 my-2 text-white px-2 py-1 rounded" >Ajouter une tache</button>
                        <div className="text-md lg:text-lg md:mx-20 mx-2 md:w-1/2 flex">
                            <span>Liste des taches</span>
                            <span className="ml-auto">2O taches</span>
                        </div>
                        <div className="text-xs lg:text-sm w-full md:mx-20 md:w-1/2 grid gap-2 grid-cols-3 mx-1 py-2">
                            <button className="bg-gray-100 border border-green-600 px-1 py-1 rounded mx-2">Toutes</button>
                            <button className="bg-gray-100 border border-yellow-500 px-1 py-1 rounded mx-2">En cours</button>
                            <button className="bg-gray-100 border border-green-400 px-1 py-1 rounded mx-2">Terminées</button> 
                            <button className="bg-gray-100 border border-red-500 px-1 py-1 rounded mx-2">En retard</button>
                            <button className="bg-gray-100 border border-orange-500 px-1 py-1 rounded mx-2">Haute priorité</button>
                        </div>
                        <div className="my-2 z-0 md:mx-20 sm:flex ">
                            <div className="md:w-1/2 " >
                                {taches.map((tache)=>
                                <div key={tache.clé} className={` ${selectedTache === tache.clé ? 'border shadow shadow-blue-500 border-blue-500': ''} border my-2 rounded p-2 lg:text-sm shadow text-xs`}>
                                    <div className="flex">
                                        <span>{tache.nom} </span>
                                        <span className="bg-red-400 px-2 rounded ml-auto">{tache.priorité}</span>
                                    </div>
                                    <div className=" my-2 flex">
                                        <span>{tache.délai}</span>
                                        <span className="ml-auto bg-green-300 rounded px-1">{tache.statut}</span>
                                    </div>
                                    <div className="flex">
                                        <span className="mt-3 mr-3">Responsables</span>
                                        <div className="w-2/3 flex">
                                            <div className="rounded-full p-2 mx-1 border w-11 h-11"><img className="size-full" src="/image1.png" alt="iii" /></div>
                                            <div className="rounded-full p-2 mx-1 border w-11 h-11"><img className="size-full" src="/image1.png" alt="iii" /></div>
                                            <div className="rounded-full p-2 mx-1 border w-11 h-11"><img className="size-full" src="/image1.png" alt="iii" /></div>
                                        </div>
                                    </div>
                                    <div className=" mt-2 w-full">
                                        <div className="border h-2 rounded-full"></div>
                                        <Link className="ml-auto sm:hidden underline" href={route('detailtache')} >Voir plus</Link>
                                        <button onClick={()=>setSelectedTache(tache.clé)} type="button" className="ml-auto hidden sm:block underline" >Voir plus</button> 
                                    </div>
                                </div>
                                )}
                            </div>

                            {/* details taches */}
                            <div className="mx-3 my-2 md:w-1/2 rounded hidden sm:block z-0 border-blue-400 border w-full">
                                {!selectedTache && ( <div className="text-center my-32 text-2xl mx-4 " >Sélectionnez une tache pour plus d'informations</div>)}
                                {selectedTache && ( <DetailsTache /> )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* )} */}
            <div className="absolute py-5 sm:w-2/3 sm:mx-28 md:w-1/2 w-full z-10">
                {newTache === true &&(
                    <>
                    <button onClick={()=>setNewTache(false)} className="ml-auto flex mr-3 text-red-400 text-2xl "> <FaTimes></FaTimes> </button>
                    <NewTache/>
                    </>
                )}
            </div>
        </div>
    )

}