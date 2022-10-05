<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./Home.svelte";
  import Header from "./components/Header.svelte";
  import TableView from "./TableView.svelte";

  export let url = "";
</script>

<Router {url}>
  <Header />
  <main class="p-4">
    <Route path="/"><Home /></Route>
    <Route path="/table"><TableView /></Route>
  </main>
</Router>
