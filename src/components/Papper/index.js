import React from 'react';

import {
  Card, Title, Describe, Image,
} from './styles';

function Paper({ repo }) {
  return (
    <Card>
      <div style={{ width: '80%', marginLeft: 10 }}>
        <Title href={`${repo.clone_url}`} target="_blank">{repo.name}</Title>
        <Describe>
          {repo.description}
        </Describe>
      </div>
      <div style={{ width: '20%', marginRight: 10 }}>
        <Image src={`${repo.owner.avatar_url}`} alt="imagem" />
      </div>
    </Card>
  );
}
export default Paper;
