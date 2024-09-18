<script>
  import SectionWrapper from "./SectionWrapper.svelte";

  export let backgroundImage;
</script>

<SectionWrapper id="hero">
  <div
    class="h-[calc(100vh-150px)] md:h-screen bg-cover bg-center flex flex-col"
    style="background-image: url('{backgroundImage}');"
  >
    <div class="h-[90%] relative w-[90%] mx-auto">
      <div class="absolute bottom-0 left-0 font-causten text-center">
        <h2
          class="text-[20px] md:text-[50px] font-[700] text-[#F26422] font-Causten"
        >
          ARSALAN HAIDER
        </h2>
        <h2
          class="text-[20px] md:text-[40px] font-[600] text-[#989898] font-Causten"
        >
          FILMMAKER
        </h2>
        <img src="../assets/line1.png" alt="" />
        <p class="text-[15px] md:text-[28px] text-[#989898] pt-2 font-Causten">
          CINEMATOGRAPHER | PHOTOGRAPHER | EDITOR
        </p>
      </div>
    </div>
  </div>
</SectionWrapper>
