<script>
    import Hero from "../../components/Hero.svelte";
    import FilmsVid from "../../components/FilmsVid.svelte";
    import FilmSnapshots from "../../components/FilmSnapshots.svelte";
    const films = [
        {
            imageUrl: "/assets/snow.jpg",
            title: "Balda",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            imageUrl: "/assets/hareep.jpg",
            title: "Le Beric",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            imageUrl: "/assets/harmonium.jpg",
            title: "LLMC, Music Sessions",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];

    const filmsHeroImage = '/assets/bg2.JPG';
</script>

<div class="max-w-[1400px] w-[100%] mx-auto bg-black">
    <Hero  backgroundImage={filmsHeroImage}/>
    <div class="flex justify-center items-center flex-col pt-8">
        <h2 class="text-[40px] text-center text-white font-causten">Short Documentary Films by Arsalan Haider</h2>
        {#each films as film}
            <FilmsVid imageUrl={film.imageUrl} title={film.title} description={film.description} />
        {/each}
    </div>
    <div class="bg-white mx-auto flex flex-col items-center justify-center">
        <h2 class="text-[48px] text-center text-black font-causten pt-8 font-semibold">Snapshots Of Our Short Films</h2>
        <FilmSnapshots />
    </div>
</div>