const genericPodcasts = [...Array(20)].map((el, i) => {
  return {
    id: i,
    name: "Generic Podcast",
    image: { height: 640, url: "https://i.scdn.co/image/genericPodcastImage", width: 640 },
    description: "this is a generic podcast description",
    publisher: "Generic Studios",
    uri: "spotify:show:g3n3r1c"
  }
});

const genericEpisodes = [...Array(20)].map((el, i) => {
  return {
    id: i,
    name: `Generic Episode ${i + 1}`,
    image: { height: 640, url: "https://i.scdn.co/image/genericPodcastImage", width: 640 },
    description: "this is a generic episode description",
    release_date: "2020-01-01",
    audio_preview_url: "https://p.scdn.co/mp3-preview/g3n3r1c",
    uri: "spotify:show:g3n3r1c"
  }
});

const mockResponses = {
  getGenericPodcasts: () => genericPodcasts,
  getGenericEpisodes: () => genericEpisodes,
}

export default mockResponses;
