# Маршрутизация и роутинг в Next.js

## Вложенная маршрутизация (Nested Routes)

/blog - родительский маршрут
/blog/first и /blog/second - дочерние маршруты

Структура URL: `/blog/first`, `/blog/second`

```
app/
├── blog/
│   ├── page.tsx          # /blog - главная страница блога
│   ├── first/
│   │   └── page.tsx      # /blog/first - блог 1
│   └── second/
│       └── page.tsx      # /blog/second - блог 2
```

## Динамические маршруты

/products - родительский маршрут
/products/[productId] - дочерние динамические маршруты

Структура URL: `/products/123`

```
app/
├── products/
│   ├── page.tsx          # /products - список товаров
│   └── [productId]/
│       └── page.tsx      # /products/123 - страница товара 123
```

## Вложенные динамические маршруты

/posts                                # родительский маршрут
/posts/[postId]                       # дочерний динамический маршрут вложенность 1
/posts/[postId]/comments              # прослойка
/posts/[postId]/comments/[commentId]  # дочерний динамический маршрут вложенность 2

Структура URL: `/posts/[postId]/comments/[commentId]`

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
