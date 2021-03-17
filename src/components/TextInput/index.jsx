import React from 'react';
import './style.css'
export const TextInput = ({searchValue, handleChange}) => {
    return (
        <input
        className="seacher-btn"
        onChange={handleChange}
        value={searchValue}
        type="search"
        placeholder="Buscar"
      />


    );
}