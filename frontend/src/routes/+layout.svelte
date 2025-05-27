<script lang="ts">
	import '../app.css';
	 import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import AppSidebar from "$lib/components/app-sidebar.svelte";

	let { children } = $props();
</script>

<Sidebar.Provider>
  <AppSidebar />
  <main class=" font-santoshi w-full">
    <Sidebar.Trigger class=" print:opacity-0"/>
    {@render children?.()}
  </main>
</Sidebar.Provider>