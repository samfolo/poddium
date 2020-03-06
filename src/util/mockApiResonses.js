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

const mockResponses = {
  getGenericPodcasts: () => genericPodcasts,
}

export default mockResponses;
