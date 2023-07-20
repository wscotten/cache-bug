export default async function Home() {
  const thing = await fetch(`http://localhost:3000/api`, {
    next: { tags: ['poe-ninjas'], revalidate: 4000 },
  }).then((res) => res.json());

  return (
    <div>{JSON.stringify(thing)}</div>
  );
}
