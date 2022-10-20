import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import styles from './styles.module.scss';

class Body extends React.Component {
  render() {
    return (
      <body>
        <div>
          <a href="#" className={styles.menu}> </a>
        </div >
        <div data-testid="missions">
          <Title headline="Missões" />
          <div className={styles.mission}>
            {missions.map((mission) => (<MissionCard
              key={mission.name}
              name={`Nome: ${mission.name}`}
              year={`Ano: ${mission.year}`}
              country={`País: ${mission.country}`}
              destination={`Destino: ${mission.destination}`}
            />))}
          </div>
        </div>
      </body>
    );
  }
}

export default Body;
