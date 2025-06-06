export async function getCharacters(name) {
  let url = `https://www.amiiboapi.com/api/amiibo/?name=${name}&showusage`;
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data.amiibo; 
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
