import InputLabel from "@/components/InputLabel"
import TextInput from "@/components/TextInput"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"

export default function NewTache(){
    
    return(
        <div className="m-2 shadow-2xl shadow-blue-500 rounded p-2 bg-white">
            <div className="text-blue-500 flex">
                <div>
                    <span className=" text-gray-500 font-semibold flex">Nouvelle tache</span><br />
                    <span>Projet: Gestion des bases de données</span>
                </div>
                {/* <button className="ml-auto text-red-400 text-2xl -mt-10"> <FaTimes></FaTimes> </button> */}
            </div>
            <form className="my-5" action="">
                <InputLabel htmlFor="statut" value="Nom de la tache" />
                <TextInput className='w-full mb-3' type="text" />
                <InputLabel htmlFor="statut" value="Description de la tache" />
                <TextInput className='w-full mb-3' type="text" />
                <InputLabel htmlFor="statut" value="Priorité" />
                <select className="w-full border border-gray-300   rounded mb-3" name="" id="">
                    <option value="">Haute</option>
                    <option value="">Moyenne</option>
                    <option value="">Basse</option>
                </select>
                <InputLabel htmlFor="statut" value="Date de début" />
                <TextInput className='w-full mb-3' type="date" />
                <InputLabel htmlFor="statut" value="Durée" />
                <TextInput className='w-full mb-3' type="number" />
                <InputLabel htmlFor="statut" value="Date de fin" />
                <TextInput className='w-full mb-3' type="date" />
                <InputLabel htmlFor="statut" value="Budget alloué" />
                <TextInput className='w-full mb-3' type="number" />
                <InputLabel htmlFor="statut" value="Dépendances" />
                <select className="w-full border border-gray-300 mb-3 rounded" name="" id="">
                    <option value="">Tache 1</option>
                    <option value="">Tache 2</option>
                    <option value="">Tache 3</option>
                </select>
                <InputLabel htmlFor="statut" value="Equipe assignée" />
                <select className="w-full border border-gray-300 mb-3 rounded" name="" id="">
                    <option value="">Personne 1</option>
                    <option value="">Personne 2</option>
                    <option value="">Personne 3</option>
                </select>
                <span className="text-blue-500 my-2 flex">Indicateurs de performance</span>
                <InputLabel htmlFor="statut" value="Indicateur principal" />
                <TextInput placeholder = "Exemple: Pourcentage d'avancement" className='w-full mb-3' type="text" />
                <TextInput placeholder='Exemple: 80%' className='w-full mb-3' type="number" />
                <InputLabel htmlFor="statut" value="Indicateur secondaire" />
                <TextInput className='w-full mb-3' placeholder="Exemple: Nombre d'objectifs atteints" type="text" />
                <TextInput className='w-full mb-3' placeholder="Exemple: 3 " type="number" />

                <div className="grid gap-3 text-white grid-flow-col">
                    <button className="bg-blue-500 rounded" type="submit">Créer</button>
                    <button className="border text-blue-500  rounded " type="reset">Annuler</button>
                </div>
            </form>
        </div>
    )
}