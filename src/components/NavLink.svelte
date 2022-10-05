<script>
  import { Link } from "svelte-routing";

  export let to = "";
</script>

<Link {to} class="text-green-700 hover:text-green-600 hover:underline">
  <slot />
</Link>
