export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Y4F8yIa9UH9SgSc4d9gXmqJL1YaMb9Z7&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}
