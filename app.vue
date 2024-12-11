<script lang="ts" setup>
const link = "https://xn--80aabtwbbuhbiqdxddn.xn--p1ai/";

const colorMode = useColorMode();
colorMode.preference = "dark";

useHead({
    title: "Результаты первого этапа - Олимпиада PROD",
    meta: [
        {
            name: "description",
            content:
                "Для просмотра результатов первого (отборочного) тура нажмите на кнопку ниже",
        },
        {
            name: "og:title",
            content: "Результаты первого этапа - Олимпиада PROD",
        },
        {
            name: "og:description",
            content:
                "Для просмотра результатов первого (отборочного) тура нажмите на кнопку ниже",
        },
        {
            name: "og:image",
            content:
                "https://cdn.tbank.ru/static/pages/files/97254c3e-ebd3-4cf7-be9b-d3587d1d6d0f.png",
        },
    ],
    link: [
        {
            rel: "icon",
            href: "/icon.png",
        },
    ],
});

const loading = ref(false);
const openLink = () => {
    loading.value = true;

    setTimeout(() => {
        window.open(link, "_blank");
        loading.value = false;
    }, 1000);
};
</script>

<template>
    <div class="w-full max-w-[1150px] mx-auto py-[27px] space-y-12 px-4">
        <header class="flex items-center">
            <img
                src="https://cdn.tbank.ru/static/pfa-multimedia/images/c078e598-f73e-49ff-be9d-8ec2b6646935.svg"
                alt="Т-Банк"
                data-schema-path="logo"
                data-item-name="/"
                class="bb5--5CsLR"
                data-test="logoImage"
            />
        </header>

        <div class="flex gap-4 flex-wrap lg:flex-nowrap">
            <UCard
                :ui="{ base: '!bg-white', rounded: 'rounded-3xl' }"
                class="w-full lg:w-auto"
            >
                <h2 class="text-2xl font-semibold text-black mb-4">
                    Результаты 2024/25
                </h2>
                <p class="text-black mb-4">
                    Для просмотра результатов первого (отборочного) тура нажмите
                    на кнопку ниже
                </p>
                <UButton size="lg" :loading="loading" @click="openLink"
                    >Посмотреть результаты</UButton
                >
            </UCard>
            <img
                class="flex-shrink-0 w-full lg:w-auto"
                src="https://cdn.tbank.ru/static/pages/files/63590dab-5c18-499f-ba9e-438eee4d5877.webp"
                alt="Lotty"
            />
        </div>
        <NuxtRouteAnnouncer />
    </div>
</template>

<style lang="scss">
@font-face {
    font-family: "dsText";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("https://www.cdn-tinkoff.ru/frontend-libraries/npm/react-kit-font/1.0.0/NeueHaasUnicaW1G-Regular.woff2")
        format("woff2");
}

body {
    font-family: "dsText", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    --bg: #00402e;
    background-color: var(--bg);
}
</style>
