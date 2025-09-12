export default function Home() {
    return (
        <section className="grid gap-6">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h1 className="text-2xl md:text-3xl font-bold">Вітаю 👋</h1>
                <p className="mt-2 text-gray-700">
                    Це базовий 3-сторінковий сайт, створений з використанням Vite + React + Tailwind для лабораторної роботи.
                </p>
            </div>


            <div className="grid md:grid-cols-3 gap-4">
                {[
                    { title: 'Швидко', text: 'Vite дає миттєвий запуск і оновлення.' },
                    { title: 'Зручно', text: 'Tailwind робить стилі простими й швидкими.' },
                    { title: 'Легко розгорнути', text: 'Docker + Nginx запускають сайт без проблем.' },
                ].map((card, i) => (
                    <div key={i} className="rounded-2xl border bg-white p-5 shadow-sm">
                        <h3 className="font-semibold text-lg">{card.title}</h3>
                        <p className="mt-1 text-gray-700">{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}