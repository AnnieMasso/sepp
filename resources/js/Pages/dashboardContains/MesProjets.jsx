import { FaPlus, FaPlusCircle, FaPlusSquare } from "react-icons/fa"
import { FaSearch } from "react-icons/fa";
import { Link } from "@inertiajs/react";


export default function MesProjets(){

    const projets = [
        {
            clé : 1,
            nom :'Application de suivi et d évaluation des projets',
            description : "Cette application permet de géré et d'évaluer efficacement les projets, peu importe le domaine d'excecution",
            montant : 25000,
            chef : 'Annie Carelle',
            statut : "terminé",
            date : "25/10/2025"
        },
        {
            clé : 2,
            nom :'Construction d un immeuble R+2',
            description : "Cette application permet de géré et d'évaluer efficacement les projets, peu importe le domaine d'excecution",
            montant : 25000,
            chef : 'Carelle',
            statut : "En cours",
            date : "25/10/2025"
        },
        {
            clé : 3,
            nom :'Construction d un immeuble R+2',
            description : "Cette application permet de géré et d'évaluer efficacement les projets, peu importe le domaine d'excecution",
            montant : 25000,
            chef : 'Carelle',
            statut : "En cours",
            date : "25/10/2025"
        },
        {
            clé : 4,
            nom :'Construction d un immeuble R+2',
            description : "Cette application permet de géré et d'évaluer efficacement les projets, peu importe le domaine d'excecution",
            montant : 25000,
            chef : 'Carelle',
            statut : "En cours",
            date : "25/10/2025"
        },
        {
            clé : 5,
            nom :'Construction d un immeuble R+2',
            description : "Cette application permet de géré et d'évaluer efficacement les projets, peu importe le domaine d'excecution",
            montant : 25000,
            chef : 'Carelle',
            statut : "En cours",
            date : "25/10/2025"
        }
    ]
    return(
        <div className="overflow-y-auto">
            {/* <div className="grid mt-6 ml-16  static grid-flow-col ">
                <h1 className="text-xl font-semibold">Mes projets</h1>
                <button className="bg-blue-700 text-white w-2/3 h-10 rounded ml-auto mr-3 hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700 hover:font-semibold">Nouveau projet</button>
            </div> */}
            {/* contenu de tous les projets */}
            <div className=" h-fit p-2 ">
                
                <div className="flex">
                    <div className="flex border md:w-1/2 rounded-full focus-within:border-blue-500 bg-white focus-within:ring-1 border-gray-300 h-12 mx-2 pb-3">
                        <FaSearch className="mx-2 my-3 size-6 text-blue-500"></FaSearch>
                        <input type="search" className="w-full mr-6 outline-none focus:ring-0  border-none h-11" placeholder="Rechercher un projet" name="" id="" />                    
                    </div>
                    <div className="m-auto">
                        <Link to={route('nouveauprojet')} className="rounded px-3 py-2 bg-blue-700 flex text-white" > <FaPlus className="pt-1"></FaPlus> Ajouter un projet</Link>
                    </div>
                </div>
                
                <div className="h-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 m-auto my-2" >

                    <a href={route('nouveauprojet')} className="">
                        <div className="border h-auto my-3 rounded px-3 text-green-700 text-2xl border-green-300 text-center py-16 md:py-36">
                            <FaPlusCircle className="mx-auto"></FaPlusCircle>
                            <span>Ajouter un projet</span>
                        </div>
                    </a>
                    {projets.map(projet=>
                        <button key={projet.clé} className="border text-left my-1 px-3 pb-2 py-5 border-blue-300 rounded-md w-full ">
                            <span className="text-blue-700 font-semibold font-serif text-2xl"> {projet.nom} </span> <br /> <br />
                            <span className="text-l style "> {projet.description} </span> <br /> <br />
                            <span className="text-blue-700 font-bold"> {projet.montant} </span><br />
                            <span className=""> Géré par {projet.chef}</span><br /> <br />
                            <span className="bg-green-200 text-green-800 border border-green-500 rounded py-1 px-5">{projet.statut}</span><br />
                            <div className="text-end mt-4">
                                <span className="ml-auto text-xs font-thin">Crée le {projet.date}</span><br />
                            </div>
                        </button>          
                    )}
                </div>
            </div>

        </div>
    )
}