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

/blog - родительский маршрут
/products/[productId] - дочерние динамические маршруты

Структура URL: `/products/123`

```
app/
├── products/
│   ├── page.tsx          # /products - список товаров
│   └── [productId]/
│       └── page.tsx      # /products/123 - страница товара 123
```

### Пример реализации:

```tsx

```

## Вложенные динамические маршруты

Структура URL: `/products/electronics/123`

```
app/
├── products/
│   ├── page.tsx                 # /products - список категорий
│   ├── [category]/
│   │   ├── page.tsx             # /products/electronics - список товаров в категории
│   │   └── [productId]/
│   │       └── page.tsx         # /products/electronics/123 - страница товара 123
```

### Пример реализации:

```tsx
async function ProductPage({
  params,
}: {
  params: Promise<{
    category: string;
    productId: string;
  }>;
}) {
  const { category, productId } = await params;

  return (
    <div>
      <h1>Категория: {category}</h1>
      <p>Товар ID: {productId}</p>
    </div>
  );
}

export default ProductPage;
```
