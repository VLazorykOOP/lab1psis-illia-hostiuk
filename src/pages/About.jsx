export default function About() {
    return (
        <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h1 className="text-2xl md:text-3xl font-bold">Про проект</h1>
            <p className="mt-2 text-gray-700">
                Сайт на 3 сторінки для ЛР-1.
            </p>
            <ul className="list-disc pl-6 mt-3 text-gray-700">
                <li>Фреймворк: React (Vite)</li>
                <li>Стилізація: Tailwind CSS</li>
                <li>Контейнер: Docker</li>
                <li>Веб-сервер: Nginx</li>
            </ul>
        </section>
    )
}