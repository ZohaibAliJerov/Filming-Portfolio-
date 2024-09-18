<script>
  export let imageUrl;
  export let title;
  export let description;
  let videoPlaying = false;
  let videoElement;

  function togglePlayPause() {
    if (videoElement) {
      if (videoPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      videoPlaying = !videoPlaying;
    }
  }

  function onVideoClick(event) {
    videoElement = event.target;
    togglePlayPause();
  }

  function onButtonClick() {
    if (!videoElement) {
      videoElement = document.querySelector("video");
    }
    togglePlayPause();
  }
</script>

<div class="w-full relative py-8">
  <div class="relative">
    <img src={imageUrl} alt={title} class="w-[90%] h-[420px] rounded-[42px] mx-auto"/>
    {#if !videoPlaying}
      <button
        class="absolute inset-0 flex items-center justify-center"
        on:click={onButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-[#F26422]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 22v-20l18 10-18 10z" />
        </svg>
      </button>
    {/if}
  </div>
  <div
    class="flex flex-col gap-4 items-center justify-center w-[90%] mx-auto pt-4"
  >
    <h2 class="text-2xl font-bold text-[#F26422]">{title}</h2>
    <p class="text-center text-[#EFEFEF]">
      {description}
    </p>
  </div>
</div>
