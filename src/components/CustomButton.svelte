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
  class={`${bg_color} ${text_color} ${width} button border-[1px] border-[#F26422] py-2 px-4 rounded-full hover:font-bold`}
  on:click={handleClick}
>
  <span class="text" data-text={text}>{text}</span>
</button>
