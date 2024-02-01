<template>
  <main
    class="flex items-center justify-center w-screen h-screen bg-Charcoal-Grey"
  >
    <!-- Default Modal -->
    <section
      v-if="!confirm"
      class="lg:max-w-[1000px] max-lg:w-full lg:rounded-3xl max-lg:flex-col-reverse flex gap-20 max-lg:gap-5 max-lg:h-full p-5 bg-White max-lg:p-0"
    >
      <article
        class="flex flex-col justify-center w-full gap-5 max-lg:h-4/6 ps-10 max-lg:px-5"
      >
        <h1 class="text-6xl font-bold max-lg:text-4xl">Stay updated!</h1>
        <p class="text-[16px] text-Charcoal-Grey">
          Join 60,000+ product manager receiving monthly updates on:
        </p>
        <ul class="flex flex-col gap-3 mt-2">
          <li
            class="flex items-center gap-4 max-lg:items-start text-Charcoal-Grey"
          >
            <img
              src="/images/icon-success.svg"
              class="w-[25px] h-[25px] object-contain"
              alt=""
            />
            Product discovery and building what matters
          </li>
          <li
            class="flex items-center gap-4 max-lg:items-start text-Charcoal-Grey"
          >
            <img
              src="/images/icon-success.svg"
              class="w-[25px] h-[25px] object-contain"
              alt=""
            />
            Measuring to ensure updates are a success
          </li>
          <li
            class="flex items-center gap-4 max-lg:items-start text-Charcoal-Grey"
          >
            <img
              src="/images/icon-success.svg"
              class="w-[25px] h-[25px] object-contain"
              alt=""
            />
            And much more!
          </li>
        </ul>
        <div class="mt-5">
          <div class="flex justify-between mb-3">
            <label for="" class="font-semibold text-DarkSlateGrey"
              >Email address
            </label>
            <span v-if="errorMsg" class="text-sm text-Tomato">{{
              errorMsg
            }}</span>
          </div>
          <input
            v-model="email"
            type="text"
            class="w-full px-2 py-4 border rounded-lg border-Charcoal-Grey"
            placeholder="email@company.com"
          />
        </div>
        <input
          @click.prevent="submit"
          type="submit"
          value="Subscribe to monthly newsletter"
          class="w-full hover:bg-gradient-to-r hover:from-[#FF5377] hover:to-[#FF673E] text-White font-medium rounded-lg bg-DarkSlateGrey px-2 py-4"
        />
      </article>
      <img
        :src="imgResponsive"
        class="object-cover w-full h-full max-lg:h-2/6 max-lg:rounded-b-3xl"
        alt=""
      />
    </section>
    <!-- Confirmation Modal -->
    <section
      v-if="confirm"
      class="px-16 py-10 lg:max-w-[500px] max-lg:max-w-full max-lg:h-full max-lg:flex max-lg:flex-col max-lg:justify-evenly bg-White rounded-3xl"
    >
      <div class="">
        <img
          src="/images/icon-success.svg"
          class="w-[60px] h-[60px] object-contain"
          alt=""
        />
        <h1 class="mt-10 text-6xl font-bold text-DarkSlateGrey">
          Thanks for subscribing!
        </h1>
        <p class="mt-5 text-base">
          A confirmation email has been sent to {{ email }}. please open it and
          click the button inside to confirm your subscription
        </p>
      </div>
      <button
        @click.prevent="confirm = false"
        class="w-full px-2 py-4 mt-10 max-lg:flex max-lg:self-end max-lg:justify-center rounded-lg bg-DarkSlateGrey hover:bg-gradient-to-r hover:from-[#FF5377] hover:to-[#FF673E] text-White"
      >
        Dismiss Message
      </button>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useRouter, useRoute } from "vue-router"
import { useWindowSize } from "@vueuse/core"
const email = ref<string>("")
const confirm = ref<boolean>(true)
const errorMsg = ref<string>("")
const router = useRouter()
const { width } = useWindowSize()

const imgResponsive = computed(() => {
  if (width.value < 1024) {
    return "/images/illustration-sign-up-mobile.svg"
  } else {
    return "/images/illustration-sign-up-desktop.svg"
  }
})

const submit = async () => {
  errorMsg.value = ""
  if (email.value && email.value.includes("@") && email.value.includes(".")) {
    confirm.value = true
  } else {
    errorMsg.value = "Valid email required!"
  }
}
</script>

<style scoped></style>
