<script>
  import ArrowIcon from "./ArrowIcon.svelte";
  export let imageUrl = "";
  export let title = "";
  export let description = "";
</script>

<div
  class="card lg:card-side flex lg:flex-row-reverse w-full h-full lg:h-[40vh]"
>
  <figure class="image-figure w-full lg:w-1/2 rounded-none bg-[#1C1D22]">
    <img src={imageUrl} alt="Album" class="object-cover w-[500px] h-full" />
  </figure>
  <div class=" lg:w-1/2 flex flex-col">
    <p class="text-lg mt-2 font-gotham italic">{description}</p>
    <h2 class="card-title text-2xl w-[80%] pt-6 text-[#141313] font-Causten">
      {title}
    </h2>
    <span class="pt-6 cursor-pointer">
      <ArrowIcon iconName="north_east" size="text-4xl" color="text-[#F26422]" />
    </span>
  </div>
</div>

<style>
  .image-figure {
    border-radius: 0px;
  }
</style>
