import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card" className={ styles.planet }>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name" className={ styles.planetname }>
          {' '}
          {planetName}
          {' '}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCard;
