export const getNews = async () => {
  const resp = await fetch(
    "https://newsapi.org/v2/everything?q=crypto&apiKey=155c278041194359a7bfbd479d1433c2"
  );
  const { articles } = await resp.json();
  return articles;
};
