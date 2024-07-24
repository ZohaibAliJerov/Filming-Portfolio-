<!-- Button.svelte -->

<script>
  export let text;
  export let bg_color;
  export let text_color;
  export let width = "w-auto";
  export let onClick = () => {};

  function handleClick() {
    onClick();
  }
</script>

<button
  class={`${bg_color} ${text_color} ${width} border-[1px] border-[#F30067] text-[#F30067] font-semibold py-2 px-4 rounded-full`}
  on:click={handleClick}
>
  {text}
</button>
