<script setup>
import Header from '@/Components/Header.vue'
import Footer from '@/Components/Footer.vue'
import { Head } from '@inertiajs/vue3'

</script>

<template>

    <Head title="Технологии защиты для бизнеса и государства" />
    <Header />
    <main>
        <slot />
    </main>
    <Footer />

</template>
