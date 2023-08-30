<template>
  <FormKit
    type="form"
    @submit.prevent="submitHandler"
    :config="{
      classes: {
        form: 'flex flex-col items-center justify-center sm:justify-start sm:flex-row flex-wrap gap-5 w-3/4 pt-10',
        outer: 'w-full sm:w-auto basis-0 sm:basis-[calc(50%-0.75rem)]',
        message: 'text-accent',
        input:
          'w-full px-0 py-1 bg-light text-color border-b-2 border-accent-light dark:bg-dark dark:border-accent-dark focus:outline-none placeholder:text-dark/50 placeholder:dark:text-light/50',
        label: 'text-color font-medium',
      },
    }"
    :actions="false"
  >
    <FormKit
      type="text"
      placeholder="Your name"
      label="What’s your name?"
      name="Name"
      validation="required"
      validation-label="Your name"
    />
    <FormKit
      type="email"
      placeholder="Your email address"
      label="What’s your email?"
      name="Email"
      validation="email"
      validation-visibility="dirty"
    />
    <FormKit
      type="tel"
      placeholder="Your phone number (optional)"
      label="What’s your phone number?"
      name="Phone"
    />
    <FormKit
      type="select"
      label="What are you looking for?"
      placeholder="Choose service from a list"
      name="Service"
      :options="{
        des: 'Web Design',
        dev: 'Web Development',
        desdev: 'Web Design & Development',
        other: 'Other',
      }"
      validation="required"
      validation-label="Service"
      input-class="text-dark/50 dark:text-light/50"
    />
    <FormKit
      type="textarea"
      auto-height
      label="Tell me more about the project"
      placeholder="Project description"
      name="Project"
      validation="required"
      validation-label="Project description"
      outer-class="basis-0 sm:!basis-full"
    />
    <FormKit
      type="submit"
      label="Send"
      outer-class="$reset"
      input-class="$reset font-oxygen font-bold text-xs bg-accent-light text-light dark:text-dark dark:bg-accent-dark px-5 py-3 rounded-xl"
    />
  </FormKit>
</template>

<script setup lang="ts">
const submitHandler = async (fields: any) => {
  console.log(fields);
};
</script>

<style scoped></style>
