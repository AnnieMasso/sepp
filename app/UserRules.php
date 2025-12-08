<?php

namespace App;

enum UserRules: string
{
    //
    case Admin = 'admin';
    case Chef = 'chef de projet';
    case Client = 'client';
    case Membre = 'membre';

    public static function labels(): array
    {
        return [
            self::Admin->value => 'admin',
            self::Chef->value => 'chef de projet',
            self::Client->value => 'client',
            self::Membre->value => 'membre',
        ];
    }

    public static function array(): array
    {
        return array_map(fn(self $role) => [
            'value' => $role->value,
            'label' => ucfirst($role->name), // Pour afficher "Admin", "User", "Editor"
        ], self::cases());
    }
}
