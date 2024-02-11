<script>

export default {
    name: "AppLoader"
}

</script>

<template>
    <div class="container">
        <div class="half"></div>
        <div class="half"></div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    --r: 300px;
    height: var(--r);
    width: var(--r);
    /* border: 1px solid red; */
    // -webkit-box-reflect: below 2px linear-gradient(transparent 80%, rgba(0, 0, 0, 0.3));

    .half {
        width: inherit;
        height: inherit;
        position: absolute;
        /* border: 1px solid blue; */
        border-radius: 50%;
        animation: Loading 2s linear infinite;

        &::before {
            content: "";
            position: absolute;
            width: inherit;
            height: inherit;
            border-radius: 50%;
            background: linear-gradient(to top, transparent, #E8BA3B);
            background-size: calc(var(--r) / 2) var(--r);
            background-repeat: no-repeat;
            -webkit-mask: radial-gradient(circle, transparent 130px, #000 130px);
        }

        &::after {
            content: "";
            position: absolute;
            top: -2px;
            left: 50%;
            transform: translateX(-50%);
            width: 24px;
            height: 24px;
            color: #E8BA3B;
            background: currentColor;
            border-radius: 50%;
            box-shadow: 0 0 10px, 0 0 20px, 0 0 30px, 0 0 40px, 0 0 50px, 0 0 60px,
                0 0 70px, 0 0 80px, 0 0 90px, 0 0 100px;
            z-index: 10;
        }

        &:nth-child(2) {
            animation-delay: -1s;
            filter: hue-rotate(350deg);
        }
    }
}

@keyframes Loading {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>


