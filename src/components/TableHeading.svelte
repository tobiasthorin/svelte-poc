<script lang="ts">
  let className: string | undefined = undefined;

  export { className as class };
</script>

<th class={`p-4 text-start ${className}`}><slot /></th>
