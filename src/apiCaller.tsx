const EP1 =
  "https://odrx4hmnq6.execute-api.us-west-2.amazonaws.com/default/interview_api_endpoint_1";
const EP2 =
  "https://odrx4hmnq6.execute-api.us-west-2.amazonaws.com/default/interview_api_endpoint_2";

async function fetchApi(endpoint: string, resourceId: string) {
  const response = await fetch(endpoint + "/?propertyId=" + resourceId);
  const data = await response.json();
  return data;
}

export default async function apiCaller(propertyId: string) {
  if (localStorage.getItem(propertyId)) {
    return JSON.parse(localStorage.getItem(propertyId) || "");
  }

  const response = await Promise.any([
    fetchApi(EP1, propertyId),
    fetchApi(EP2, propertyId),
  ]);

  localStorage.setItem(propertyId, JSON.stringify(response));
  return response;
}
