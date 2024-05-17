import React, { useState } from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import GroupForm from './components/GroupForm';

function App() {
  const [groups, setGroups] = useState([]);

  const handleDeleteGroup = (index) => {
    const updatedGroups = [...groups];
    updatedGroups.splice(index, 1);
    setGroups(updatedGroups);
  };

  const addGroup = (newGroup) => {
    setGroups([...groups, newGroup]);
  };

  const handleRemoveMember = (groupIndex, memberIndex) => {
    const updatedGroups = [...groups];
    updatedGroups[groupIndex].members.splice(memberIndex, 1);
    setGroups(updatedGroups);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1>Meu Feed</h1>
        <GroupForm addGroup={addGroup} />
        <Feed 
          groups={groups} 
          handleDeleteGroup={handleDeleteGroup} 
          handleRemoveMember={handleRemoveMember} 
        />
      </div>
    </>
  );
}

export default App;