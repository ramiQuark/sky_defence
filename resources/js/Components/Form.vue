<script setup>

</script>

<template>

    <section class="form y-spacing main-container" id="contacts">
        <div class="title-container">
            <h3 class="title-lg">Связаться с нами</h3>
            <p>Заполните форму, чтобы оставить заявку или запрос о партнёрстве — мы свяжемся с вами как можно скорее.</p>
        </div>
        <div class="form-container">
            <input class="input" type="text" placeholder="Имя">
            <input class="input" type="tel" placeholder="Телефон">
            <input class="input" type="email" placeholder="Электронная почта">
            <textarea class="input" name="" id="" cols="30" rows="10" placeholder="Ваши пожелания или вопросы"></textarea>
            <label class="policy" for="policy">
                <input class="checkbox" type="checkbox" name="" id="policy">
                <p>
                    Согласен с
                    <a href="">политикой конфиденциальности</a>
                </p>
            </label>
            <button class="btn btn-primary">Отправить</button>
        </div>
    </section>

</template>
