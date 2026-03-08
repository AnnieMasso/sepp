import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import Dashboard from "../Dashboard";
export default function TousLesProjets(){
    return(
        <AuthenticatedLayout>
            <div>
                tous les projets
            </div>
        </AuthenticatedLayout>
    )
}