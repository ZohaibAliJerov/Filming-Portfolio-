<script>
  import { onMount } from "svelte";
  let clients = [];

  onMount(() => {
    clients = [
      { name: "Client 1", logo: "/assets/a.webp" },
      { name: "Client 2", logo: "/assets/b.jpg" },
      { name: "Client 3", logo: "/assets/c.png" },
      { name: "Client 5", logo: "/assets/e.jpg" },
    ];
  });
</script>

<div class="clients ">
  {#each clients as client}
    <div class="client-item">
      <img src={client.logo} alt={client.name} class="h-[300px] w-[300px] object-contain" />
    </div>
  {/each}
</div>

<style>
  .clients {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #000;
    padding: 1rem 0;
    background-color:#636363;
  }

  .client-item {
    margin: 1rem;
  }
</style>
