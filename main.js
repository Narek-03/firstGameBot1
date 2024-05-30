import * as PIXI from 'pixi.js';

// Создание приложения Pixi
const app = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

// Создание простого спрайта
const sprite = PIXI.Sprite.from('https://pixijs.io/examples/examples/assets/bunny.png');

// Центрирование спрайта
sprite.anchor.set(0.5);
sprite.x = app.view.width / 2;
sprite.y = app.view.height / 2;

// Добавление спрайта в сцену
app.stage.addChild(sprite);

// Добавление анимации
app.ticker.add((delta) => {
    sprite.rotation += 0.1 * delta;
});