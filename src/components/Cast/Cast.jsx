import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'services/request-api';
import avatarAct from '../../images/avatar.jpg';
import { ListActors, Actor, AvatarActor, ActorName } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const showActors = async () => {
      try {
        const response = await getActors(movieId);
        const actorsData = response.data.cast;
        if (actorsData.length !== 0) {
          setActors(actorsData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    showActors();
  }, [movieId]);

  const base_url_image = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div>
    <ListActors>
      {actors.length > 0 ?
        actors.map(({profile_path, name, character, id}) => (
          <Actor key={id}>
            <AvatarActor src={profile_path ? base_url_image + profile_path : avatarAct} alt={name} />
            <ActorName>{name || 'unknown'}</ActorName>
            <p> <strong>Character:</strong> <em>{character || 'unknown'}</em></p>
          </Actor>
        )) : <p><strong>No information about actors</strong></p>}
    </ListActors></div>
  );
};

export default Cast;
