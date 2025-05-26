<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index';
	import Plus from '@lucide/svelte/icons/plus';
	import Minus from '@lucide/svelte/icons/minus';
	import * as Select from '$lib/components/ui/select/index.js';
	import TableRow from '$lib/components/ui/table/table-row.svelte';
	import rateData from '$lib/components/rates';
	import printJS from 'print-js';

	const engineers = [
		'Mr. Sunny Patel',
		'Mr. Vinod Lande',
		'Mr. Ravindra Patil',
		'Mr. Tushar Patel',
		`Mr. Darshan Shah`,
		'Mr. Harsh Mankad'
	];

	interface TableRow {
		id: number;
		code: number;
		description: string;
		unit: string;
		qty: number;
		rate: number;
		total: number;
	}

	let tableRows = $state<TableRow[]>([
		{ id: 0, code: 0, description: '', unit: '', qty: 0, rate: 0, total: 0 },
		{ id: 1, code: 0, description: '', unit: '', qty: 0, rate: 0, total: 0 },
		{ id: 2, code: 0, description: '', unit: '', qty: 0, rate: 0, total: 0 },
		{ id: 3, code: 0, description: '', unit: '', qty: 0, rate: 0, total: 0 },
		{ id: 4, code: 0, description: '', unit: '', qty: 0, rate: 0, total: 0 },
		{ id: 5, code: 0, description: '', unit: '', qty: 0, rate: 0, total: 0 }
	]);

	let summary_number = $state(0);
	let sheet_numbers = $state('');
	let value = $state('');
	let sum = $derived.by(() => {
		let curr_sum = 0;
		tableRows.forEach((row) => {
			curr_sum += row.total;
		});
		return curr_sum;
	});

	const addRow = () => {
		const newId = tableRows.length + 1;
		const newRow: TableRow = {
			id: newId,
			code: 0,
			description: '',
			unit: '',
			qty: 0,
			rate: 0,
			total: 0
		};
		tableRows = [...tableRows, newRow];
	};

	const deleteRow = () => {
		if (tableRows.length > 1) {
			tableRows = tableRows.slice(0, -1);
		}
	};

	const updateRow = (id: number, field: keyof TableRow, value: any) => {
		tableRows = tableRows.map((row) => {
			if (row.id == id) {
				const updateRow = { ...row, [field]: value };
				if (field == 'qty') {
					updateRow.total = updateRow.qty * updateRow.rate;
				}
				if (field == 'code') {
					updateRow.description = rateData.find((rate) => rate.code == value)?.description;
					updateRow.rate = rateData.find((rate) => rate.code == value)?.rate;
					updateRow.unit = rateData.find((rate) => rate.code == value)?.unit;
				}
				return updateRow;
			}
			return row;
		});
	};

	const triggerContent = $derived(engineers.find((f) => f === value) ?? 'Select Engineer');

	function printTable() {
		if (summary_number == 0 || sheet_numbers == '' || value == '') {
			window.alert('enter all the data');
			return;
		}
		printJS({
			printable: 'table', // Your table's ID
			type: 'html',
			targetStyles: ['*'] // Include all styles
		});
	}
</script>

<div class="p-6">
	<h1 class="font-santoshi-bold border-b-1 select-none border-[#dedede] pb-4 text-4xl">
		Archroma Measurement Summary
	</h1>
	<div class="flex h-full items-start justify-center gap-[10rem]">
		<div class=" border-r-1 mt-5 flex w-[18%] flex-col gap-5 pr-5 pt-5">
			<h1 class="font-santoshi-bold text-2xl">Details</h1>
			<div>
				<Label for="summaryNumber" class="text-lg">Summary Number</Label>
				<Input
					type="number"
					id="summaryNumber"
					placeholder="Summary Number"
					class="w-full"
					bind:value={summary_number}
				/>
			</div>
			<div>
				<Label for="sheetNumber" class="text-lg">Sheet Numbers</Label>
				<Input
					type="text"
					id="summaryNumber"
					placeholder="Sheet Numbers"
					class="w-full"
					bind:value={sheet_numbers}
				/>
			</div>
			<div>
				<Label for="sheetNumber" class="text-lg">Engineer Name</Label>
				<Select.Root type="single" bind:value>
					<Select.Trigger class="w-full ">{triggerContent}</Select.Trigger>
					<Select.Content class=" font-santoshi text-md subpixel-antialiased">
						{#each engineers as engineer}
							<Select.Item value={engineer} label={engineer}>{engineer}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
			<div class="">
				<Label for="Rows" class="text-lg">Rows</Label>
				<div class="flex items-center justify-between gap-5">
					<button
						class="border-1 flex w-full cursor-pointer items-center justify-center rounded-lg p-5 transition-all duration-300 hover:scale-95 hover:bg-[#eee]"
						onclick={addRow}><Plus /></button
					>
					<button
						class="border-1 flex w-full cursor-pointer items-center justify-center rounded-lg p-5 transition-all duration-300 hover:scale-95 hover:bg-[#eee]"
						onclick={deleteRow}><Minus /></button
					>
				</div>
				<div class="pt-2">
					<Label for="Print" class="text-lg">Print Sheet</Label>
					<button
						class="border-1 flex w-full cursor-pointer items-center justify-center rounded-lg p-5 transition-all duration-300 hover:scale-95 hover:bg-[#eee]"
						onclick={printTable}
					>
						Print
					</button>
				</div>
			</div>
		</div>
		<div class="  mt-6 w-[60%]" id="table">
			<div class="border-t-1 border-r-1 border-l-1 border-black">
				<div class="flex h-[7rem] items-center justify-center">
					<h1 class="font-santoshi-bold text-[3.2rem]">J.R.V ENGINEERING WORKS</h1>
				</div>
				<div class="border-t-1 flex h-8 items-center justify-center border-black text-center">
					26, Pratham Upvan Society, Maharaja Chowk, Sun Pharma Rd.
				</div>
				<div class="border-t-1 flex items-center justify-between border-black">
					<div class="border-r-1 flex w-[65%] items-center justify-center border-black">
						MEASUREMENT SUMMARY - NO. {summary_number}
					</div>
					<div class="flex w-[48%] items-center justify-between">
						<div>P.O. NO.:</div>
						<div>
							Date:
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</div>
					</div>
				</div>
				<div class="border-t-1 flex justify-between border-black">
					<div class="border-r-1 flex w-[65%] items-center justify-center border-black">
						MEASUREMENT SHEET NO. {sheet_numbers}
					</div>
					<div class="flex w-[48%] items-center justify-center">{value}</div>
				</div>
			</div>
			<Table.Root>
				<Table.Header class="text-lg">
					<Table.Row class="">
						<Table.Head class="font-santoshi-bold border border-black">CODE</Table.Head>
						<Table.Head class="font-santoshi-bold w-[70%] border border-black"
							>DESCRIPTION</Table.Head
						>
						<Table.Head class="font-santoshi-bold w-[10%] border border-black text-center"
							>UNIT</Table.Head
						>
						<Table.Head class="font-santoshi-bold w-[12%] border border-black text-center"
							>QTY</Table.Head
						>
						<Table.Head class="font-santoshi-bold w-[10%] border border-black text-center"
							>RATE</Table.Head
						>
						<Table.Head class="font-santoshi-bold w-[10%] border border-black text-right"
							>TOTAL</Table.Head
						>
					</Table.Row>
					<Table.Row>
						<Table.Head class="font-santoshi-bold border border-black"></Table.Head>
						<Table.Head class="font-santoshi-bold w-[70%] border border-black"
							><Input class="font-santoshi h-12 p-0 text-[1.11rem]" /></Table.Head
						>
						<Table.Head class="font-santoshi-bold w-[10%] border border-black text-center"
						></Table.Head>
						<Table.Head class="font-santoshi-bold w-[10%] border border-black text-center"
						></Table.Head>
						<Table.Head class="font-santoshi-bold w-[10%] border border-black text-center"
						></Table.Head>
						<Table.Head class="font-santoshi-bold w-[10%] border border-black text-right"
						></Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body class="text-lg">
					{#each tableRows as tableRow}
						<Table.Row>
							<Table.Cell class="border border-black text-center "
								><Input
									class="font-santoshi p-0 text-[1.1rem] "
									oninput={(e) =>
										updateRow(tableRow.id, 'code', (event.target as HTMLInputElement).value)}
								/></Table.Cell
							>
							<Table.Cell class="border border-black font-medium">{tableRow.description}</Table.Cell
							>

							<Table.Cell class="border border-black text-left ">{tableRow.unit}</Table.Cell>
							<Table.Cell class="border border-black text-right"
								><Input
									class="font-santoshi p-0 text-[1.1rem]"
									oninput={(e) =>
										updateRow(tableRow.id, 'qty', (event.target as HTMLInputElement).value)}
								/></Table.Cell
							>
							<Table.Cell class="border border-black text-right">{tableRow.rate}</Table.Cell>
							<Table.Cell class="border border-black text-right">{tableRow.total}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
				<Table.Footer class="text-lg">
					<Table.Row>
						<Table.Cell class="border border-black text-center "></Table.Cell>
						<Table.Cell class="border border-black font-medium"></Table.Cell>

						<Table.Cell class="border border-black text-left "></Table.Cell>
						<Table.Cell class="border border-black text-right"></Table.Cell>
						<Table.Cell class="border border-black text-center">TOTAL</Table.Cell>
						<Table.Cell class="border border-black text-right">{sum}</Table.Cell>
					</Table.Row>
				</Table.Footer>
			</Table.Root>
		</div>
	</div>
</div>
