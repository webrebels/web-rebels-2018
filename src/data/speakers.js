import somethingUrl from "../graphics/mathallen-small.jpg";

export default [
  {
    name: "Mr Bob",
    bio: "something quite detailed etc",
    talkTitle: "Something really interesting",
    talkDescription: "",
    photoUrl: somethingUrl
  }
].map(speaker => {
  speaker.pageUrl = `/speaker/${speaker.name
    .split(" ")
    .join("-")
    .toLowerCase()}`;
  return speaker;
});
