export {test}
let url =
  "https://www.amiiboapi.com/api/amiibo/?name=mario&showusage";

function urlChoice(name){
    url = `https://www.amiiboapi.com/api/amiibo/?name=${name}&showusage`
}
async function getAmiibo() {
  try {
    const response = await fetch(url);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
let test = 'link'
urlChoice('donkey kong')

// getAmiibo()