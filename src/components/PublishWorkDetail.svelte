<script>
  import Button from "./CustomButton.svelte";

  export let heading = "";
  export let heading2 = "";
  export let para = "";
  export let borderRadius = "0";
</script>

<div class="w-full md:w-[50%] bg-[#1C1D22]">
  <div class="flex flex-col h-[70vh]">
    <div
      class="w-full flex flex-col h-full rounded-r-20 justify-center"
      style="border-radius: {borderRadius};"
    >
      <div class=" w-[90%] mx-auto flex">
        <h2 class="text-4xl text-start">{heading}</h2>
      </div>
      <div class=" w-[90%] mx-auto flex">
        <h2 class="text-4xl pt-2">{heading2}</h2>
      </div>
      <p class="pt-6 w-[90%] mx-auto flex">{para}</p>
      <div
        class="pt-6 flex justify-center items-center lg:justify-start lg:items-end w-[90%] mx-auto"
      >
        <Button
          text="View Project"
          bg_color="bg-transparent"
          text_color="text-[#F26422]"
        />
      </div>
    </div>
  </div>
</div>
<!-- bg-[#1C1D22] -->
