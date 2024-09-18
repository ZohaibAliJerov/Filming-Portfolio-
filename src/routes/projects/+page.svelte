<script>
  import Hero from "../../components/Hero.svelte";
  import ProjectsImages from "../../components/ProjectsImages.svelte";
  import { projectSets } from "./projectsData.js";
  import { goto } from '$app/navigation';

  const projectHeroImage = "/assets/bg4.JPG";
  function handleNavigate(event) {
    const { id } = event.detail;
    goto(`/projects/${id}`);
    console.log(id)
  }
</script>

<div class="max-w-[1400px] w-[100%] mx-auto bg-black">
  <Hero backgroundImage={projectHeroImage} />

  <div class="flex justify-center items-center flex-col pt-8">
    <h2 class="text-[40px] text-center text-white font-causten">
      Our Projects
    </h2>
    <div class="flex justify-center">
      <img src="../assets/rectangle2.png" alt="">
  </div>
  <div class="w-[90%] text-center text-[#EFEFEF] font-gotham pt-4 leading-[32px]">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  </div>
  <div>
    {#each projectSets as project}
      <ProjectsImages images={project.images} on:navigate={handleNavigate} />
    {/each}
  </div>
</div>
