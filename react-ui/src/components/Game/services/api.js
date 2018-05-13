import axios from 'axios';


const submitGameDetails = (gameData) => {
  console.log('gameData', gameData);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };
  return axios.post(`http://localhost:7000/api/game`,
      gameData, config).then(response => {
    // JSON responses are automatically parsed.
  }).catch(e => {
    // this.errors.push(e);
    console.log('error');
  });
};

export {submitGameDetails};

