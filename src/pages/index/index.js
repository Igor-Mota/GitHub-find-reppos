import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Box } from './styles';
import Header from '../../components/Header';
import Paper from '../../components/Papper';
import { useUserRepos } from '../../contexts/FindReposContext';

function Home() {
  const { userRepos } = useUserRepos();

  const [repos, setRepos] = useState([]);
  // const [userRepos, setUserRepos] = useState('twixtaxe')
  useEffect(() => {
    axios.get(`https://api.github.com/users/${userRepos}/repos`).then((response) => {
      setRepos(response.data);
    });
  }, [userRepos]);

  return (
    <Container>
      <Header />
      <Box>
        {repos.map((repo) => <Paper repo={repo} key={repo.id} />)}
      </Box>
    </Container>
  );
}
export default Home;
