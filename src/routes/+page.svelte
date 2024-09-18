<script>
  import AboutUs from "../components/AboutUs.svelte";
  import ContactUs from "../components/ContactUs.svelte";
  import FindUs from "../components/FindUs.svelte";
  import Hero from "../components/Hero.svelte";
  import PublishWork from "../components/PublishWork.svelte";
  import Work from "../components/Work.svelte";

  const homeHeroImage = '/assets/herobg.jpg';
</script>

<main class="flex flex-col max-w-[1400px] w-[100%] mx-auto">
  <Hero  backgroundImage={homeHeroImage}/>
  <AboutUs />
  <PublishWork />
  <Work />
  <ContactUs />
  <FindUs />
</main>
