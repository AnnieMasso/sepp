import { useState } from "react";

export default function AccueilLayout(){

    const [showMenu, setShowMenu] = useState(false);
    const menu =()=>{
        setShowMenu(!showMenu)
    }
    return(
        <>
            <div>
                <div className="block p-32 border-2 w-[795px] xl:ml-3 xl:mt-0 xl:flex xl:w-[1240px] md:mt-10 md:p-20 md:border-0 md:w-[1000px] sm:w-[975px] ml-2 mr-3 rounded-xl mt-20 mb-10 ">
                    <div className="w-[500px] xl:w-[280px] sm:ml-32 md:ml-32 ml-12" >
                        <img src="/image1.png" alt="image d'une dame" />
                    </div>
                    <div className=" w-full xl:w-[400px] xl:mt-10 mt-20 ">
                        <span className="text-4xl">Un logiciel parfait pour</span>
                        <p className=" text-5xl xl:text-4xl font-extrabold mt-5 text-yellow-500">Le suivi et l'évaluation des projets</p> <br />
                        <p className=" text-4xl font-extrabold mb-10 text-blue-700">Planifier, Suivre et Evaluer</p>
                        <div className="md:grid md:grid-flow-col">
                            <a href="#"><div className="bg-blue-700 text-white rounded-lg text-center sm:text-3xl md:w-[400px] xl:text-xl xl:w-[280px] xl:h-16 xl:pt-5 md:text-2xl md:h-20 w-[550px] md:pt-6 pt-7 text-4xl p-3 h-24">Voir les fonctionnalités</div></a> <br /> <br />
                            <a href="#"><div className="bg-blue-700 text-white rounded-lg text-center sm:text-3xl md:w-[400px] xl:ml-6 xl:text-xl xl:w-[280px] xl:h-16 xl:pt-5 md:text-2xl md:h-20 md:pt-6 w-[550px] pt-7 text-4xl p-3 h-24">Voir l'utilisation</div></a>
                        </div>
                    </div>
                    
                </div>
                <div className="bg-blue-500 border-2 xl:w-[1200px] 2xl:mx-64 xl:mx-10 lg:grid lg:grid-flow-col lg:w-[1275px] md:w-[992px] sm:w-[975px] w-[795px] ml-2 rounded-xl px-20 py-16">
                    <p className="w-full leading-normal sm:leading-snug lg:w-96 xl:ml-6 lg:ml-32 text-justify xl:text-2xl xl:leading-normal sm:text-2xl text-white text-4xl">
                        S&E Projet est le logiciel de suivi-évaluation complet et adaptable pour répondre aux besoins de planification, de suivi et d'évaluation des projets. il est utilisé dans les domaines de 
                    </p>
                    <div className="ml-2 xl:ml-6 md:mt-10 mt-20">
                        <span className="bg-white text-blue-700 font-semibold p-3 md:text-2xl sm:text-3xl xl:text-2xl  text-4xl px-6 rounded-lg">Construction</span>
                        <span className="bg-white text-blue-700 font-semibold p-3 md:text-2xl sm:text-3xl xl:text-2xl text-4xl ml-5 px-6 rounded-lg">Electricité</span> <br /> <br /> <br />
                        <span className="bg-white text-blue-700 font-semibold p-3 md:text-2xl sm:text-3xl xl:text-2xl text-4xl px-6 rounded-lg">Informatique</span>
                        <span className="bg-white text-blue-700 font-semibold p-3 md:text-2xl sm:text-3xl xl:text-2xl text-4xl ml-5 px-6 rounded-lg">Agriculture</span>
                    </div>
                </div>
                <div className="border-blue-300 xl:w-[1200px] 2xl:mx-64 xl:mx-10 border-2 lg:w-[1275px] md:w-[992px] w-[795px] md:mt-16 sm:w-[975px] rounded-xl mt-7 ml-2 mr-3 ">
                    <div className="my-20 md:my-10 md:mx-10 lg:flex mx-20">
                        <div className="w-full xl:mx-24 lg:mx-14 lg:w-1/2 text-center">
                            <h3 className="text-blue-700 xl:text-3xl font-extrabold text-4xl">Performant et recommandé</h3>
                            <p className="mt-5 leading-normal xl:leading-normal xl:mt-8 xl:text-xl sm:text-2xl text-3xl">
                                S&E projet est un logiciel performant et adapté aux meilleures pratiques de gestion. Conçu spécifiquement pour les initiatives de développement multisectoriels, S&E projet est le logiciel recommandé pour générer automatiquement des Rapports de suivi et Tableaux de bord sur les progrès réalisés.
                            </p>
                        </div>
                        <div className="w-full text-center xl:mt-10 xl:mx-24 lg:mx-14 mt-20 md:mt-16 lg:mt-0 lg:w-1/2">
                            <h3 className="text-blue-700 xl:text-3xl font-extrabold text-4xl">Convivial</h3>
                            <p className="mt-5 xl:leading-normal xl:mt-8 xl:text-xl sm:text-2xl leading-normal text-3xl">
                                S&E projet est bilingue avec une interface conviviale et intuitive qui le rend facile à utiliser et à maîtriser après seulement quelques jours.                   
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}