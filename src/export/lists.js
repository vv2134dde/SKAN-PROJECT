export const navList = [
    {
        id: 1,
        name: "Главная",
        link: "/"
    },
    {
        id: 2,
        name: "Тарифы",
        link: "/tariff"
    },
    {
        id: 3,
        name: "FAQ",
        link: "/FAQ"
    },
]

export const oauthList = [
    {
        id: 1,
        name: "google",
        img: "/media/resources/oauth-google.svg"
    },
    {
        id: 2,
        name: "facebook",
        img: "/media/resources/oauth-facebook.svg"
    },
    {
        id: 3,
        name: "yandex",
        img: "/media/resources/oauth-yandex.svg"
    },
]

export const tagList = [
    {
        id: 1,
        name: "Технические новости",
        color: "--color-secondary-1"
    },
    {
        id: 2,
        name: "Сводки новостей",
        color: "--color-secondary-2"
    },
    {
        id: 3,
        name: "Анонсы и события",
        color: "--color-secondary-3"
    },
]

export const tariffList = [
    {
        id: 1,
        title: "Beginner",
        titleDescription: "Для небольшого исследования",
        price: "799",
        oldPrice: "1 200",
        installmentPlanPrice: "150",
        tariffIncludes: [
            "Безлимитная история зaпросов",
            "Безопасная сделка",
            "Поддержка 24/7"
        ],
        picked: false,
        contentStyle: 
        {
            borderColor: "none",
        },
        titleStyle: 
        {
            backgroundImage: "url('media/resources/tariff-begginer.svg')",
            backgroundColor: "var(--color-secondary-1)",
            backgroundPosition: "right 15px top 11px",
        },
        pickedStyle:
        {
            border: "3px var(--color-secondary-1) solid",
        }
    },
    {
        id: 2,
        title: "Pro",
        titleDescription: "Для HR и фрилансеров",
        price: "1 299",
        oldPrice: "2 600",
        installmentPlanPrice: "279",
        tariffIncludes: 
        [
            "Все пункты тарифа Beginner",
            "Экспорт истории",
            "Рекомендации по приоритетам"
        ],
        picked: true,
        titleStyle: 
        {
            backgroundImage: "url('media/resources/tariff-pro.svg')",
            backgroundColor: "var(--color-secondary-2)",
            backgroundPosition: "right 12px top -4px",
        },
        pickedStyle:
        {
            border: "3px var(--color-secondary-2) solid",
        }
    },
    {
        id: 3,
        title: "Business",
        titleDescription: "Для корпоративных клиентов",
        price: "2 379",
        oldPrice: "3 700",
        installmentPlanPrice: false,
        tariffIncludes: 
        [
            "Все пункты тарифа Pro",
            "Безлимитное количество запросов",
            "Приоритетная поддержка"
        ],
        picked: false,
        titleStyle: 
        {
            backgroundImage: "url('media/resources/tariff-business.svg')",
            backgroundColor: "var(--color-black)",
            backgroundPosition: "right 5px top 23px",
            color: "var(--color-white)"
        },
        pickedStyle:
        {
            border: "3px var(--color-black) solid",
        }
    },
]

export const slideWhyUsList = [
    {
        id: 1,
        img: "media/resources/why-us-slide-1.svg",
        content: "Высокая и оперативная скорость обработки заявки"
    },
    {
        id: 2,
        img: "media/resources/why-us-slide-2.svg",
        content: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"
    },
    {
        id: 3,
        img: "media/resources/why-us-slide-3.svg",
        content: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"
    },
    {
        id: 4,
        img: "media/resources/why-us-slide-1.svg",
        content: "Высокая и оперативная скорость обработки заявки"
    },
    {
        id: 5,
        img: "media/resources/why-us-slide-2.svg",
        content: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"
    },
    {
        id: 6,
        img: "media/resources/why-us-slide-3.svg",
        content: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"
    },
]