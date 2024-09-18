<script>
    import Hero from "../../components/Hero.svelte";
    import OurClients from "../../components/OurClients.svelte";

  const clientUsHeroImage = '/assets/bg3.JPG';

</script>

<div class="max-w-[1400px] w-[100%] mx-auto bg-black">
    <Hero  backgroundImage={clientUsHeroImage}/>
    <div class="flex justify-center items-center flex-col pt-8 w-[90%] mx-auto">
        <h2 class="text-[40px] text-center text-white font-causten">Our Clients</h2>
        <p class="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="py-10">
        <OurClients />
    </div>
</div>