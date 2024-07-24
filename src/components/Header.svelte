<script>
  import Button from "./CustomButton.svelte";
</script>

<div class="navbar h-[100px] max-w-[1400px] mx-auto">
  <div class="w-full mx-auto flex justify-between">
    <div class="">
      <div class="dropdown">
        <div tabIndex={0} role="button" class="btn btn-ghost lg:hidden">
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
        <ul
          tabIndex={0}
          class="menu menu-sm dropdown-content bg-red-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><a href="/">Films</a></li>
          <li><a href="/">Photography</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Clients</a></li>
          <li><a href="/">About Us</a></li>
        </ul>
      </div>
      <a href="/" class="btn btn-ghost text-xl"
        ><span class="text-[#F30067] text-[32px] font-perpetua"
          >ARSALAN HAIDER</span
        >
      </a>
    </div>
    <div class=" hidden lg:flex">
      <ul
        class="menu menu-horizontal px-1 text-[16px] text-white font-merriweather"
      >
        <li><a href="/">Films</a></li>
        <li><a href="/">Photography</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Clients</a></li>
        <li><a href="/">About Us</a></li>
      </ul>
    </div>
    <div class="hidden md:flex pr-10">
      <Button text="Contact Us" width="w-[169px]" />
    </div>
  </div>
</div>
