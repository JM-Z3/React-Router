
export const getGifs = async(search) => {

    const apiKey = 'Ve1x9kstfCTT0uu7F3aXW468gjBgs0XJ';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(search)}&limit=3`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    

    const gifs = data.map( d1 => {
        return {
            title:d1.title,
            url:d1.images.original.url,
            id:d1.id
        }
    })

    return gifs;


}
