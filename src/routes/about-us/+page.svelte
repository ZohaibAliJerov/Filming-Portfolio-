<script>
    import Hero from "../../components/Hero.svelte"
  import TeamMembers from "../../components/TeamMembers.svelte";

  const aboutUsHeroImage = '/assets/bg5.JPG';
</script>

<div>
    <Hero backgroundImage={aboutUsHeroImage}/>
    <TeamMembers />
</div>