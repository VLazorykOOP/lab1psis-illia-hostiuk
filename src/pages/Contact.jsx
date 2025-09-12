export default function Contact() {
    return (
        <section className="rounded-2xl border bg-white p-6 shadow-sm max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-bold">Контакти</h1>
            <p className="mt-2 text-gray-700">
                Демо форма.
            </p>


            <form className="mt-4 grid gap-4">
                <label className="grid gap-1">
                    <span className="text-sm">Ім'я</span>
                    <input className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-200"
                           placeholder="John Doe"/>
                </label>
                <label className="grid gap-1">
                    <span className="text-sm">Пошта</span>
                    <input type="email"
                           className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-200"
                           placeholder="you@example.com"/>
                </label>
                <label className="grid gap-1">
                    <span className="text-sm">Повідомлення</span>
                    <textarea
                        className="border rounded-lg p-2 min-h-[120px] focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Привіт!"/>
                </label>
                <button type="button"
                        className="rounded-xl px-4 py-2 bg-indigo-600 text-white font-medium hover:opacity-90 cursor-pointer">
                    Надіслати
                </button>
            </form>
        </section>
    )
}