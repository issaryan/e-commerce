import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Navigation } from './Navigation';
import { Search } from './Search';

export const Header = () => {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Link to="/" className="font-bold text-2xl">E-Shop</Link>
            <Navigation />
          </div>
          <div className="flex items-center gap-4">
            <Search />
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link to="/login">Connexion</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Inscription</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
