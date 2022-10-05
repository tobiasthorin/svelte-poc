<script lang="ts">
  export let className: string | undefined = undefined;
</script>

<td class={`p-4 text-gray-700 ${className}`}><slot /></td>
