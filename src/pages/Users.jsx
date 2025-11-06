import { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ name: "", email: "" });
    const [message, setMessage] = useState("");

    const API_URL = `${window.location.origin}/api`;

    const fetchUsers = async () => {
        const res = await fetch(`${API_URL}/users`);
        const data = await res.json();
        setUsers(data);
    };

    const addUser = async (e) => {
        e.preventDefault();
        const res = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        if (res.ok) {
            setMessage("Користувача додано!");
            setForm({ name: "", email: "" });
            fetchUsers();
        } else setMessage("Помилка при додаванні користувача");
    };

    const deleteUser = async (id) => {
        const res = await fetch(`${API_URL}/users/${id}`, { method: "DELETE" });
        if (res.ok) fetchUsers();
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <section className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">
            <h1 className="text-2xl font-bold mb-4">Користувачі</h1>

            <form onSubmit={addUser} className="flex flex-col gap-3 mb-6">
                <input
                    className="border p-2 rounded"
                    placeholder="Ім’я"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    className="border p-2 rounded"
                    placeholder="Email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:opacity-90"
                >
                    Додати користувача
                </button>
                {message && <p className="text-sm text-green-600">{message}</p>}
            </form>

            <h2 className="text-xl font-semibold mb-2">Список користувачів:</h2>
            <ul className="space-y-2">
                {users.map((u) => (
                    <li
                        key={u.id}
                        className="flex justify-between items-center border-b py-2"
                    >
            <span>
              {u.name} — <span className="text-gray-500">{u.email}</span>
            </span>
                        <button
                            onClick={() => deleteUser(u.id)}
                            className="text-red-500 hover:underline"
                        >
                            Видалити
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
