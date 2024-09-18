<script>
  export let src;
  export let borderRadius = "0";
</script>

<div class="w-full md:w-[50%] bg-cover bg-center">
  <img
    {src}
    alt=""
    class=" object-cover h-[70vh] w-full"
    style="border-radius: {borderRadius};"
  />
</div>
