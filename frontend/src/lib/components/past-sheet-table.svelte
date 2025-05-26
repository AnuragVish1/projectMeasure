<script lang="ts">
  import * as Table from "$lib/components/ui/table/index.js";

</script>

<div class="pt-6">
<h1 class="text-3xl font-santoshi-bold border-[#dedede] border-b-1 pb-4">Recent Files</h1>
<div class="rounded-lg  border-1 mt-6">
    <Table.Root>
  <Table.Header class="text-lg">
    <Table.Row>
      <Table.Head class="w-[70%]">Name</Table.Head>
      <Table.Head>Opened</Table.Head>

      <Table.Head class="text-right">Type</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body class="text-lg">
    <Table.Row>
      <Table.Cell class="font-medium">Shiva measurement 14</Table.Cell>
 
      <Table.Cell class="text-left">June 10</Table.Cell>
      <Table.Cell class="text-right">Measurement</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
</div>
</div>