<script>
  import ArrowIcon from "./ArrowIcon.svelte";
  export let title = "";
  export let paragraph = "";
  export let imageUrl = "";
  export let icon = '';
</script>

<div class="flex items-center gap-10 w-[90%] lg:w-[70%] pt-6 ]">
  <!-- Left Side -->
  <div class="flex-1">
    <div class="flex items-center space-x-2 mb-2">
      <p class="text-[#989898] font-gotham italic">{paragraph}</p>
    </div>

    <h2 class="text-xl text-[#FFFFFF] font-Causten">
      {title}
    </h2>
    <span class="pt-6 cursor-pointer">
      <ArrowIcon iconName="north_east" size="text-4xl" color="text-[#F26422]" />
    </span>
  </div>

  <!-- Right Side -->
  <div class="w-1/3">
    <img src={imageUrl} alt={title} class="w-full h-[120px]" />
  </div>
</div>
