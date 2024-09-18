<script>
  import CustomButton from "./CustomButton.svelte";
</script>

<div
  class="flex w-full max-w-[1400px] relative mx-auto pt-16 flex-col md:flex-row"
  id="contact-us"
>
  <div class="image w-full md:w-[50%]">
    <img src="../assets/jibran.png" alt="" class="bg-cover h-full w-full" />
  </div>
  <div
    class="contact-form w-full md:w-[50%] bg-black flex flex-col items-center text-white p-4 md:p-6 min-h-[856px]"
  >
    <h2 class="pt-6 text-4xl font-semibold font-Causten text-center">
      Contact Us
    </h2>
    <img src="../assets/rectangle2.png" alt="" class="mt-4 mb-6" />

    <div class="flex flex-col gap-12 w-full max-w-[400px] pt-10">
      <label
        class="input input-bordered flex items-center gap-2 bg-white rounded-3xl p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
          />
        </svg>
        <input
          type="text"
          class="grow bg-white text-black p-2"
          placeholder="Username"
        />
      </label>
      <label
        class="input input-bordered flex items-center gap-2 bg-white rounded-3xl p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
          />
          <path
            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
          />
        </svg>
        <input
          type="text"
          class="grow bg-white text-black p-2"
          placeholder="Email"
        />
      </label>
      <label
        class="input input-bordered flex items-center gap-2 bg-white rounded-3xl p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            d="M21 16.29l-3.3-3.3a1 1 0 0 0-1.32-.08l-1.42 1.42a1 1 0 0 1-1.41.08l-2.48-2.49a1 1 0 0 1-.08-1.41l1.42-1.42a1 1 0 0 0 .08-1.32L7.7 3a1 1 0 0 0-1.42 0L3 6.41a1 1 0 0 0-.29 1.42L6.5 14a1 1 0 0 0 1.42.29L9.1 12.56a1 1 0 0 1 1.41.08l2.48 2.49a1 1 0 0 1 .08 1.41l-1.42 1.42a1 1 0 0 0-.08 1.32l3.3 3.3a1 1 0 0 0 1.42 0l3.3-3.3a1 1 0 0 0 0-1.42z"
          />
        </svg>
        <input
          type="text"
          class="grow bg-white text-black p-2"
          placeholder="Phone"
        />
      </label>
      <textarea
        placeholder="Message"
        class="textarea textarea-bordered textarea-lg bg-white text-black p-2 h-[160px]"
      ></textarea>
    </div>
    <div class="w-full max-w-[400px] mx-auto pt-10 flex justify-end">
      <CustomButton
        bg_color="bg-[#F26422]"
        text="Send"
        text_color="text-white"
        width="w-[40%]"
      />
    </div>
  </div>

  <div class="absolute bottom-0 w-full">
    <img src="../assets/wave.png" alt="" class="w-full" />
  </div>
</div>
