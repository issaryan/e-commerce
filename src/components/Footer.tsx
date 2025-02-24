import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">E-Shop</h3>
            <p className="text-sm text-muted-foreground">
              Votre destination en ligne pour les meilleurs produits.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">À propos</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Conditions d'utilisation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Catégories</h4>
            <ul className="space-y-2">
              <li><Link to="/category/vetements" className="text-sm text-muted-foreground hover:text-foreground">Vêtements</Link></li>
              <li><Link to="/category/accessoires" className="text-sm text-muted-foreground hover:text-foreground">Accessoires</Link></li>
              <li><Link to="/category/electronique" className="text-sm text-muted-foreground hover:text-foreground">Électronique</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="p-2 border rounded text-sm"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm">
                S'abonner
              </button>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-4 text-center text-sm text-muted-foreground">
          © 2024 E-Shop. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};
