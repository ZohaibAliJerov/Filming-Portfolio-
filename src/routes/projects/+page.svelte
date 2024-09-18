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
  </div>
  <div>
    {#each projectSets as project}
      <ProjectsImages images={project.images} on:navigate={handleNavigate} />
    {/each}
  </div>
</div>
