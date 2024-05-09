export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '34.654293',
    bl_lng: '25.514642',
    tr_lat: '42.793449',
    tr_lng: '43.185981',
    limit: '300',
  },
  headers: {
    'X-RapidAPI-Key': '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
  },
};

export const headers = {
  'x-rapidapi-key': '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
  'x-rapidapi-host': 'flight-radar1.p.rapidapi.com',
  'Content-Type': 'application/json',
};
