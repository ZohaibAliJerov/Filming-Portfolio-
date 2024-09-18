<script>
  import FooterCard from "./FooterCard.svelte";

  import FaFacebook from "svelte-icons/fa/FaFacebookF.svelte";
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedinIn.svelte";
  import FaYoutube from "svelte-icons/fa/FaYoutube.svelte";
  const cards = [
    {
      title: "Pakistan vs England Series - 2022",
      paragraph: "Freelance Videographer",
      icon: "star",
      imageUrl: "../assets/babar.png",
    },
    {
      title: "AKU Global - 2020 Convocation",
      paragraph: "D.O.P",
      icon: "thumb_up",
      imageUrl: "../assets/degree.png",
    },
    {
      title: "Mitchell’s Table - 2021 (8 episodes)",
      paragraph: "D.O.P",
      icon: "info",
      imageUrl: "../assets/smoke.png",
    },
  ];
</script>

<div class="bg-[black] w-full max-w-[1400px] mx-auto h-auto">
  <div class="w-[90%] flex pt-20 mx-auto flex-col lg:flex-row">
    <div class="text w-[100%] lg:w-[50%]">
      <h2
        class="text-3xl font-bold text-[#F26422] text-center lg:text-start font-Causten"
      >
        ARSALAN HAIDER
      </h2>
      <p
        class="pt-4 text-[#989898] w-[90%] lg:w-[70%] mx-auto lg:mx-0 font-Gotham"
      >
        A Graduate in Theater, Film & TV with 10+ years of experience in film
        and documentary, Arsalan’s journey in the Film landscape is marked by a
        relentless pursuit of creative <br /> excellence and innovation in
        content creation. He has experience in documentary <br /> production,
        cinematography, Film post production, video editing and team management.<br
        /> He has been ensuring every piece of his work resonates with authenticity
        and imapct!
      </p>
      <div
        class="pt-12 font-semibold text-[white] lg:flex flex-col items-center lg:items-start lg:mx-0 hidden"
      >
        <h2>Follow Us</h2>
        <div class="social-icons flex space-x-4 mt-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            class="text-[#F26422]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            class="text-[#F26422]"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            class="text-[#F26422]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            class="text-[#F26422]"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
    <div
      class="small-cards flex flex-col items-center lg:items-start w-[100%] lg:w-[50%]"
    >
      <h2 class="text-[20px] font-semibold text-[#F26422] pt-10 lg:pt-2">
        Explore Work
      </h2>
      {#each cards as card}
        <FooterCard
          title={card.title}
          paragraph={card.paragraph}
          icon={card.icon}
          imageUrl={card.imageUrl}
        />
      {/each}
    </div>
    <div
      class="py-12 font-semibold text-[white] flex flex-col items-center lg:items-start lg:mx-0 lg:hidden"
    >
      <h2 class="font-Causten">Follow Us</h2>
      <div class="social-icons flex space-x-4 mt-4">
        <a
          href="https://www.instagram.com"
          target="_blank"
          class="text-[#F26422]"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          class="text-[#F26422]"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          class="text-[#F26422]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          class="text-[#F26422]"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.3s ease;
    width: 20px;
    height: 20px;
  }

  .social-icons a:hover {
    color: #803e1f;
  }
</style>
