import { useState } from "react"
import { ChartBar, ClipboardList } from "lucide-react";
import { FaDollarSign, FaMoneyBillAlt, FaMoneyCheck, FaMoneyCheckAlt } from "react-icons/fa";
import TousLesChefs from "./TousLesChefs";

export default function NewProject() {

    const [showStep, setShowStep] = useState('step1');

    return (
        <div className="h-screen xl:w-[1000px] container lg:w-[800px] mx-auto ">
            <div className="bg-blue-700 xl:mx-0 lg:mx-20 sticky top-0 lg:bg-black sm:text-2xl text-white h-1/6 text-2xl items-center justify-center flex rounded-b-full ">
                Créer un nouveau projet
            </div>
            <form action="" className="" method="post">

                {/* step 1 */ }
                { showStep == "step1" && (
                    <div className="mt-10 lg:mx-20 p-4">
                        <h1 className="text-blue-700 font-semibold sm:text-2xl text-xl">Parlez nous de votre projet</h1>
                        <div className=" sm:mt- mt-5">
                            <label className="w" htmlFor="Nom du projet">Nom du projet</label> <span className="text-red-500 text-xl">*</span> <br />
                            <input required className="w-full rounded sm:mb-3 sm:h-10 sm:mt-2 mb-4 my-1 border-blue-400 focus:outline-none focus:ring-0" type="text" placeholder="Quel est le nom de votre projet ?" name="" id="" /> <br />
                            <label className="" htmlFor="">Domaine du projet</label> <span className="text-red-500 text-xl">*</span> <br />
                            <select name="" required className="w-full mb-4 sm:mb-3 sm:h-10 sm:mt-2 appearance-none rounded my-1 border-blue-400 focus:outline-none focus:ring-0" id="">
                                <option className="border-blue-300 w-32" value="informatique">Informatique</option>
                                <option className="w-32" value="génie civil">Génie civil</option>
                                <option className="w-32" value="électricité">Electricité</option>
                                <option className="w-32" value="hospitalier">Hospitalier</option>
                            </select> <br />
                            <label className="my-1" htmlFor="">Description</label> <span className="text-red-500 text-xl">*</span> <br />
                            <textarea required rows={ 5 } className="w-full sm:mb-3 sm:h-60 sm:mt-2 rounded mb-4 my-1 border-blue-400 focus:outline-none focus:ring-0" name="" placeholder="Décrivez en quelques lignes votre projet" id="" />
                            <button onClick={ () => setShowStep('step2') } className="bg-blue-700 rounded text-white ml-auto px-5 py-2" type="button">Suivant</button>
                        </div>
                    </div>
                ) }

                {/* step 2 */ }
                { showStep == "step2" && (
                    <div className="mt-10 lg:mx-20 p-4">
                        <div className="flex">
                            <span className="text-green-500 mt-3 mr-2"><ClipboardList className="sm:size-10"></ClipboardList></span>
                            <h1 className="lg:mt-3 "> Qu'est ce que vous attendez à la fin de votre projet ? <span className="text-red-500 text-xl">*</span> </h1 >
                        </div> <br />
                        <textarea required rows={ 8 } className="w-full rounded mb-5 sm:mb-8 border-blue-400 focus:outline-none focus:ring-0" name="" id=""></textarea>
                        <button onClick={ () => setShowStep('step1') } className="bg-blue-700 text-white rounded-md ml-auto px-5 py-2" type="button">Précédent</button>
                        <button onClick={ () => setShowStep('step3') } className="bg-blue-700 ml-8 text-white rounded-md  px-8 py-2" type="button">Suivant</button>
                    </div>
                ) }

                {/* step 3 */ }
                { showStep == "step3" && (
                    <div className=" lg:mx-20 mt-10 p-4">
                        <div className="flex">
                            <FaDollarSign className="mr-2 mt-4 text-green-500 text-2xl"></FaDollarSign>
                            <h1 className=" xl:text-2xl sm:mt-3">Quel montant voulez vous allouez à votre projet ? <span className="text-red-500 text-xl">*</span></h1>
                        </div><br />
                        <input required className="w-full rounded mt-2 sm:h-16 sm:mb-10 border-blue-400 mb-5 focus:outline-none focus:ring-0" type="number" name="" id="" />
                        <button onClick={ () => setShowStep('step2') } className="bg-blue-700 text-white rounded-md ml-auto px-5 py-2" type="button">Précédent</button>
                        <button onClick={ () => setShowStep('step4') } className="bg-blue-700 text-white rounded-md ml-8 px-8 py-2" type="button">Suivant</button>

                    </div>
                ) }

                {/* step 4 */ }
                { showStep == "step4" && (
                    <div className=" p-4">
                        <h1 className="font-semibold text-xl sm:text-xl sm:my-10 text-gray-600">Choisissez votre chef de projet</h1>
                        <TousLesChefs></TousLesChefs>
                        <div className="text-start ml-16">
                            <button onClick={ () => setShowStep('step3') } className="bg-blue-700 text-white ml-auto my-10 text-end rounded px-5 py-2" type="button">Précédent</button>
                            <button type="submit" className="bg-blue-700 ml-8 text-white rounded px-8 py-2">Suivant</button>
                        </div>
                    </div>
                ) }
            </form>
        </div>
    )
}