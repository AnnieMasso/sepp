import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Input } from 'postcss';
import { useState } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        role: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const {roles} = usePage().props;
    const rolesToRender = roles || [];
    const handleRoleChange = (e) => {
        setData('role', e.target.value);
    };
    // const [selectedRule, setSelectedRule] = useState('')

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className='mt-4'>
                    <span className=' text-[#1037c0] font-bold text-3xl ml-32'>Inscription</span>

                    <InputLabel htmlFor="name" className='mt-7' value="Choisissez un type de compte" />

                    <select
                        id="role_select" // Ajoutez un id pour l'InputLabel
                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" // Styles basiques pour un select
                        value={data.role} // Liez la valeur au state
                        onChange={handleRoleChange} // Gérez le changement
                        required
                    >
                        <option value="">Sélectionner un rôle</option> {/* Option par défaut */}
                        {/* Utilisez rolesToRender ici */}
                        {rolesToRender.map(({ value, label }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.role} className="mt-2" />
                    <InputLabel htmlFor="name" value="Nom" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Mot de passe" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirmer le mot de passe"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-[#1037c0] underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Déjà inscrit?
                    </Link>

                    <PrimaryButton className="ms-4 bg-[#1037c0]" disabled={processing}>
                        S'inscrire
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
