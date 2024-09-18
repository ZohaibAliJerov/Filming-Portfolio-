<script>
  import SectionWrapper from "./SectionWrapper.svelte";
  import CustomImage from "./CustomImage.svelte";
  import PublishWorkDetail from "./PublishWorkDetail.svelte";

  const workDetails = [
    {
      heading: "‘Delight in Every Portrait’",
      heading2: "Vivo Pakistan",
      para: "Director of Photography - DVC Featuring Abid Saleem",
    },
    {
      heading: "Mitchell’s Table Mountain",
      heading2: "Series",
      para: "Director of Photography",
    },
    {
      heading: "Karam - Sufiscore",
      para: "Camera OP",
    },
    {
      heading: "Mitchell’s Table Mountain",
      heading2: "Series",
      para: "Director of Photography",
    },
  ];
  let imageUrls = [
    "../assets/shoting.png",
    "../assets/xia.png",
    "../assets/song.png",
    "../assets/shoting.png",
  ];
</script>

<SectionWrapper>
  <div class="text-center text-[white] bg-[black] pb-10" id="work">
    <div class="flex flex-col justify-center items-center pt-20">
      <h2 class="text-5xl pt-8">Publish Work</h2>
      <div class="pt-3 mr-12">
        <img src="../assets/rectangle2.png" alt="" />
      </div>
    </div>
    <!-- <div class="flex flex-col pt-14 w-[100%] mx-auto gap-10">
      {#each workDetails as detail, index}
        <div
          class="flex w-[90%] mx-auto {index === 1 || index === 3
            ? 'flex-row-reverse'
            : ''}"
          style="display: flex; flex-direction: {index === 1 || index === 3
            ? 'row-reverse'
            : 'row'};"
        >
          <CustomImage
            src={imageUrls[index]}
            borderRadius={index === 1 || index === 3
              ? "0 20px 20px 0"
              : "20px 0 0 20px"}
          />
          <PublishWorkDetail
            heading={detail.heading}
            heading2={detail.heading2}
            para={detail.para}
            borderRadius={index === 1 || index === 3
              ? "20px 0 0 20px"
              : "0 20px 20px 0"}
          />
        </div>
      {/each}
    </div> -->
    <div class="flex flex-col pt-14 mx-auto gap-10 w-[90%]">
      {#each workDetails as detail, index}
        <div
          class={`flex flex-col md:flex-row w-full ${
            index === 1 || index === 3 ? "md:flex-row-reverse" : ""
          }`}
        >
          <CustomImage
            src={imageUrls[index]}
            class="w-full md:w-1/2"
            borderRadius={`${
              index === 1 || index === 3 ? "md:rounded-none" : "md:rounded-none"
            }`}
          />
          <PublishWorkDetail
            heading={detail.heading}
            heading2={detail.heading2}
            para={detail.para}
            class="w-full md:w-1/2"
            borderRadius={`${
              index === 1 || index === 3 ? "md:rounded-none" : "md:rounded-none"
            }`}
          />
        </div>
      {/each}
    </div>
  </div>
</SectionWrapper>
