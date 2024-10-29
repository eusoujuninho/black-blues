import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <section className="text-center">
          <h3 className="">
            &copy; 2024 ANJA Digital - Todos os direitos reservados
          </h3>
        </section>
      </div>
    </footer>
  );
};
