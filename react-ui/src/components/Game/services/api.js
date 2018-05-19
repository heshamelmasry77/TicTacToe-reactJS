import axios from 'axios';


const submitGameDetails = (gameData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };
  return axios.post(`https://tictacteo-hesh.herokuapp.com/api/game`,
      gameData, config).then(response => response.data).catch(e => {
    this.errors.push(e);
  });
};

export {submitGameDetails};

