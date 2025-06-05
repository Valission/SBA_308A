export async function getCharacters(name) {
  const url = `https://www.amiiboapi.com/api/amiibo/?name=${name}&showusage`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.amiibo; // return full character data
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
