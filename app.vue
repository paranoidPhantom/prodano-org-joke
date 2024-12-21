<script lang="ts" setup>
import { useLocalStorage } from "@vueuse/core";
const link = "https://xn--80aabtwbbuhbiqdxddn.xn--p1ai/";

const colorMode = useColorMode();
colorMode.preference = "dark";

useHead({
    title: "Результаты второго этапа - Олимпиада PROD",
    meta: [
        {
            name: "description",
            content:
                "Первое соревнование с практикой по промышленной разработке для школьников 8 — 11 классов",
        },
        {
            name: "og:title",
            content: "Результаты второго этапа - Олимпиада PROD",
        },
        {
            name: "og:description",
            content:
                "Первое соревнование с практикой по промышленной разработке для школьников 8 — 11 классов",
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

const memes = [
    {
        weight: 1,
        file: "/results/jeff.mp4",
    },
    {
        weight: 4,
        file: "/results/boo.mp4",
    },
    {
        weight: 4,
        file: "/results/stick.mp4",
    },
    {
        weight: 4,
        file: "/results/closing.mp4",
    },
    { weight: 4, file: "/results/beer.mp4" },
    { weight: 4, file: "/results/ahmed.mp4" },
    { weight: 4, file: "/results/slavery.mp4" },
    { weight: 4, file: "/results/lmao.mp4" },
    { weight: 4, file: "/results/gn.mp4" },
    { weight: 4, file: "/results/poland.mp4" },
    { weight: 4, file: "/results/race.mp4" },
    { weight: 4, file: "/results/re.mp4" },
    { weight: 4, file: "/results/it.MP4" },
    { weight: 4, file: "/results/magic.MP4" },
    { weight: 4, file: "/results/rap.mp4" },
    { weight: 4, file: "/results/wistle.mp4" },
    { weight: 4, file: "/results/360.mp4" },
    { weight: 4, file: "/results/blue.MP4" },
    { weight: 4, file: "/results/freddy.mp4" },
    { weight: 4, file: "/results/cuc.MP4" },
    { weight: 4, file: "/results/borya.mp4" },
    { weight: 4, file: "/results/mater.mp4" },
    { weight: 4, file: "/results/dano1.mp4" },
    { weight: 4, file: "/results/mayo.mp4" },
    {
        weight: 30,
        file: "/results/rick.mp4",
    },
];

const loading = ref(false);
const showFooter = useLocalStorage("showFooter", () => false);
const video = ref<HTMLVideoElement | null>(null);
const state = reactive({
    isOpen: false,
    file: "",
});

const doAction = () => {
    const totalWeight = memes.reduce((acc, meme) => acc + meme.weight, 0) + 1;
    let random = Math.random() * totalWeight;
    if (random < 1) {
        window.open(link, "_blank");
        return;
    } else {
        random -= 1;
        const meme = memes.find((meme) => {
            random -= meme.weight;
            return random < 0;
        });
        if (meme) {
            state.file = meme.file;
        }
    }
    loading.value = true;

    if (state.file) {
        const prefetch = document.createElement("link");
        prefetch.rel = "prefetch";
        prefetch.href = state.file;
        document.head.appendChild(prefetch);
    }

    setTimeout(() => {
        state.isOpen = true;
        setTimeout(() => {
            if (video.value) video.value.play();
        }, 10);
        loading.value = false;
        showFooter.value = true;
    }, 1500);
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
                    Для просмотра результатов второго (отборочного) тура нажмите
                    на кнопку ниже
                </p>
                <UButton size="lg" :loading="loading" @click="doAction"
                    >Посмотреть результаты</UButton
                >
            </UCard>
            <img
                class="flex-shrink-0 w-full lg:w-auto"
                src="https://cdn.tbank.ru/static/pages/files/63590dab-5c18-499f-ba9e-438eee4d5877.webp"
                alt="Lotty"
            />
        </div>

        <footer
            v-if="showFooter"
            class="bg-tyellow-500 p-4 rounded-2xl flex items-center justify-between"
        >
            <p class="text-black text-opacity-50">
                &copy; {{ new Date().getFullYear() }} -
                <NuxtLink to="https://hudalla.dev">Андрей Худалла</NuxtLink>
            </p>
            <NuxtLink to="https://github.com/paranoidPhantom/proooood">
                <UIcon class="text-black" name="mdi:github" />
            </NuxtLink>
        </footer>

        <UModal v-model="state.isOpen">
            <video
                ref="video"
                class="rounded-lg"
                :src="state.file"
                autoplay
                @ended="state.isOpen = false"
            />
            <div class="p-2">
                👉

                <UButton size="xs" to="https://forms.gle/K1DVhe1QZ7xgBTnx7">
                    предложить свои резы
                </UButton>
            </div>
        </UModal>

        <NuxtRouteAnnouncer />
    </div>
</template>

<style lang="scss">
@font-face {
    font-family: "Tinkoff";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/TinkoffSansText-Regular.woff2") format("woff2");
}

body {
    font-family: "Tinkoff", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;

    --bg: #00402e;
    background-color: var(--bg);
}
</style>
