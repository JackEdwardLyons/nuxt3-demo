export default defineEventHandler(async (event) => {
  const indexQuery = event.context.params.index;

  const data = await fetch("https://cat-fact.herokuapp.com/facts");

  const cats = await data.json();

  const index = Number(indexQuery);

  console.log({ indexQuery });

  if (isNaN(index)) {
    return cats;
  }

  return cats[index];
});
