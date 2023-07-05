<template>
    <div>
        <Navbar></Navbar>
        {{ data[0] }} <br>
        {{ success }}
        <NuxtPage />
    </div>
</template>

<script setup>
const { data } = await useFetch('https://jsonplaceholder.typicode.com/posts')
const { data: success } = await useFetch('http://localhost:3000/api/success')
</script>

<style></style>