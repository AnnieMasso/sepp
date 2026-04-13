import InputLabel from "@/components/InputLabel";
import TextInput from "@/components/TextInput";
import { useState } from "react";

export default function DetailsTache(){

    const[more, setMore] = useState()

    return(

        <div className="text-xs relative">
            <div className={`w-full h-screen absolute z-0 p-2 ${more ? 'blur-xl' : ''} `}>
                <div className="my-8">
                    <span className="text-xl">Analyse des besoins</span>
                    <hr />
                </div>
                <div>
                    <div className="flex mr-2">
                        <span className="text-base">Informations générales</span>
                        <button onClick={()=>setMore('infos_generales')} className="ml-auto mt-1 text-blue-500 underline" >Modifier</button>
                    </div>
                    <div className="m-3 ">
                        <div className="flex my-2">
                            <span>Statut</span>
                            <span className="bg-green-200 rounded px-1 ml-auto">Terminé</span>
                        </div>
                        <hr />
                        <div className="flex my-2">
                            <span>Priorité</span>
                            <span className="bg-yellow-200 rounded px-1 ml-auto">Basse</span>
                        </div>
                        <hr />
                        <div className="flex my-2">
                            <span>Date de début</span>
                            <span className=" rounded px-1 ml-auto">01 Mars 2026</span>
                        </div>
                        <hr />
                        <div className="flex my-2">
                            <span>Date de fin</span>
                            <span className="rounded px-1 ml-auto">01 Juin 2026 En retard</span>
                        </div>
                        <hr />
                        <div className="flex my-2">
                            <span>Durée</span>
                            <span className="rounded px-1 ml-auto">60 jours</span>
                        </div>
                        <hr />
                        <div className="flex my-2">
                            <span>Budget alloué</span>
                            <span className="bg-green-200 rounded px-1 ml-auto">200 000 FCFA</span>
                        </div>
                        <hr />
                        <div className="flex my-2">
                            <span>Budget dépensé</span>
                            <span className="bg-red-200 rounded px-1 ml-auto">200 000 FCFA</span>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="my-5">
                    <div className="flex mr-2">
                        <span className="text-base">Equipe assignéé</span>
                        <button onClick={()=>setMore('equipe')} className="ml-auto mt-1 text-blue-500 underline" >Modifier</button>
                    </div>
                    <div className="m-4">
                        <div className="flex my-2">
                            <div className="border rounded-full w-14 h-14 p-3">
                                <img src="/image1.png" alt="responsable" />
                            </div>
                            <span className="m-3 my-5">Nom</span>
                        </div> <hr />
                        <div className="flex my-2">
                            <div className="border rounded-full w-14 h-14 p-3">
                                <img src="/image1.png" alt="responsable" />
                            </div>
                            <span className="m-3 my-5">Nom</span>
                        </div> <hr />
                        <div className="flex my-2">
                            <div className="border rounded-full w-14 h-14 p-3">
                                <img src="/image1.png" alt="responsable" />
                            </div>
                            <span className="m-3 my-5">Nom</span>
                        </div> <hr />
                        <div className=" my-2 flex">
                            <div className="border rounded-full w-14 h-14 p-3">
                                <img src="/image1.png" alt="responsable" />
                            </div>
                            <span className="m-3 my-5">Nom</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* modifier les infos generales */}
        
            {more === "infos_generales" &&(
            <div className=" absolute w-full py-4 mx-3 my-20 z-20">
                <div className="text-center text-xl" >Modifier les informations générales</div>
                <form className="p-4" action="">
                    <InputLabel htmlFor="statut" value="Statut" />
                    <TextInput className='w-full mb-3' type="text" />

                    <InputLabel htmlFor="priorité" value="Priorité" />
                    <TextInput className='w-full mb-3' type="text" />

                    <InputLabel htmlFor="date_debut" value="Date de début" />
                    <TextInput className='w-full mb-3' type="date" />

                    <InputLabel htmlFor="date_fin" value="Date de fin" />
                    <TextInput className='w-full mb-3' type="date" />

                    <InputLabel htmlFor="durée" value="Durée" />
                    <TextInput className='w-full mb-3' type="number" />

                    <InputLabel htmlFor="budget_alloué" value="Budget alloué" />
                    <TextInput className='w-full mb-3' type="number" />

                    <InputLabel htmlFor="budget_dépensé" value="Budget dépensé" />
                    <TextInput className='w-full mb-3' type="number" />

                    <button className="bg-blue-500 px-2 py-1 text-white rounded">Enregistrer</button>
                    <button onClick={()=>setMore('')} className="border-blue-500 border ml-5 px-2 py-1 text-gray-600 rounded">Annuler</button>
                </form>
            </div>
            )}

            {/* modifier l'équipe */}

            {more === "equipe" &&(
            <div className=" absolute w-full py-4 mx-3 my-60 z-20">
                <div className="text-center text-xl" >Modifier l'équipe</div>
                <form className="p-4" action="">
                    <InputLabel htmlFor="statut" value="Sélectionner" />
                    <select className=" w-full mt-2 rounded" name="" id="">
                        <option value="">Jean Jacques</option>
                    </select> <br /> <br />

                    <button className="bg-blue-500 px-2 py-1 text-md text-white rounded">Enregistrer</button>
                    <button onClick={()=>setMore('')} className=" text-sm border-blue-500 border ml-5 px-2 py-1 text-gray-600 rounded">Annuler</button>
                </form>
            </div>
            )}

        </div>
    )

}