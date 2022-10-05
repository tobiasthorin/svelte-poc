<script lang="ts">
  import Button from "./components/Button.svelte";

  let count = 0;
</script>

<p>{count}</p>
<Button on:click={() => count++}>+</Button>
