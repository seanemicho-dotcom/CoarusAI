import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntakeForm from "@/components/IntakeForm";

export default function FindTools() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-6">
        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
}
