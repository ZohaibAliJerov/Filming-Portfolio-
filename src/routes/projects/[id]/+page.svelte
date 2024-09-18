<script>
  import { page } from "$app/stores";
  import { projectSets } from "../projectsData.js";
  import { goto } from '$app/navigation';

  let image;
  let showFullDescription = false;

  $: {
    const id = $page.params.id;
    for (const project of projectSets) {
      image = project.images.find((img) => img.id == id);
      if (image) break;
    }
  }

  function handleBack() {
    goto('/projects');
  }
</script>

{#if image}
  <div class="py-20 max-w-[1400px] mx-auto">
    <div class="w-[90%] mx-auto">
        <div class=" text-center">
            <h2 class="text-[40px] font-semibold">{image.title}</h2>
          </div>
          <div class="flex justify-center">
            <img src="../assets/rectangle2.png" alt="">
        </div>
          <div class="flex flex-col lg:flex-row gap-6 py-10">
            <div class="w-full lg:w-[50%]">
                <img src={image.src} alt={image.alt} class="object-cover w-full h-full"/>
            </div>
            <div class="w-full lg:w-[50%]">
              <p class="leading-[32px] text-[20px]">
              {#if showFullDescription}
                {image.description}
                <button on:click={() => showFullDescription = false} class="text-[#F26422]">Show less</button>
              {:else}
                {image.description.slice(0, 600)}{image.description.length > 600 ? '...' : ''}
                {#if image.description.length > 500}
                  <button on:click={() => showFullDescription = true} class="text-[#F26422]">See more...</button>
                {/if}
              {/if}
            </p>   
            </div>
           
          </div>
          <div class="mt-10">
            <button on:click={handleBack} class="bg-[#F26422] text-white py-2 px-2 rounded w-[10rem]">Back</button>
          </div>
        </div>
    </div>
  
{:else}
  <div>
    <h2>Image not found</h2>
  </div>
{/if}
