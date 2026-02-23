import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#F5F8F6] relative pt-20">
            <Navbar solid={true} />
            <Contact />
        </main>
    );
}
