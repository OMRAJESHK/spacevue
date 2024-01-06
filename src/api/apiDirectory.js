export const baseUrl = "https://www.ag-grid.com/";
export const apiBaseUrl = `${baseUrl}/example-assets`;

export const getUrl = (location) => {
  return location;
};

const apiLocations = {
  GET_MISSIONS: () => getUrl(`${apiBaseUrl}/space-mission-data.json`),
};

export default apiLocations;
