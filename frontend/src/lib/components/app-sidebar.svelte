<script lang="ts">

 import CalendarIcon from "@lucide/svelte/icons/calendar";
 import HouseIcon from "@lucide/svelte/icons/house";
 import InboxIcon from "@lucide/svelte/icons/inbox";
 import SearchIcon from "@lucide/svelte/icons/search";
 import SettingsIcon from "@lucide/svelte/icons/settings";
  import MeasurementIcon from "@lucide/svelte/icons/sheet";
  import InvoiceIcon from "@lucide/svelte/icons/receipt-text";
 import * as Sidebar from "$lib/components/ui/sidebar/index.js";
 
 
 // Menu items.
 const items = [
  {
   title: "Home",
   url: "/",
   icon: HouseIcon,
  },
  {
   title: "Measurement",
   url: "#",
   icon: MeasurementIcon,
  },
  {
   title: "Invoice",
   url: "#",
   icon: InvoiceIcon,
  },
  {
   title: "Search",
   url: "#",
   icon: SearchIcon,
  },
  {
   title: "Settings",
   url: "#",
   icon: SettingsIcon,
  },
 ];
</script>

<style>
    @media print {
		@page { margin: 0; }
	
    body * {
        visibility: hidden;
    }
    
}
</style>
 
<Sidebar.Root collapsible="icon">
 <Sidebar.Content>
  <Sidebar.Group>

   <Sidebar.GroupContent>
    <Sidebar.Menu >
     {#each items as item}
      <Sidebar.MenuItem >
       <Sidebar.MenuButton >
        {#snippet child({ props })}
         <a href={item.url} {...props}>
            
          <item.icon class="subpixel-antialiased"/>
          <span class=" font-santoshi subpixel-antialiased">{item.title}</span>
         </a>
        {/snippet}
       </Sidebar.MenuButton>
      </Sidebar.MenuItem>
     {/each}
    </Sidebar.Menu>
   </Sidebar.GroupContent>
  </Sidebar.Group>
 </Sidebar.Content>
</Sidebar.Root>