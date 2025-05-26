<script>
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	const clients = [
		{
			name: 'Archroma',
			measurement: '/archroma/measurement',
			invoice: '/archroma/invoice'
		},
		{
			name: 'Shiva',
			measurement: '/shiva/measurement',
			invoice: '/shiva/invoice'
		}
	];
</script>

<div class="pt-6 ">
	<h1 class="font-santoshi-bold text-3xl border-[#dedede] border-b-1 pb-4">Clients</h1>
	<div class="flex gap-4 pt-5 pb-10">
		{#each clients as client}
			<Dialog.Root>
				<Dialog.Trigger
					class=" ease cursor-pointer rounded-lg border-2 border-[#eee] p-2 pl-5 pr-5 transition-all duration-300 hover:bg-[#eee]"
					>{client.name}</Dialog.Trigger
				>
				<Dialog.Content class="font-santoshi">
					<Dialog.Header>
						<Dialog.Title class="text-2xl">{client.name}</Dialog.Title>
						<Dialog.Description>Create measurement or invoice</Dialog.Description>
					</Dialog.Header>
					<div class="flex justify-between gap-5">
						<a
							href={client.measurement}
							class="border-1 ease flex h-[8rem] w-full items-center justify-center rounded-lg border-[#eee] text-lg transition-all duration-300 hover:bg-[#fafafa]"
							>Measurement</a
						>
						<a
							href={client.invoice}
							class="border-1 ease flex h-[8rem] w-full items-center justify-center rounded-lg border-[#eee] text-lg transition-all duration-300 hover:bg-[#fafafa]"
							>Invoice</a
						>
					</div>
				</Dialog.Content>
			</Dialog.Root>
		{/each}
	</div>
</div>
