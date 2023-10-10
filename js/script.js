// Показать прелоадер при начале загрузки информации
function showLoader() {
    document.getElementById("loader").classList.add("loader-visible");
}

// Пример асинхронной загрузки информации (замените этот код на реальную логику)
function loadInformation() {
    showLoader();

    // Здесь можно добавить логику загрузки данных
    setTimeout(function () {
        // После загрузки данных скрываем прелоадер
        hideLoader();
    }, 2000); // Просто для имитации задержки загрузки, замените на реальное время загрузки
}

// Скрыть прелоадер при завершении загрузки информации
function hideLoader() {
    document.getElementById("loader").classList.remove("loader-visible");
}

// Вызываем функцию загрузки информации
loadInformation();