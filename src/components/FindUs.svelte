<script>
  import ArrowIcon from "./ArrowIcon.svelte";
</script>

<div class="flex flex-col py-10 w-full max-w-[1400px] mx-auto min-h-[55vh]">
  <div class="text-center pt-6 flex flex-col justify-center items-center">
    <h2 class="text-4xl text-[black] font-semibold font-Causten">Find Us</h2>
    <img src="../assets/rectangle2.png" alt="" class="mt-4" />
  </div>

  <div class="flex flex-col md:flex-row md:justify-evenly md:pt-8">
    <div class="text-center w-full md:w-[25%] mb-8 md:mb-0">
      <ArrowIcon
        iconName="location_on"
        size="text-4xl"
        color="text-[#F26422]"
      />
      <p class="text-[#141313] font-medium font-Causten">UAE</p>
      <p class="pt-3 text-[#2F2E2E] font-Gotham font-normal">
        Mussafah Gardens Apartment
      </p>
      <p class="text-[#2F2E2E] font-Gotham font-normal">
        complex, Abu Dhabi, UAE
      </p>
    </div>
    <div class="text-center w-full md:w-[25%] mb-8 md:mb-0">
      <ArrowIcon
        iconName="location_on"
        size="text-4xl"
        color="text-[#F26422]"
      />
      <p class="text-[#141313] font-medium font-Causten">PAKISTAN</p>
      <p class="pt-3 text-[#2F2E2E] font-Gotham font-normal">
        Mussafah Gardens Apartment
      </p>
      <p class="text-[#2F2E2E] font-Gotham font-normal">
        complex, Abu Dhabi, UAE
      </p>
    </div>

    <div class="text-center w-full md:w-[25%] mb-8 md:mb-0">
      <ArrowIcon iconName="message" size="text-4xl" color="text-[#F26422]" />
      <p class="text-[#141313] font-medium font-Causten">LET'S TALK</p>
      <p class="pt-3 text-[#2F2E2E] font-Gotham font-normal">+971569533685</p>
      <p class="text-[#2F2E2E] font-Gotham font-normal">+971569533685</p>
    </div>
    <div class="text-center w-full md:w-[25%] mb-8 md:mb-0">
      <ArrowIcon iconName="email" size="text-4xl" color="text-[#F26422]" />
      <p class="text-[#141313] font-medium font-Causten">EMAIL US</p>
      <p class="pt-3 text-[#2F2E2E] font-Gotham font-normal">
        arsalanhaidercine@gmail.com
      </p>
    </div>
  </div>
</div>
