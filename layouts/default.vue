<template>
    <div>
        <Navbar></Navbar>
        <NuxtPage />
    </div>
</template>

<script setup>
await useFetch('http://localhost:3000/api/success')
await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>

<style>

</style>