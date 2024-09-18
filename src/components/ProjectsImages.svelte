<script>
  import { createEventDispatcher } from 'svelte';
  export let images = [];
  const dispatch = createEventDispatcher();

  function handleClick(image) {
    dispatch('navigate', { id: image.id, image });
  }
</script>

<div class="flex w-[90%] mx-auto gap-6 py-6">
  {#each images as image}
    <div class="w-[50%]" 
         on:click={() => handleClick(image)} 
         on:keydown={(e) => e.key === 'Enter' && handleClick(image)} 
         role="button" 
         tabindex="0">
      <img src={image.src} alt={image.alt} class="w-full" />
    </div>
  {/each}
</div>
