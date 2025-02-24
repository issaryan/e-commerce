import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../components/ui/use-toast';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Simuler une requête API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: 'Inscription réussie',
        description: 'Vous pouvez maintenant vous connecter',
      });
      navigate('/login');
    } catch (error) {
      toast({
        title: 'Erreur',
        description: "Une erreur s'est produite",
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Inscription</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet</Label>
            <Input 
              id="name" 
              type="text" 
              placeholder="Nom complet" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Mot de passe" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            S'inscrire
          </Button>
        </form>
        <div className="text-center text-sm">
          Déjà un compte ?{' '}
          <a href="/login" className="text-primary hover:underline">
            Se connecter
          </a>
        </div>
      </div>
    </div>
  );
};
