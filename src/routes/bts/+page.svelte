<script>
  import FilmSnapshots from "../../components/FilmSnapshots.svelte";
  import Hero from "../../components/Hero.svelte";

  const btsHeroImage = '/assets/bg6.jpg';

</script>

<div class="max-w-[1400px] mx-auto shadow-lg">
  <Hero backgroundImage={btsHeroImage}/>
  <FilmSnapshots />
  <FilmSnapshots />
</div>
