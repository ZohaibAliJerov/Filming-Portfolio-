<script>
  const userData = [
    {
      imgSrc: "/assets/team2.png",
      heading: "Awais Abid Khan",
      para: "Lead Cinematographer",
    },
    {
      imgSrc: "/assets/team3.png",
      heading: "Ahtisham Ahmad",
      para: "Senior Editor and Cinematographer",
    },
    {
      imgSrc: "/assets/team4.png",
      heading: "Amjad Ali",
      para: "Associate Director, Cinematographer and Non-Linear Editor",
    },
  ];
</script>

<div class="max-w-[1400px] mx-auto px-4">
  <div
    class="flex flex-col justify-between gap-12 my-6 md:flex-row md:justify-center"
  >
    <div class="w-full object-contain">
      <img src="/assets/team1.png" alt="" class="w-[100%] h-full" />
    </div>
    <div class="flex flex-col justify-between py-6">
      <div>
        <h1 class="text-[24px] md:text-[36px] font-causten font-semibold">Introduction</h1>
        <div class="py-2">
            <img src="../assets/rectangle2.png" alt="">
        </div>
        <p class="leading-[28px] md:leading-[32px] text-[16px] md:text-[20px] font-gotham">
          A Graduate in Theatre, Film & TV with over ﬁve years at FILMBUG
          PRODUCTIONS as Creative Media Head. My journey in the Film landscape
          is marked by a relentless pursuit of creative excellence and
          innovation in Film and Digital media production. My focus has been on
          documentary production, cinematography and visualizing ideas into
          digital medium, ensuring that every piece resonates with authenticity
          and impact.
        </p>
      </div>
      <div>
        <h1 class="text-[24px] md:text-[36px] font-causten font-semibold">Awards</h1>
        <div class="py-2">
            <img src="../assets/rectangle2.png" alt="">
        </div>
        <p class="leading-[28px] md:leading-[32px] text-[16px] md:text-[20px]">
          Thesis Film Distinction; class of 2022, BA(Hons) in Theatre, Film and
          TV from School of media and Mass Communication – SMC, Beacon House
          National University, Lahore, Pakistan.
        </p>
      </div>
    </div>
  </div>

  <div>
    <div class="flex justify-center">
      <h1 class="text-[48px] font-causten font-semibold">Team Members</h1>
    </div>
    <div class="flex justify-center">
        <img src="../assets/rectangle2.png" alt="">
    </div>
    <div class="flex flex-col md:flex-row justify-between my-6 gap-2">
      {#each userData as { imgSrc, heading, para }}
        <div class="text-center py-2 flex flex-col items-center">
          <img src={imgSrc} alt={heading} class="object-cover w-full" />
          <h2 class="text-[22px] pt-4 text-[#141313] font-causten font-semibold">{heading}</h2>
          <p class="py-1 text-[#141313] text-[15px] font-causten">{para}</p>
        </div>
      {/each}
    </div>
  </div>
</div>
