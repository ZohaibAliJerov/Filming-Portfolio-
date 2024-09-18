<script>
  import CustomButton from "./CustomButton.svelte";
  import Card from "./Card.svelte";

  const cardsData = [
    {
      imageUrl: "../assets/degree.png",
      title: "Aga Khan University Karachi - 2021",
      description: "Shot and Edit",
    },
    {
      imageUrl: "../assets/babar.png",
      title: "Vivo Pakistan Featuring Babar Azam",
      description: "2nd D.O.P",
    },
    {
      imageUrl: "../assets/army.png",
      title: "Gilgit Baltistan Scouts Anthem",
      description: "Director",
    },
    {
      imageUrl: "../assets/smoke.png",
      title: "Balda - A Short Film , 2022",
      description: "Director",
    },
  ];
</script>

<div class="w-full flex max-w-[1400px] mx-auto">
  <div class="w-[90%] mx-auto pt-10">
    <p class="text-[18px] text-[#989898] font-Gotham italic">Work</p>
    <h2 class="text-[48px] pt-4 text-[#000000] font-Causten">
      About Arsalan Haider
    </h2>
    <div class="flex flex-wrap gap-10 pt-8">
      {#each cardsData as { imageUrl, title, description }}
        <div class="w-full sm:w-full md:w-[40%] lg:w-[45%] mx-auto">
          <Card {imageUrl} {title} {description} />
        </div>
      {/each}
    </div>
    <div class="flex justify-center pt-10">
      <CustomButton
        bg_color="bg-[#F26422]"
        text="Load More"
        text_color="text-white"
        width="w-[169px]"
      />
    </div>
  </div>
</div>
