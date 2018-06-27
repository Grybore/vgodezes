<<<<<<< HEAD
/*
* Unbox States:
*
* NOT_STARTED: Atidarymas nevyksta
* OFFER_PENDING: Atidarymas prasidėjo ir laukiame kol naudotojas priims siūlymą.
* OFFER_FAILED: Siūlymas dėl tam tikrų priežasčių nepavyko (procesas negali tęstis toliau)
* OPENING_PENDING: Siūlymas buvo priimtas ir mes laukiame kol dėžės bus atidarytos.
* OPENING_FAILED: Atidarymas nepavyko (procesas negali tęstis toliau)
* OPENING_COMPLETED: Atidarymas pavyko sėkmingai
* OPENING_PARTIAL_FAILURE: Kai kurios dėžės buvo atidarytos, kitų atidaryti nepavyko.
*/
const INITIAL_STATE = {
  state: 'NOT_STARTED',
  items: [],
  totalExpectedItems: 0,
};

const unbox = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UNBOX':
      return { state: 'NOT_STARTED', caseId: action.caseId };
    case 'UNBOX_RECEIVED':
      return Object.assign({}, state, {
        state: 'OFFER_PENDING',
        tradeId: action.tradeId,
        tradeOfferUrl: action.tradeOfferUrl,
      });
    case 'UNBOX_ERROR':
      return Object.assign({}, state, { state: 'OFFER_FAILED' });
    case 'GET_UNBOX_STATUS_RECEIVED':
      return Object.assign({}, state, {
        state: getNewState(action.offerState, action.openingState),
        items: action.items,
        totalExpectedItems: action.totalExpectedItems,
      });
    case 'END_UNBOXING':
    case 'EXIT':
    case 'AUTH_STATUS':
      return INITIAL_STATE;
    default:
      return state;
  }
};

function getNewState(offerState, openingState) {
  if (offerState === 0) {
    return 'OFFER_PENDING';
  } else if (offerState === -1) {
    return 'OFFER_FAILED';
  } else if (openingState === -1) {
    return 'OPENING_FAILED';
  } else if (openingState === 1) {
    return 'OPENING_COMPLETED';
  } else if (openingState === -2) {
    return 'OPENING_PARTIAL_FAILURE';
  } else {
    return 'OPENING_PENDING';
  }
}

export default unbox;
=======
/*
* Unbox States:
*
* NOT_STARTED: Atidarymas nevyksta
* OFFER_PENDING: Atidarymas prasidėjo ir laukiame kol naudotojas priims siūlymą.
* OFFER_FAILED: Siūlymas dėl tam tikrų priežasčių nepavyko (procesas negali tęstis toliau)
* OPENING_PENDING: Siūlymas buvo priimtas ir mes laukiame kol dėžės bus atidarytos.
* OPENING_FAILED: Atidarymas nepavyko (procesas negali tęstis toliau)
* OPENING_COMPLETED: Atidarymas pavyko sėkmingai
* OPENING_PARTIAL_FAILURE: Kai kurios dėžės buvo atidarytos, kitų atidaryti nepavyko.
*/
const INITIAL_STATE = {
  state: 'NOT_STARTED',
  items: [],
  totalExpectedItems: 0,
};

const unbox = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UNBOX':
      return { state: 'NOT_STARTED', caseId: action.caseId };
    case 'UNBOX_RECEIVED':
      return Object.assign({}, state, {
        state: 'OFFER_PENDING',
        tradeId: action.tradeId,
        tradeOfferUrl: action.tradeOfferUrl,
      });
    case 'UNBOX_ERROR':
      return Object.assign({}, state, { state: 'OFFER_FAILED' });
    case 'GET_UNBOX_STATUS_RECEIVED':
      return Object.assign({}, state, {
        state: getNewState(action.offerState, action.openingState),
        items: action.items,
        totalExpectedItems: action.totalExpectedItems,
      });
    case 'END_UNBOXING':
    case 'EXIT':
    case 'AUTH_STATUS':
      return INITIAL_STATE;
    default:
      return state;
  }
};

function getNewState(offerState, openingState) {
  if (offerState === 0) {
    return 'OFFER_PENDING';
  } else if (offerState === -1) {
    return 'OFFER_FAILED';
  } else if (openingState === -1) {
    return 'OPENING_FAILED';
  } else if (openingState === 1) {
    return 'OPENING_COMPLETED';
  } else if (openingState === -2) {
    return 'OPENING_PARTIAL_FAILURE';
  } else {
    return 'OPENING_PENDING';
  }
}

export default unbox;
>>>>>>> 0a276c0d594bd0ccc1910be31f0fc259c6319449
