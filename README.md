# Маршрутизация и роутинг в Next.js

<div align="center">

![Next Routing Interface](screenshots/next-routing.png)
_Интерфейс_

</div>

## Вложенная маршрутизация (Static Routes)

В разделе "Блог" реализована быстрая статическая навигация по вложенным станицам

```markdown
Структура URL: `/blog/first`, `/blog/second`

/blog                           # родительский маршрут
/blog/first и /blog/second      # дочерние маршруты
```

```markdown
app/
├── blog/
│   ├── page.tsx          # /blog - главная страница блога
│   ├── first/
│   │   └── page.tsx      # /blog/first - блог 1
│   └── second/
│       └── page.tsx      # /blog/second - блог 2
```

## Динамические маршруты (Dynamic Routes)

В разделе продукты используется навигация по страницам с ID-based URL количество которых может меняться динамически

```
Структура URL: `/products/123`

/products                       # родительский маршрут
/products/[productId]           # дочерние динамические маршруты
```

```
app/
├── products/
│   ├── page.tsx          # /products - список товаров
│   └── [productId]/
│       └── page.tsx      # /products/123 - страница товара 123
```

## Вложенные динамические маршруты (Dynamic Nested Routes)

На странице "Посты" используется комбинированный подход для навигации по постам и их комментариям, которые реализованы с помощью fetch запросов на [jsonpaceholder](https://jsonplaceholder.typicode.com/)


```
Структура URL: `/posts/[postId]/comments/[commentId]`

/posts                                    # родительский маршрут
/posts/[postId]                           # дочерний динамический маршрут вложенность 1
/posts/[postId]/comments                  # прослойка
/posts/[postId]/comments/[commentId]      # дочерний динамический маршрут вложенность 2
```

```
app/
├── posts/
│   ├── page.tsx                # /posts - список постов
│   └── [postId]/
│       ├── page.tsx            # /postId - страница поста
│       └── comments/
│           ├── page.tsx        # /comments - комментарии к посту postId
│           └── [commentId]/
│               └── page.tsx    # /comment - выбранный комментарий commentId к посту postId
```

## Перехватывающие маршруты (Catch-all Segments)

В разделе "Документация" реализован функциональный конструктор URL для демонстрации навигирования по глубоко вложенным, гибким структурам URL, количество уровней которых заранее неизвестно

<div align="center">

![Next Routing Interface](screenshots/next-routing-calc.png)
_Интерфейс конструктора_

</div>


```
Структура URL: `/docs/[...slug]`

/docs                       # родительский маршрут
/docs/js                    # дочерний динамический маршрут вложенность 1
/docs/js/react              # дочерний динамический маршрут вложенность 2
/docs/js/react/next         # дочерний динамический маршрут вложенность 3
```

```
app/
└── docs/
    ├── page.tsx            # /docs - оглавление
    └── [...slug]/
        └── page.tsx        # /docs/js/react/next/docs/server-components/12345

```
