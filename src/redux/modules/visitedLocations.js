import { coordinatesToString } from "helpers";

const VISIT_LOCATION = "VISIT_LOCATION";

export function visitLocation(location) {
  const coordinates = coordinatesToString({ lat: location.lat, lng: location.lng });
  return {
    type: VISIT_LOCATION,
    payload: {
      coordinates,
      location: { ...location },
      visitedAt: Date.now(),
    },
  };
}

const initialState = {
  "45.815,15.9819": {
    id: "45.815,15.9819",
    visitedAt: 1531919115731,
    label: "Zagreb, Croatia",
    lat: 45.815,
    lng: 15.9819,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case VISIT_LOCATION:
      return {
        ...state,
        [action.payload.coordinates]: {
          id: `${action.payload.coordinates}`,
          visitedAt: action.payload.visitedAt,
          ...action.payload.location,
        },
      };
    default:
      return state;
  }
}
