<script>
  import Button from "./CustomButton.svelte";
  let dropdownOpen = false;

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }

  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleDropdown();
    }
  }
</script>

<div class="navbar h-[100px] max-w-[1400px] mx-auto">
  <div class="w-[90%] mx-auto flex justify-between">
    <div class="">
      <div class="dropdown">
        <div tabIndex="0" role="button" class="btn btn-ghost lg:hidden text-[#F26422]" on:click={toggleDropdown} on:keydown={handleKeydown} tabindex="0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        {#if dropdownOpen}
          <ul
            tabIndex={0}
            class="menu dropdown-content bg-[#1C1D22] rounded-box z-[1] mt-3 p-2 shadow text-[white] w-[20rem]"
          >
            <li><a class="text-[20px] pt-0" href="/films">Films</a></li>
            <li>
              <a class="text-[20px] pt-6" href="/photography">Photography</a>
            </li>
            <li><a class="text-[20px] pt-6" href="/projects">Projects</a></li>
            <li><a class="text-[20px] pt-6" href="/clients">Clients</a></li>
            <li><a class="text-[20px] pt-6" href="/about-us">About Us</a></li>
          </ul>
        {/if}
      </div>
      <a href="/#hero" class="btn btn-ghost text-xl"
        ><span
          class="text-[#F26422] text-[18px] sm:text-[26px] md:text-[32px] font-Causten"
          >ARSALAN HAIDER</span
        >
      </a>
    </div>
    <div class=" hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-[16px] text-white font-Gotham">
        <li><a href="/films">Films</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/clients">Clients</a></li>
        <li><a href="/bts">BTS</a></li>
        <li><a href="/about-us">About Us</a></li>
      </ul>
    </div>
    <div class="hidden md:flex pr-10">
      <a href="/contact-us">
        <Button
          bg_color="bg-[#F26422]"
          text="Contact Us"
          text_color="text-white"
          width="w-[169px]"
        /></a
      >
    </div>
  </div>
</div>
