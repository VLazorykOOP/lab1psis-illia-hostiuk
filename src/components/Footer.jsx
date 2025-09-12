export default function Footer() {
    return (
        <footer className="mt-8 border-t bg-white">
            <div className="container mx-auto px-4 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
                <p className="opacity-80">© {new Date().getFullYear()}</p>
                <p className="opacity-80">
                    Створив <span className="font-semibold">Hostiuk Ilya</span>, студент групи <span className="font-semibold">541м</span>.
                </p>
            </div>
        </footer>
    )
}