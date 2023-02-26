export async function loadPosts() {
  const res = await fetch("https://randomuser.me/api/?results=50");
  const data = await res.json();

  return data;
}
