<div class="cont bg-white py-10 w-[100%] mx-auto gap-4 md:w-[90%] md:gap-0 flex flex-col md:grid">
  <div class="box1">
    <img
      src="/assets/1.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box2" style="background-color: #33FF57;">
    <img
      src="/assets/9.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box3" style="background-color: #3357FF;">
    <img
      src="/assets/10.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box4" style="background-color: #FF33A1;">
    <img
      src="/assets/11.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box5" style="background-color: #FF8C33;">
    <img
      src="/assets/4.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box6" style="background-color: #33FFF5;">
    <img
      src="/assets/3.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box7" style="background-color: #8C33FF;">
    <img
      src="/assets/12.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box8" style="background-color: #FF3333;">
    <img
      src="/assets/13.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box9" style="background-color: #33FF8C;">
    <img
      src="/assets/5.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box10" style="background-color: #FF5733;">
    <img
      src="/assets/7.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box11" style="background-color: #33FF57;">
    <img
      src="/assets/8.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box12" style="background-color: #3357FF;">
    <img
      src="/assets/6.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box13" style="background-color: #FF33A1;">
    <img
      src="/assets/14.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box14" style="background-color: #FF8C33;">
    <img
      src="/assets/2.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box15" style="background-color: #33FFF5;">
    <img
      src="/assets/15.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box16" style="background-color: #8C33FF;">
    <img
      src="/assets/16.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box17" style="background-color: #FF3333;">
    <img
      src="/assets/18.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box18" style="background-color: #33FF8C;">
    <img
      src="/assets/20.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box19" style="background-color: #FF5733;">
    <img
      src="/assets/19.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box20" style="background-color: #33FF57;">
    <img
      src="/assets/17.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
  <div class="box21" style="background-color: #3357FF;">
    <img
      src="/assets/19.jpg"
      alt=""
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </div>
</div>

<style>
  .cont {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .cont {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(12, 1fr);
      gap: 1rem 1rem;
      grid-auto-flow: row;
      grid-template-areas:
        "box1 box1 box1 box1 box1 box1 box2 box14"
        "box1 box1 box1 box1 box1 box1 box3 box14"
        "box1 box1 box1 box1 box1 box1 box4 box14"
        "box5 box5 box5 box5 box6 box6 box6 box14"
        "box5 box5 box5 box5 box6 box6 box6 box7"
        "box5 box5 box5 box5 box6 box6 box6 box8"
        "box9 box9 box10 box11 box6 box6 box6 box13"
        "box9 box9 box12 box12 box12 box12 box12 box15"
        "box9 box9 box12 box12 box12 box12 box12 box15"
        "box9 box9 box12 box12 box12 box12 box12 box15"
        "box20 box20 box20 box21 box17 box17 box17 box16"
        "box20 box20 box20 box21 box18 box18 box19 box16";
    }
  }

  .box1 {
    grid-area: box1;
  }

  .box2 {
    grid-area: box2;
  }

  .box3 {
    grid-area: box3;
  }

  .box4 {
    grid-area: box4;
  }

  .box5 {
    grid-area: box5;
  }

  .box6 {
    grid-area: box6;
  }

  .box7 {
    grid-area: box7;
  }

  .box8 {
    grid-area: box8;
  }

  .box9 {
    grid-area: box9;
  }

  .box10 {
    grid-area: box10;
  }

  .box11 {
    grid-area: box11;
  }

  .box12 {
    grid-area: box12;
  }

  .box13 {
    grid-area: box13;
  }

  .box14 {
    grid-area: box14;
  }

  .box15 {
    grid-area: box15;
  }

  .box16 {
    grid-area: box16;
  }

  .box17 {
    grid-area: box17;
  }

  .box18 {
    grid-area: box18;
  }

  .box19 {
    grid-area: box19;
  }

  .box20 {
    grid-area: box20;
  }

  .box21 {
    grid-area: box21;
  }
</style>
