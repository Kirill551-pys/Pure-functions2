export function getHealthStatus(character) {
    if (character.health > 50) {
      return 'green';
    } else if (character.health >= 15 && character.health <= 50) {
      return 'yellow';
    } else {
      return 'red';
    }
  }
