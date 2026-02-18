# Инструкция по замене фото-placeholder'ов

## Где находятся placeholder'ы и как их заменить

Все placeholder'ы помечены комментариями `{/* TODO: Заменить на реальное фото: ... */}` в коде.

### 1. Hero-секция (главный экран)

**Файл:** `src/components/Hero.jsx`
**Строка:** ~100

**Что заменить:**
```jsx
<PhotoPlaceholder
  width={280}
  height={280}
  text="Фото профиля — заменить"
  className="rounded-full shadow-2xl"
/>
```

**На что заменить:**
```jsx
<img
  src="/images/hero-photo.jpg"
  alt="Владислав"
  className="rounded-full shadow-2xl"
  style={{
    width: 280,
    height: 280,
    objectFit: 'cover',
    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
    border: '4px solid white'
  }}
/>
```

**Требования к фото:**
- Квадратное (1:1)
- Минимум 560x560px (для Retina)
- Формат: JPG или PNG
- Хорошо смотрится в круглой обрезке

---

### 2. Секция "Обо мне"

**Файл:** `src/components/About.jsx`
**Строка:** ~35

**Что заменить:**
```jsx
<PhotoPlaceholder
  width={240}
  height={280}
  text="Фото 'Обо мне' — заменить"
/>
```

**На что заменить:**
```jsx
<img
  src="/images/about-photo.jpg"
  alt="Владислав за работой"
  style={{
    width: 240,
    height: 280,
    objectFit: 'cover',
    borderRadius: '4px'
  }}
/>
```

**Требования к фото:**
- Вертикальное (примерно 6:7)
- Минимум 480x560px
- Формат: JPG или PNG
- Можно использовать портретное фото или фото за работой

---

### 3. Секция "Рабочий процесс" (3 скриншота)

**Файл:** `src/components/WorkflowProcess.jsx`
**Строки:** ~53, ~82 (desktop и mobile версии)

**Что заменить:** 3 placeholder'а для скринов (Premiere Pro, After Effects, DaVinci Resolve)

**Desktop версия (~53):**
```jsx
<PhotoPlaceholder
  width={288}
  height={162}
  text={`Скрин ${screen.title}`}
  className="mb-3"
  style={{ aspectRatio: '16/9' }}
/>
```

**Mobile версия (~82):**
```jsx
<PhotoPlaceholder
  width={248}
  height={140}
  text={`Скрин ${screen.title}`}
  className="mb-3"
  style={{ aspectRatio: '16/9' }}
/>
```

**На что заменить (для обеих версий):**
```jsx
<img
  src={`/images/workflow-${i+1}.jpg`}
  alt={screen.title}
  className="mb-3"
  style={{
    width: '100%',
    height: 'auto',
    aspectRatio: '16/9',
    objectFit: 'cover',
    borderRadius: '4px'
  }}
/>
```

**Требования к фото:**
- Горизонтальное 16:9
- Минимум 576x324px для desktop, 496x280px для mobile
- Формат: JPG или PNG
- Скриншоты рабочих программ (Premiere Pro, After Effects, DaVinci Resolve)
- **Названия файлов:**
  - `/images/workflow-1.jpg` — Premiere Pro
  - `/images/workflow-2.jpg` — After Effects
  - `/images/workflow-3.jpg` — DaVinci Resolve

---

## Как добавить фото в проект

1. Создайте папку `public/images/` (если её нет)
2. Положите туда ваши фото с названиями:
   - `hero-photo.jpg` — круглое фото для Hero
   - `about-photo.jpg` — вертикальное фото для About
   - `workflow-1.jpg` — скрин Premiere Pro
   - `workflow-2.jpg` — скрин After Effects
   - `workflow-3.jpg` — скрин DaVinci Resolve

3. Замените код в соответствующих компонентах (см. выше)

4. Проверьте результат:
```bash
npm run dev
```

---

## Оптимизация фото (опционально)

Для лучшей производительности рекомендую:
- Сжать JPG до quality 80-85%
- Использовать WebP формат для современных браузеров
- Добавить lazy loading: `loading="lazy"` к `<img>`

**Пример с WebP:**
```jsx
<picture>
  <source srcSet="/images/hero-photo.webp" type="image/webp" />
  <img src="/images/hero-photo.jpg" alt="Владислав" ... />
</picture>
```
