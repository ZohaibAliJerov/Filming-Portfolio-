<script>
  import Button from "./CustomButton.svelte";
  import SectionWrapper from "./SectionWrapper.svelte";
</script>

<SectionWrapper id="hero">
  <div
    class=" h-[calc(100vh-150px)] md:h-screen bg-cover bg-center flex flex-col items-center justify-center"
    style="background-image: url('../assets/aaaa.png');"
  >
    <h2
      class="max-w-[1200px] mx-auto w-full font-semibold flex flex-col justify-center items-center pt-10"
    >
      <span
        class="text-[#F30067] font-perpetua text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-normal"
        >ARSALAN HAIDER</span
      >
      <span
        class="text-[#F30067] pt-4 font-pristina text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-normal"
        >Photography and Films</span
      >
    </h2>
    <div class="pt-10">
      <Button
        text="Order Services"
        bg_color="bg-[#F30067]"
        text_color="text-[white]"
        width="w-[199px]"
      />
    </div>
  </div>
</SectionWrapper>
