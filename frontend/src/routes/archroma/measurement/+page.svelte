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
	  import { Toaster, toast } from 'svelte-sonner'

	  import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";


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
		code: number | null;
		description: string;
		unit: string;
		qty: number | null;
		rate: number | null;
		total: number | null;
	}

	let tableRows = $state<TableRow[]>([
		{ id: 0, code: 0, description: '', unit: '', qty: 0, rate: 0, total: 0 },
		{ id: 1, code: 0, description: '', unit: '', qty: 0, rate: 0, total: 0 },
		{ id: 2, code: 0, description: '', unit: '', qty: 0, rate: 0, total: 0 },
		{ id: 3, code: 0, description: '', unit: '', qty: 0, rate: 0, total: 0 },
		{ id: 4, code: 0, description: '', unit: '', qty: 0, rate: 0, total: 0 },
		{ id: 5, code: 0, description: '', unit: '', qty: 0, rate: 0, total: 0 }
	]);

	let error = $state("")
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
			rate: null,
			total:  null
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
		if (summary_number == 0 || summary_number == null) {
			toast.warning('Please enter summary number')

			error = 'Please fill the details'
			return;
		}
		else if ( sheet_numbers == '')
		{
			toast.warning('Please enter the sheet numbers')
			return;
		}
		else if (value == '')
		{
			toast.warning('Please select engineer name')
			return;
		}
		window.print();
	}

	const sortData = () => {
		console.log(tableRows)
		tableRows.sort((a, b) => a.code - b.code);
		console.log(tableRows)
	}

	//TODO: Adding of similar code fields
	//TODO: Add
</script>

<style>
	@media print {
		@page { margin: 1.5rem; }
		
		/* Target the exact sidebar trigger with maximum specificity */

		#panel-icon {
			display: none !important;
		}

		body * {
			visibility: hidden;
		}

		main > #trigger {
			display: none !important;
		}
		
		#title {
			display: none;
		}
		
		#panel {
			display: none;
		}
		
		#table, #table * {
			visibility: visible;
		}
		
		#table {
			position: absolute;
			left: 0;
			top: 0;
			width: 100% !important;
		}

		#input {
			background-color: transparent !important;
			border: none !important;
			outline: none !important;
			box-shadow: none !important;
		}
		
		/* Nuclear option - hide everything that might be a sidebar */
		[data-slot*="sidebar"],
		[data-sidebar],
		[class*="sidebar"] {
			display: none !important;
			visibility: hidden !important;
		}
	}
</style>
<div class="p-6">
	<Toaster position="top-center" richColors />
	
	<h1 class="font-santoshi-bold border-b-1 select-none border-[#dedede] pb-4 text-4xl" id="title">
		Archroma Measurement Summary
	</h1>
	<div class="flex h-full items-start justify-center gap-[5rem]">
		<div class=" border-r-1 mt-5 flex w-[18%] flex-col gap-5 pr-5 mr-15 pt-5"  id="panel">
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
					<Select.Trigger class="w-full  bg-white">{triggerContent}</Select.Trigger>
					<Select.Content class=" font-santoshi text-md subpixel-antialiased bg-white">
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
						class="border-1 flex w-full cursor-pointer items-center justify-center rounded-lg p-5 transition-all duration-300 hover:scale-95 hover:bg-[#eee] bg-white"
						onclick={addRow}><Plus /></button
					>
					<button
						class="border-1 flex w-full cursor-pointer items-center justify-center rounded-lg p-5 transition-all duration-300 hover:scale-95 hover:bg-[#eee] bg-white"
						onclick={deleteRow}><Minus /></button
					>
				</div>
				<div class="pt-2">
					<Label for="Print" class="text-lg">Print Sheet</Label>
					<button
						class="border-1 flex w-full cursor-pointer items-center justify-center rounded-lg p-5 transition-all duration-300 hover:scale-95 hover:bg-[#eee] bg-white"
						onclick={printTable}
					>
						Print
					</button>
				</div>
				<div>
					<Label for="Filter" class="text-lg">Sort</Label>

				<button
						class="border-1 flex w-full cursor-pointer items-center justify-center rounded-lg p-5 transition-all duration-300 hover:scale-95 hover:bg-[#eee] bg-white"
						onclick={sortData}
					>
						Sort
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
							><Input class="font-santoshi h-12 p-0 text-[1.11rem] print:border-0 print:bg-transparent print:shadow-none" id="input" 
							
							/></Table.Head
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
									class="font-santoshi p-0 text-[1.1rem] text-center print:border-0 print:bg-transparent print:shadow-none" id="input"
									bind:value={tableRow.code}
									oninput={(e) =>
										updateRow(tableRow.id, 'code', (event.target as HTMLInputElement).value)}
								/></Table.Cell
							>
							<Table.Cell class="border border-black font-medium">{tableRow.description}</Table.Cell
							>

							<Table.Cell class="border border-black text-left ">{tableRow.unit}</Table.Cell>
							<Table.Cell class="border border-black text-right"
								><Input
									class="font-santoshi p-0 text-[1.1rem] print:border-0 print:bg-transparent print:shadow-none" id="input"
									bind:value={tableRow.qty}
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
