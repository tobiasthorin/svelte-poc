import { writable } from "svelte/store";

export const user = writable({
  name: "Joanna Dark",
  profilePictureURL:
    "https://minimaltoolkit.com/images/randomdata/female/9.jpg",
});
