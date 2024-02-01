<template>
  <main class="flex items-center justify-center h-screen bg-Charcoal-Grey">
    <section class="max-w-[500px] bg-White px-16 py-10 rounded-3xl">
      <img
        src="/images/icon-success.svg"
        class="w-[60px] h-[60px] object-contain"
        alt=""
      />
      <h1 class="mt-10 text-6xl font-bold text-DarkSlateGrey">
        Thanks for subscribing!
      </h1>
      <p class="mt-5 text-base">
        A confirmation email has been sent to email. please open it and click
        the button inside to confirm your subscription
      </p>
      <button
        class="w-full px-2 py-4 mt-10 rounded-lg bg-DarkSlateGrey hover:bg-gradient-to-r hover:from-[#FF5377] hover:to-[#FF673E] text-White"
      >
        Dismiss Message
      </button>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
