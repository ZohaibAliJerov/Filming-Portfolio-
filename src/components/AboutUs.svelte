<script>
  import Button from "./CustomButton.svelte";
  import SectionWrapper from "./SectionWrapper.svelte";
</script>

<SectionWrapper id="about-us">
  <div
    class="text-[#2F2E2E] flex flex-col text-center justify-center items-center min-h-[30rem] py-10 md:py-2"
  >
    <h2 class="text-4xl font-semibold font-Causten text-[#000000]">
      About Arsalan Haider
    </h2>
    <div class="pt-4">
      <img src="../assets/rectangle2.png" alt="" />
    </div>
    <p class="text-xl pt-10 w-[90%] font-Gotham">
      A Graduate in Theatre, Film & TV with over 5 years at <span
        class="font-semibold italic">FILMBUG PRODUCTIONS</span
      >, his journey in the Film Landscape is marked by a relentless pursuit of
      creative excellence and innovation in content creation. His Focus has been
      on documentary production and cinematography ensuring that every piece
      resonates with authenticity and impact.
    </p>
    <div class="pt-10">
      <Button
        text="Learn More About Us"
        bg_color="bg-[#F26422]"
        width="w-[199px]"
        text_color="text-[white]"
      />
    </div>
  </div>
</SectionWrapper>
