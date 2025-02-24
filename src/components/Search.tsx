import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from './ui/input';
import { Button } from './ui/button';

export const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
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
