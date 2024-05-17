import React, { useState } from 'react';

function GroupForm({ addGroup }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;
    addGroup({ name, description, members, genre });
    setName('');
    setDescription('');
    setMembers([]);
    setGenre('');
  };

  const handleAddMember = () => {
    if (newMember.trim() !== '') {
      setMembers([...members, newMember]);
      setNewMember('');
    }
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Grupo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição do Grupo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Adicionar Membro"
        value={newMember}
        onChange={(e) => setNewMember(e.target.value)}
      />
      <button type="button" onClick={handleAddMember}>Adicionar</button>

      {members.map((member, index) => (
        <div key={index}>
          <p>{member}</p>
          <button type="button" onClick={() => handleRemoveMember(index)}>Remover</button>
        </div>
      ))}

      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="">Selecione o Gênero</option>
        <option value="D&D">D&D</option>
        <option value="Tormenta">Tormenta</option>
        <option value="Vampire">Vampire</option>
        {/* Adição de mais opções caso necessario */}
      </select>

      <button type="submit">Criar Grupo</button>
    </form>
  );
}

export default GroupForm;