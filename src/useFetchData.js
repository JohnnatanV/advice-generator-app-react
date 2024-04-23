async function fetchData() {
  let num = Math.ceil(Math.random() * 224);

  const url = `https://api.adviceslip.com/advice/${num}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
export default fetchData;
