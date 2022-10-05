<script lang="ts">
  import NavLink from "./components/NavLink.svelte";
  import Card from "./components/Card.svelte";
  import { fade } from "svelte/transition";
  import { user } from "./store/user";
  import Button from "./components/Button.svelte";
  import Counter from "./Counter.svelte";

  function changeUser() {
    user.set({
      name: "Daniel Carrington",
      profilePictureURL:
        "https://minimaltoolkit.com/images/randomdata/male/91.jpg",
    });
  }
</script>

<div class="grid grid-cols-3 gap-4 bg-gray-50" in:fade={{ duration: 500 }}>
  <Card><Button on:click={changeUser}>Change user</Button></Card>
  <Card><Counter /></Card>
  <Card>
    <NavLink to="table">Click here to go to the table view</NavLink>
  </Card>
  <div class="col-span-2">
    <Card>Card 4</Card>
  </div>
  <Card>Card 5</Card>
</div>
