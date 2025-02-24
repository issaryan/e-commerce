import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic
    console.log('Searching for:', query);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <Input
        type="search"
        placeholder="Rechercher un produit..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-64"
      />
      <Button type="submit">Rechercher</Button>
    </form>
  );
};
