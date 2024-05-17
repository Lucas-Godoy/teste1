import React, { useState, useEffect } from 'react';

function Feed({ groups, currentUser, handleDeleteGroup, handleRemoveMember }) {
  const [searchGenre, setSearchGenre] = useState('');
  const [filteredGroups, setFilteredGroups] = useState(groups);

  useEffect(() => {
    // Filtra os grupos com base no gênero e atualiza filteredGroups
    if (searchGenre === '') {
      setFilteredGroups(groups);
    } else {
      const filtered = groups.filter(group => group.genre.toLowerCase().includes(searchGenre.toLowerCase()));
      setFilteredGroups(filtered);
    }
  }, [searchGenre, groups]);

  const handleSearchGenre = (event) => {
    setSearchGenre(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar por Gênero"
        value={searchGenre}
        onChange={handleSearchGenre}
      />
      {filteredGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <h3>{group.name}</h3>
          <p>{group.description}</p>
          <p>Gênero: {group.genre}</p>
          <h4>Membros:</h4>
          <ul>
            {group.members.map((member, memberIndex) => (
              <li key={memberIndex}>
                {member}
                <button onClick={() => handleRemoveMember(groupIndex, memberIndex)}>Remover</button>
              </li>
            ))}
          </ul>
          {/* Verifique se currentUser é o criador do grupo antes de exibir o botão de exclusão */}
          {currentUser === group.creator && (
            <button onClick={() => handleDeleteGroup(groupIndex)}>Excluir</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Feed;