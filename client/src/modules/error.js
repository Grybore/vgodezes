const error = (state = { error: false }, action) => {
  switch (action.type) {
    case 'GET_AVAILABLE_KEYS_ERROR':
      return {
        error: true,
        message:
          'Kad galėtumėte naudoti vCase.gg, jūs turite prisijungti <a href="//trade.opskins.com">trade.opskins.com</a> su savo Steam ID. Tada prisijungti prie vCase.gg su tuo pačiu Steam ID',
      };
    case 'GET_CASES_ERROR':
      return {
        error: true,
        message:
          'Mes negalime gauti dėžių sąrašo. Prašome atnaujinti puslapį ir pabandyti vėl.',
      };
    case 'IŠEITI':
      return { error: false };
    default:
      return state;
  }
};

export default error;
