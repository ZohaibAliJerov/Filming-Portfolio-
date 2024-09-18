<script>
  export let iconName = "";
  export let size = "text-base"; // Tailwind text size classes
  export let color = "text-black"; // Tailwind text color classes
</script>

<span class={`material-icons ${size} ${color}`}>
  {iconName}
</span>
