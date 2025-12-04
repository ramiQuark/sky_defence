<script setup>
import { ref } from "vue";

const activeIndex = ref(0);

const toggleDirection = index => {
    activeIndex.value = index
}
</script>

<template>

    <section class="directions y-spacing main-container" id="directions">
        <div class="title-container">
            <h3 class="title-lg">Основные направления</h3>
        </div>
        <div class="directions-container">
            <div class="direction" :class="{ active: activeIndex === 0 }" @click.prevent="toggleDirection(0)">
                <div class="direction-image">
                    <img src="/img/direction-1.png" alt="">
                </div>
                <div class="direction-content">
                    <h4 class="title-md">Радиоэлектронная борьба (РЭБ)</h4>
                    <ul>
                        <li>
                            <div class="list-line">|</div>
                            <p>Антидроновые комплексы (DroneDefender-4PC)</p>
                        </li>
                        <li>
                            <div class="list-line">|</div>
                            <p>Мобильные и стационарные РЭБ-системы</p>
                        </li>
                        <li>
                            <div class="list-line">|</div>
                            <p>Модули и ПО для интеграции</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="direction" :class="{ active: activeIndex === 1 }" @click.prevent="toggleDirection(1)">
                <div class="direction-image">
                    <img src="/img/direction-2.png" alt="">
                </div>
                <div class="direction-content">
                    <h4 class="title-md">Системы безопасности</h4>
                    <ul>
                        <li>
                            <div class="list-line">|</div>
                            <p>Видеонаблюдение</p>
                        </li>
                        <li>
                            <div class="list-line">|</div>
                            <p>Системы контроля доступа</p>
                        </li>
                        <li>
                            <div class="list-line">|</div>
                            <p>Интеграция охранных решений</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="direction" :class="{ active: activeIndex === 2 }" @click.prevent="toggleDirection(2)">
                <div class="direction-image">
                    <img src="/img/direction-3.png" alt="">
                </div>
                <div class="direction-content">
                    <h4 class="title-md">Связь и коммуникации</h4>
                    <ul>
                        <li>
                            <div class="list-line">|</div>
                            <p>Радиостанции Motorola и аналоги</p>
                        </li>
                        <li>
                            <div class="list-line">|</div>
                            <p>Корпоративные сети связи</p>
                        </li>
                        <li>
                            <div class="list-line">|</div>
                            <p>Техническое обслуживание</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="direction" :class="{ active: activeIndex === 3 }" @click.prevent="toggleDirection(3)">
                <div class="direction-image">
                    <img src="/img/direction-4.png" alt="">
                </div>
                <div class="direction-content">
                    <h4 class="title-md">Разработка ПО</h4>
                    <ul>
                        <li>
                            <div class="list-line">|</div>
                            <p>Единая интеллектуальная платформа</p>
                        </li>
                        <li>
                            <div class="list-line">|</div>
                            <p>Интеграция камер, доступа, связи и РЭБ</p>
                        </li>
                        <li>
                            <div class="list-line">|</div>
                            <p>Аналитика и AI для прогнозирования угроз</p>
                        </li>
                        <li>
                            <div class="list-line">|</div>
                            <p>Мобильные и облачные решения</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

</template>
