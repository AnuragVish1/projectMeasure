<script lang="ts">
	import StatsBox from '$lib/components/stats-box.svelte';
	import CreateSheets from '$lib/components/create-sheets.svelte';
	import PastSheetTable from '$lib/components/past-sheet-table.svelte';
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let calender = new Date();
	let day = calender.getDay();
	let date = calender.getDate();
</script>

<div class=" select-none p-6 subpixel-antialiased">
	<!-- Welcome Section -->
	<div class="border-b-1 flex justify-between border-[#dedede] pb-6 text-5xl">
		<div><h1 class=" font-santoshi-black">Hello, Anurag</h1></div>
		<div class=" font-santoshi-black">{days[day]}, {date}</div>
	</div>
	<StatsBox />
	<CreateSheets/>
	<PastSheetTable/>
</div>