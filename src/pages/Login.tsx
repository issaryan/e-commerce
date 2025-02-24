import React from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Connexion</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" type="password" placeholder="Mot de passe" required />
          </div>
          <Button type="submit" className="w-full">
            Se connecter
          </Button>
        </form>
        <div className="text-center text-sm">
          Pas encore de compte ?{' '}
          <a href="/register" className="text-primary hover:underline">
            Créer un compte
          </a>
        </div>
      </div>
    </div>
  );
};
