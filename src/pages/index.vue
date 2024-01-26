<script setup lang="ts">

</script>

<template>
    <div class="max-w-[1200px] mx-auto px-4 mt-[70px] lg:mt-24">

        <!-- slider -->
        <div class="imgSlider py-6 ">

            <v-carousel cycle :show-arrows="true" height="300" delimiter-icon="mdi-icon">
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
            </v-carousel>


        </div>


        <div class="cards py-4">
            <div
                class="card grid mx-auto  sm:grid-cols-2 sm:max-w-[600px] md:grid-cols-4 md:max-w-[800px] md:text-7xl lg:max-w-[1000px] flex-wrap text-white text-center ">
                <router-link to="/clinics" class="cardItem hover:text-white">
                    <span><font-awesome-icon icon="fa-house-medical" /></span>
                    <h3>درمانگاه ها</h3>
                </router-link>
                <router-link to="/turns" class="cardItem hover:text-white">
                    <span><font-awesome-icon icon="fa-people-group" /></span>
                    <h3> نوبت دهی</h3>
                </router-link>
                <router-link to="/doctors" class="cardItem hover:text-white">
                    <span><font-awesome-icon icon="fa-user-doctor" /></span>
                    <h3> پزشکان</h3>
                </router-link>
                <router-link to="/answers" class="cardItem hover:text-white">
                    <span><font-awesome-icon icon="fa-ribbon" /></span>
                    <h3> جواب دهی</h3>
                </router-link>
            </div>
        </div>

        <div class="py-4">
            <div class="article">
                <h2 class="text-[26px]">اخبار سایت</h2>
                <div class="content my-4 md:flex gap-10">
                    <div class="article-img ">
                        <img class="rounded-xl mx-auto w-[85%] md:w-full md:max-w-lg" src="../assets/img/konkur.jpg" alt="">
                    </div>
                    <div class="article-info max-w-[700px] mx-auto w-[80%] text-justify ">
                        <div class="md:w-[85%] mx-auto my-6">
                            <h3>سرتیتر</h3>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                از طراحان گرافیک است چاپگرها و متون
                                بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                                کاربردهای متنوع
                                با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت
                                فراوان جامعه
                                و
                                متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
                                خلاقی و فرهنگ
                                پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                                راهکارها و
                                شرایط
                                سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.cardItem {
    @apply bg-[#4d93e9] m-2 p-3 rounded-xl cursor-pointer hover:opacity-80 transition-all duration-300
}

.cardItem span {
    @apply text-3xl
}

.cardItem h3 {
    @apply text-2xl mt-3
}

.article h2 {
    @apply relative before:content-[''] before:absolute before:bottom-0 before:w-[80px] before:h-[5px] before:bg-[#0046c0] before:rounded-md
}
</style>

