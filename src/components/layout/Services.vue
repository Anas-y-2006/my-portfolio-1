<template>
  <section id="services" class="relative text-white mt-32">
    <SectionHeader title="My Services" />
    <div
      class="mt-20 py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
    >
      <article
        class="px-[12px] mb-[24px]"
        v-for="element in services"
        :key="element.id"
      >
        <div
          class="mt-[30px] relative flex flex-col justify-center text-center rounded-[30px] border border-secondary dark:bg-[#ffffff29] bg-primary h-full"
          data-aos="fade-up"
          :data-aos-delay="element.id * 100"
        >
          <div class="mt-[-30px] flex justify-center relative">
            <div class="mt-[-7px] p-[20px] relative bg-primary rounded-[50%]">
              <span
                class="h-[60px] w-[60px] m-auto border-[1px] border-solid border-secondary absolute top-[8px] left-[8px] rounded-[50%] inline-block z-[5]"
              ></span>
              <img
                :src="element.icon"
                alt="services"
                class="g-[35px] w-[35px] relative z-[1]"
              />
            </div>
          </div>
          <div class="p-[30px]">
            <h3 class="uppercase font-semibold text-secondary text-base">
              {{ element.name }}
            </h3>
            <p class="text-[14px] leading-[20px] text-white tracking-[0,03rem]">
              {{ element.description }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import SectionHeader from "@/components/Ul/SectionHeader.vue";

const services = ref([
  {
    id: "1",
    icon: "https://img.icons8.com/ios-glyphs/100/daed1a/web-design.png",
    name: "Custom Landing Pages",
    description:
      "Designing and building beautiful, high-converting landing pages to showcase your product or service and attract customers.",
  },
  {
    id: "2",
    icon: "https://img.icons8.com/ios-filled/100/daed1a/user-male-circle.png",
    name: "Personal Portfolios",
    description:
      "Creating professional and modern personal portfolios to highlight your skills, projects, and experience to potential employers.",
  },
  {
    id: "3",
    icon: "https://img.icons8.com/ios-filled/100/daed1a/briefcase.png",
    name: "Small Business Websites",
    description:
      "Developing clean and informative websites for small businesses to establish a strong online presence and connect with clients.",
  },
  {
    id: "4",
    icon: "https://img.icons8.com/?size=100&id=32258&format=png&color=daed1a",
    name: "Fully Responsive Design",
    description:
      "Ensuring your website looks perfect and functions flawlessly on all devices, from mobile phones to large desktop screens.",
  },
  {
    id: "5",
    icon: "https://img.icons8.com/ios-filled/100/daed1a/rocket.png",
    name: "Performance Optimization",
    description:
      "Optimizing your website for fast loading speeds and a smooth user experience, which is crucial for visitor retention and SEO.",
  },
  {
    id: "6",
    icon: "https://img.icons8.com/ios-filled/100/daed1a/maintenance.png",
    name: "Website Maintenance",
    description:
      "Providing ongoing support and maintenance to keep your website updated, secure, and running smoothly after launch.",
  },
]);
</script>
