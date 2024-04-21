export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.480658",
    bl_lng: "25.73472",
    tr_lat: "42.527912",
    tr_lng: "44.865926",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "142656263fmshc864e7cd7f94a1ep1eb00fjsn049788f51e8b",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOptions = {
  headers: {
    "X-RapidAPI-Key": "142656263fmshc864e7cd7f94a1ep1eb00fjsn049788f51e8b",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
