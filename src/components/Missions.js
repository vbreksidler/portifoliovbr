import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import styles from './styles.module.scss';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className={ styles.mission }>
          {missions.map((mission) => (<MissionCard
            key={ mission.name }
            name={ `Nome: ${mission.name}` }
            year={ `Ano: ${mission.year}` }
            country={ `País: ${mission.country}` }
            destination={ `Destino: ${mission.destination}` }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;
