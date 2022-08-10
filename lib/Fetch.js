export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://randomuser.me/api/?results=50");
  const data = await res.json();

  return data;
}
