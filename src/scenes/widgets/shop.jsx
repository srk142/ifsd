import React, { useState } from 'react';

function ShoppingComplexWidget() {
  const [shoppingComplexes, setShoppingComplexes] = useState([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCreate = () => {
    const newShoppingComplex = {
      id: Date.now(),
      name,
      location
    };

    setShoppingComplexes([...shoppingComplexes, newShoppingComplex]);
    setName('');
    setLocation('');
  };

  const handleDelete = (id) => {
    const updatedShoppingComplexes = shoppingComplexes.filter(complex => complex.id !== id);
    setShoppingComplexes(updatedShoppingComplexes);
  };

  const handleUpdate = (id, newName, newLocation) => {
    const updatedShoppingComplexes = shoppingComplexes.map(complex => {
      if (complex.id === id) {
        return {
          ...complex,
          name: newName,
          location: newLocation
        };
      }
      return complex;
    });

    setShoppingComplexes(updatedShoppingComplexes);
  };

  return (
    <div className="widget-container">
      <h3>Shopping Complex Management</h3>

      <div className="input-field">
        <label htmlFor="nameInput">Name:</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="input-field">
        <label htmlFor="locationInput">Location:</label>
        <input
          type="text"
          id="locationInput"
          value={location}
          onChange={handleLocationChange}
        />
      </div>

      <button onClick={handleCreate}>Create</button>

      <h4>Shopping Complexes:</h4>
      <ul>
        {shoppingComplexes.map(complex => (
          <li key={complex.id}>
            {complex.name} - {complex.location}
            <button onClick={() => handleDelete(complex.id)}>Delete</button>
            <button onClick={() => handleUpdate(complex.id, 'New Name', 'New Location')}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingComplexWidget;