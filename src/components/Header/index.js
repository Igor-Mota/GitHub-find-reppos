import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { SHeader, Title, Box } from './styles';

import { useUserRepos } from '../../contexts/FindReposContext';

function Header() {
  const { setUserRepos } = useUserRepos();

  const [user, setUSer] = useState();

  return (
    <SHeader>
      <Box>
        <input type="search" onChange={(e) => { setUSer(e.target.value); }} />

        <button type="button" aria-label="Save"><AiOutlineSearch size="30" onClick={() => { setUserRepos(user); }} /></button>
      </Box>
      <Title>GITHUB REPOS</Title>
    </SHeader>
  );
}

export default Header;
