<script lang="ts">
  import { fade } from "svelte/transition";
  import Table from "./components/Table.svelte";
  import TableCell from "./components/TableCell.svelte";
  import TableHeading from "./components/TableHeading.svelte";
  import TableRow from "./components/TableRow.svelte";
  import Button from "./components/Button.svelte";

  function addData() {
    tableData = [
      ...tableData,
      { name: "Newname Johnson", age: 38, country: "New Guinea" },
    ];
  }

  let tableData = [
    {
      name: "Förnamn Efternamn",
      age: 33,
      country: "Sweden",
    },
    {
      name: "Førnaehmrehreh Efthernaermeh",
      age: 12,
      country: "Denmark",
    },
    {
      name: "Firstname Lastname",
      age: 98,
      country: "England",
    },
  ];

  $: totalRows = tableData.length;
</script>

<div in:fade={{ duration: 500 }}>
  <Table>
    <svelte:fragment slot="head">
      <TableHeading>Name</TableHeading>
      <TableHeading class="text-end">Age</TableHeading>
      <TableHeading class="text-end">Country</TableHeading>
    </svelte:fragment>
    <svelte:fragment slot="body">
      {#each tableData as entry}
        <TableRow>
          <TableCell>{entry.name}</TableCell>
          <TableCell className="text-end font-mono">{entry.age}</TableCell>
          <TableCell className="text-end">{entry.country}</TableCell>
        </TableRow>
      {/each}
    </svelte:fragment>
  </Table>
  <div class="flex justify-between">
    <Button on:click={addData}>Add row</Button>
    <span>Total rows: {totalRows}</span>
  </div>
</div>
