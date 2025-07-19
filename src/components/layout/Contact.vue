<template>
  <section class="mt-32" id="contact">
    <SectionHeader title="Contact Me" />
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <form
        class="space-y-8"
        action="https://formspree.io/f/xgvzvbpr"
        method="POST"
      >
        <div v-for="(item, index) in inputs" :key="index">
          <Input
            :id="item.id"
            :label="item.label"
            :type="item.type"
            :placeholder="item.placeholder"
            :rows="item.rows"
            :name="item.name"
          />
        </div>
        <div class="flex justify-between">
          <Button lable="Send" type="submit" />
          <div class="mt-2 flex justify-center space-x-3 md:space-x-8">
            <a href="" class="text-gray-600 hover:text-blue-500">
              <Icon icon="fa-brands:twitter" style="font-size: 2rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/anas-yasser-0b896a247/"
              class="text-gray-600 hover:text-blue-700"
            >
              <Icon icon="fa-brands:linkedin" style="font-size: 2rem" />
            </a>
            <a
              href="https://github.com/Anas-y-2006/"
              class="text-gray-600 hover:text-gray-800"
            >
              <Icon icon="fa-brands:github" style="font-size: 2rem" />
            </a>
            <a
              href="https://www.instagram.com/anas.yasser.210/profilecard/?igsh=d2xlbmVldDB1Mmxn"
              class="text-gray-600 hover:text-pink-500"
            >
              <Icon icon="fa-brands:instagram" style="font-size: 2rem" />
            </a>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "@/components/Ul/SectionHeader.vue";
import Button from "@/components/Ul/Button.vue";
import Input from "@/components/Ul/Input.vue";
import { ref } from "vue";

const inputs = ref([
  {
    id: "email",
    label: "Your email",
    type: "email",
    placeholder: "email@example.com",
    name: "email",
    rows: undefined,
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Let us know how we can help you",
    name: "subject",
    rows: undefined,
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Leave a comment",
    name: "message",
    rows: 6,
  },
]);
</script>
