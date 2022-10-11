<template>
  <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-sm font-medium text-indigo-600">
            <a href="#" class="hover:underline"> {{ article }} </a>
          </p>
          <a href="#" class="block mt-2">
            <p class="text-xl font-semibold text-gray-900">
              {{ title }}
            </p>
            <p class="mt-3 text-base text-gray-500">
              {{ subject }}
            </p>
          </a>
        </div>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <a href="#">
              <span class="sr-only">{{ author }}</span>
              <img
                class="h-10 w-10 rounded-full"
                
                :src="image"
                alt=""
              />
            </a>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              <a href="#" class="hover:underline"> {{ author }} </a>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="2020-03-16"> {{ date }}</time>
              <span aria-hidden="true"> &middot; </span>
              <span>{{ readingTime }} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  article: {
    type: string;
    required: true;
  };
  title: {
    type: string;
    required: true;
  };
  subject: {
    type: string;
    required: true;
  };
  author: {
    type: string;
    required: true;
  };
  date: {
    type: string;
    required: true;
  };
  readingTime: {
    type: string;
    required: true;
  };
  image: {
    type: string;
    required: true;
  };
}>();
</script>
