<template>
  <section id="projects" class="relative w-11/12 px-16 mx-auto">
    <SectionHeader title="My Projects" />
    <button
      class="swiper-prev absolute top-2/3 left-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full"
    >
      <Icon icon="line-md:arrow-left" class="font-bold text-3xl" />
    </button>
    <button
      class="swiper-next absolute top-2/3 right-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full"
    >
      <Icon icon="line-md:arrow-right" class="font-bold text-3xl" />
    </button>

    <swiper
      :effect="'coverflow'"
      grabCursor
      centeredSlides
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :navigation="navigationOptions"
      loop
      pagination
      :modules="[EffectCoverflow, Navigation]"
      class="max-w-full mt-32"
    >
      <swiper-slide
        class="max-w-[300px]"
        v-for="(project, index) in projects"
        :key="index"
      >
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :image="getImageUrl(project.image)"
          :tags="project.tags"
          :liveLink="project.liveLink"
          :codeLink="project.codeLink"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import SectionHeader from "@/components/Ul/SectionHeader.vue";
import ProjectCard from "@/components/Ul/ProjectCard.vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { ref } from "vue";

// (مهم) هذه الدالة الجديدة هي الحل
const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};

// Define navigation options
const navigationOptions = {
  prevEl: ".swiper-prev",
  nextEl: ".swiper-next",
};

const projects = ref([
  {
    title: "Online Store",
    description: "A responsive online store built with Vue.js and Vuetify.",
    image: "ptoject-1.png", //  فقط اسم الملف
    tags: ["Vue.js", "vutify", "Javascript"],
    liveLink: "https://strong-macaron-69f628.netlify.app/",
    codeLink: "",
  },
  {
    title: "Landing Page",
    description: "This is a landing page built with HTML, CSS, and JavaScript.",
    image: "project.png", // فقط اسم الملف
    tags: ["HTML", "CSS", "Javascript"],
    liveLink: "/",
    codeLink: "",
  },
  {
    title: "Landing Page",
    description: "This is a landing page built with HTML, CSS, and Bootstrap.",
    image: "boma-project.png", // فقط اسم الملف
    tags: ["HTML", "CSS", "Bootstrap"],
    liveLink: "/",
    codeLink: "",
  },
  {
    title: "Landing Page",
    description: "This is a landing page built with HTML, CSS",
    image: "noor-al-makarem.png", // فقط اسم الملف
    tags: ["HTML", "CSS"],
    liveLink: "/",
    codeLink: "",
  },
  {
    title: "Landing Page",
    description: "This is a landing page built with HTML, CSS, and JavaScript.",
    image: "mimar-tec.png", // فقط اسم الملف
    tags: ["HTML", "CSS", "Javascript"],
    liveLink: "/",
    codeLink: "",
  },
  {
    title: "Portfolio Website",
    description: "THIS personal portfolio ",
    image: "portfolieo.png", // فقط اسم الملف
    tags: ["HTML", "CSS"],
    liveLink: "/",
    codeLink: "",
  },
  {
    title: "Landing Page",
    description: "This is a landing page built with HTML, CSS, and JavaScript.",
    image: "مصحف-الحرمين.png", // فقط اسم الملف
    tags: ["HTML", "CSS", "Javascript"],
    liveLink: "/",
    codeLink: "",
  },
  {
    title: "Landing Page",
    description: "This is a landing page built with HTML, CSS, and JavaScript.",
    image: "مصحف-الحمد.png", // فقط اسم الملف
    tags: ["HTML", "CSS", "Javascript"],
    liveLink: "/",
    codeLink: "",
  },
  // Add more projects if needed
]);
</script>

<style>
.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
