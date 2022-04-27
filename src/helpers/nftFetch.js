export const getNFTs = async () => {
  const resp = await fetch(
    `https://api.covalenthq.com/v1/1/nft_market/?quote-currency=USD&format=JSON&page-size=33&key=ckey_5dc47213d44941b4b0674b2de73`
  );
  const { data } = await resp.json();
  return data;
};
