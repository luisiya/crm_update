const ROWS_PER_PAGE = 10;
let startRow = 0;
let endRow = ROWS_PER_PAGE;
let data = [
    {
        "id": 1,
        "name": "Помада Kylie",
        "category": "Косметика",
        "count": 259,
        "price": 299,
        "purchasePrice": 199,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-04-01",
        "weight": 0.3,
        "size": "1x1x5"
    },
    {
        "id": 2,
        "name": "Обезьянка",
        "category": "Игрушки",
        "count": 24,
        "price": 359,
        "purchasePrice": 150,
        "creationDate": "2018-02-05",
        "supplyDate": "2018-03-10",
        "weight": 0.6,
        "size": "40x40x30"
    },
    {
        "id": 3,
        "name": "Кофта",
        "category": "Одежда",
        "count": 52,
        "price": 300,
        "purchasePrice": 200,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-04-02",
        "weight": 1.1,
        "size": "40x40x50"
    },
    {
        "id": 4,
        "name": "Кроссовки",
        "category": "Обувь",
        "count": 100,
        "price": 999,
        "purchasePrice": 899,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-02-11",
        "weight": 3.8,
        "size": "35x20x18"
    },
    {
        "id": 5,
        "name": "Библия",
        "category": "Книги",
        "count": 500,
        "price": 55,
        "purchasePrice": 45,
        "creationDate": "2018-02-01",
        "supplyDate": "2017-03-01",
        "weight": 2,
        "size": "20x15x4"
    },
    {
        "id": 6,
        "name": "Мыло",
        "category": "Хоз.товары",
        "count": 500,
        "price": 15,
        "purchasePrice": 5,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-20",
        "weight": 0.5,
        "size": "8x4x2"
    },
    {
        "id": 7,
        "name": "Куртка",
        "category": "Кожа",
        "count": 5,
        "price": 5000,
        "purchasePrice": 4500,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 4.8,
        "size": "1000x1000x50"
    },
    {
        "id": 8,
        "name": "Ремень",
        "category": "Ремни",
        "count": 10,
        "price": 199,
        "purchasePrice": 189,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 1.2,
        "size": "1200x40x5"
    },
    {
        "id": 9,
        "name": "Энциклопедия",
        "category": "Книги",
        "count": 200,
        "price": 150,
        "purchasePrice": 50,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 5,
        "size": "300x20x5"
    },
    {
        "id": 10,
        "name": "Джинсы",
        "category": "Одежда",
        "count": 100,
        "price": 699,
        "purchasePrice": 599,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 3.4,
        "size": "1100x700x10"
    },
    {
        "id": 11,
        "name": "Лак MK",
        "category": "Косметика",
        "count": 1000,
        "price": 99,
        "purchasePrice": 79,
        "creationDate": "2018-03-18",
        "supplyDate": "2018-03-01",
        "weight": 0.4,
        "size": "1x1x5"
    },
    {
        "id": 12,
        "name": "Кеды",
        "category": "Обувь",
        "count": 155,
        "price": 499,
        "purchasePrice": 399,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 2.8,
        "size": "5x1x1"
    },
    {
        "id": 13,
        "name": "Шампунь",
        "category": "Хоз.товары",
        "count": 50,
        "price": 79,
        "purchasePrice": 69,
        "creationDate": "2018-02-05",
        "supplyDate": "2018-03-01",
        "weight": 1.5,
        "size": "21x12x3"
    },
    {
        "id": 14,
        "name": "Помада Loreal",
        "category": "Косметика",
        "count": 259,
        "price": 210,
        "purchasePrice": 199,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 0.3,
        "size": "1x1x5"
    },
    {
        "id": 15,
        "name": "Обезьянка",
        "category": "Игрушки",
        "count": 24,
        "price": 359,
        "purchasePrice": 150,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 0.6,
        "size": "40x40x30"
    },
    {
        "id": 16,
        "name": "Кофта",
        "category": "Одежда",
        "count": 52,
        "price": 300,
        "purchasePrice": 200,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 1.1,
        "size": "40x40x50"
    },
    {
        "id": 17,
        "name": "Кроссовки",
        "category": "Обувь",
        "count": 100,
        "price": 999,
        "purchasePrice": 899,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 3.8,
        "size": "35x20x18"
    },
    {
        "id": 18,
        "name": "Библия",
        "category": "Книги",
        "count": 500,
        "price": 55,
        "purchasePrice": 45,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 2,
        "size": "20x15x4"
    },
    {
        "id": 19,
        "name": "Мыло",
        "category": "Хоз.товары",
        "count": 500,
        "price": 15,
        "purchasePrice": 5,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 0.5,
        "size": "8x4x2"
    },
    {
        "id": 20,
        "name": "Куртка",
        "category": "Кожа",
        "count": 5,
        "price": 5000,
        "purchasePrice": 4500,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 4.8,
        "size": "1000x1000x50"
    },
    {
        "id": 21,
        "name": "Ремень",
        "category": "Ремни",
        "count": 10,
        "price": 199,
        "purchasePrice": 189,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 1.2,
        "size": "1200x40x5"
    },
    {
        "id": 22,
        "name": "Энциклопедия",
        "category": "Книги",
        "count": 200,
        "price": 150,
        "purchasePrice": 50,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 5,
        "size": "300x20x5"
    },
    {
        "id": 23,
        "name": "Джинсы",
        "category": "Одежда",
        "count": 100,
        "price": 699,
        "purchasePrice": 599,
        "creationDate": "2018-03-18",
        "supplyDate": "2018-03-01",
        "weight": 3.4,
        "size": "1100x700x10"
    },
    {
        "id": 24,
        "name": "Лак PNL",
        "category": "Косметика",
        "count": 1000,
        "price": 99,
        "purchasePrice": 79,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 0.2,
        "size": "1x1x5"
    },
    {
        "id": 25,
        "name": "Кеды",
        "category": "Обувь",
        "count": 155,
        "price": 499,
        "purchasePrice": 399,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 2.8,
        "size": "5x1x1"
    },
    {
        "id": 26,
        "name": "Шампунь",
        "category": "Хоз.товары",
        "count": 50,
        "price": 79,
        "purchasePrice": 69,
        "creationDate": "2018-02-05",
        "supplyDate": "2018-03-01",
        "weight": 1.5,
        "size": "21x12x3"
    },
    {
        "id": 27,
        "name": "Помада Dior",
        "category": "Косметика",
        "count": 259,
        "price": 750,
        "purchasePrice": 199,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 0.3,
        "size": "1x1x5"
    },
    {
        "id": 28,
        "name": "Обезьянка",
        "category": "Игрушки",
        "count": 24,
        "price": 359,
        "purchasePrice": 150,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 0.6,
        "size": "40x40x30"
    },
    {
        "id": 29,
        "name": "Кофта вязка",
        "category": "Одежда",
        "count": 52,
        "price": 300,
        "purchasePrice": 200,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 2.2,
        "size": "40x40x50"
    },
    {
        "id": 30,
        "name": "Кроссовки",
        "category": "Обувь",
        "count": 100,
        "price": 999,
        "purchasePrice": 899,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 3.8,
        "size": "35x20x18"
    },
    {
        "id": 31,
        "name": "Библия",
        "category": "Книги",
        "count": 500,
        "price": 55,
        "purchasePrice": 45,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 2,
        "size": "20x15x4"
    },
    {
        "id": 32,
        "name": "Мыло",
        "category": "Хоз.товары",
        "count": 500,
        "price": 15,
        "purchasePrice": 5,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 0.5,
        "size": "8x4x2"
    },
    {
        "id": 33,
        "name": "Куртка",
        "category": "Кожа",
        "count": 5,
        "price": 5000,
        "purchasePrice": 4500,
        "creationDate": "2018-02-05",
        "supplyDate": "2018-03-01",
        "weight": 4.8,
        "size": "1000x1000x50"
    },
    {
        "id": 34,
        "name": "Ремень",
        "category": "Ремни",
        "count": 10,
        "price": 199,
        "purchasePrice": 189,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 1.2,
        "size": "1200x40x5"
    },
    {
        "id": 35,
        "name": "Энциклопедия",
        "category": "Книги",
        "count": 200,
        "price": 150,
        "purchasePrice": 50,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 5,
        "size": "300x20x5"
    },
    {
        "id": 36,
        "name": "Джинсы",
        "category": "Одежда",
        "count": 100,
        "price": 699,
        "purchasePrice": 599,
        "creationDate": "2018-02-05",
        "supplyDate": "2018-03-01",
        "weight": 3.4,
        "size": "1100x700x10"
    },
    {
        "id": 37,
        "name": "Лак PNL",
        "category": "Косметика",
        "count": 1000,
        "price": 99,
        "purchasePrice": 79,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 0.2,
        "size": "1x1x5"
    },
    {
        "id": 38,
        "name": "Кеды",
        "category": "Обувь",
        "count": 155,
        "price": 499,
        "purchasePrice": 399,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 2.8,
        "size": "5x1x1"
    },
    {
        "id": 39,
        "name": "Шампунь",
        "category": "Хоз.товары",
        "count": 50,
        "price": 79,
        "purchasePrice": 69,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 1.5,
        "size": "21x12x3"
    },
    {
        "id": 40,
        "name": "Помада Dior",
        "category": "Косметика",
        "count": 259,
        "price": 750,
        "purchasePrice": 199,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 0.3,
        "size": "1x1x5"
    },
    {
        "id": 41,
        "name": "Обезьянка",
        "category": "Игрушки",
        "count": 24,
        "price": 359,
        "purchasePrice": 150,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 0.6,
        "size": "40x40x30"
    },
    {
        "id": 42,
        "name": "Кофта вязка",
        "category": "Одежда",
        "count": 52,
        "price": 300,
        "purchasePrice": 200,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 2.2,
        "size": "40x40x50"
    },
    {
        "id": 43,
        "name": "Кроссовки",
        "category": "Обувь",
        "count": 100,
        "price": 999,
        "purchasePrice": 899,
        "creationDate": "2018-02-05",
        "supplyDate": "2018-03-01",
        "weight": 3.8,
        "size": "35x20x18"
    },
    {
        "id": 44,
        "name": "Библия",
        "category": "Книги",
        "count": 500,
        "price": 55,
        "purchasePrice": 45,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 2,
        "size": "20x15x4"
    },
    {
        "id": 45,
        "name": "Мыло",
        "category": "Хоз.товары",
        "count": 500,
        "price": 15,
        "purchasePrice": 5,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 0.5,
        "size": "8x4x2"
    },
    {
        "id": 46,
        "name": "Куртка",
        "category": "Кожа",
        "count": 5,
        "price": 5000,
        "purchasePrice": 4500,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 4.8,
        "size": "1000x1000x50"
    },
    {
        "id": 47,
        "name": "Ремень",
        "category": "Ремни",
        "count": 10,
        "price": 199,
        "purchasePrice": 189,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 1.2,
        "size": "1200x40x5"
    },
    {
        "id": 48,
        "name": "Энциклопедия",
        "category": "Книги",
        "count": 200,
        "price": 150,
        "purchasePrice": 50,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 5,
        "size": "300x20x5"
    },
    {
        "id": 49,
        "name": "Джинсы",
        "category": "Одежда",
        "count": 100,
        "price": 699,
        "purchasePrice": 599,
        "creationDate": "2018-02-05",
        "supplyDate": "2018-03-01",
        "weight": 3.4,
        "size": "1100x700x10"
    },
    {
        "id": 50,
        "name": "Лак Odri",
        "category": "Косметика",
        "count": 1000,
        "price": 99,
        "purchasePrice": 79,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 0.3,
        "size": "1x1x5"
    },
    {
        "id": 51,
        "name": "Кеды",
        "category": "Обувь",
        "count": 155,
        "price": 499,
        "purchasePrice": 399,
        "creationDate": "2018-03-18",
        "supplyDate": "2018-03-01",
        "weight": 2.8,
        "size": "5x1x1"
    },
    {
        "id": 52,
        "name": "Шампунь",
        "category": "Хоз.товары",
        "count": 50,
        "price": 79,
        "purchasePrice": 69,
        "creationDate": "2018-02-01",
        "supplyDate": "2018-03-01",
        "weight": 1.5,
        "size": "21x12x3"
    }
];
