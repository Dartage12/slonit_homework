function secretNumberGame() {
    // Первый компьютер загадывает число
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Компьютер 1 загадал число: ${secretNumber}.`);

    // Второй компьютер пытается угадать
    let low = 1;
    let high = 100;
    let guess = null;
    let attempts = 0;

    while (guess !== secretNumber) {
        guess = Math.floor((low + high) / 2); // Бинарный поиск
        attempts++;
        console.log(`Компьютер 2: Пробую число ${guess}.`);

        if (guess < secretNumber) {
            console.log("Компьютер 1: Больше.");
            low = guess + 1;
        } else if (guess > secretNumber) {
            console.log("Компьютер 1: Меньше.");
            high = guess - 1;
        } else {
            console.log("Компьютер 1: Угадал!");
        }
    }

    console.log(`Число угадано за ${attempts} попыток.`);
}

// Запуск игры
secretNumberGame();
