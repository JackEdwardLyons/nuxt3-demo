export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  const data = await fetch("https://cat-fact.herokuapp.com/facts");

  const cats = data.json();

  return cats;
});
