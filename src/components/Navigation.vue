<template>
    <header class="flex ">
        <div class="branding flex">
            <img @click="redirect" src="@/assets/file-invoice-dollar-solid.png" alt="Image" />
        </div>
    </header>
</template>

<script>
export default {
    name: "Navigation",
    methods: {
        redirect() {
            this.$router.push({
                name: 'home'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    z-index: 99;
    flex-direction: row;
    background-color: #1e2139;

    @media(min-width:900px) {
        min-height: 100%;
        min-width: 90px;
        flex-direction: column;
        border-radius: 0 20px 20px 0;

    }

    .branding {
        border-radius: 0 20px 20px 0;
        background-color: #7c5dfa;
        justify-content: center;
        padding: 24px;
        cursor: pointer;

        @media(min-width:900px) {
            width: 100%;
        }

        img {
            width: auto;
            height: 30px;
        }
    }
}
</style>