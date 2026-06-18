import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Mail, Send, Download } from "lucide-react";
import SectionHeading from "./section-heading";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { socials } from "@/data/portfolio";
import GithubPrimary from "@/assets/github-primary.png";
import LinkedinPrimary from "@/assets/linkedin-primary.png";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success(t("contact.sent"));

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="relative flex items-center justify-center py-24 px-4 md:px-12">
      <div className="container max-w-6xl">
        <SectionHeading eyebrow={t("contact.eyebrow")} title={t("contact.title")} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-5 gap-6"
        >
          <Card className="md:col-span-2 p-6 glass flex flex-col gap-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("contact.description")}
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${socials.email}`}
                className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary transition-smooth"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">{socials.email}</span>
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary transition-smooth"
              >
                <img src={GithubPrimary} alt="github" className="h-4 w-4" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary transition-smooth"
              >
                <img src={LinkedinPrimary} alt="linkedin" className="h-4 w-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
            <Button variant="outline" className="mt-auto glass hover:bg-primary/10 hover:border-primary transition-all duration-300">
              <a href="/CV_RAFI.pdf" className="flex gap-1 justify-center items-center hover:cursor-pointer w-full" download>
                <Download className="mr-2 h-4 w-4" />
                {t("contact.downloadCv")}
              </a>
            </Button>
          </Card>

          <Card className="md:col-span-3 p-6 glass flex flex-col">
            <form onSubmit={onSubmit} className="flex flex-col flex-1">
              <div className="space-y-4 flex-1">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">{t("contact.name")}</Label>
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">{t("contact.email")}</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full gradient-primary text-primary-foreground border-0 shadow-elegant hover:shadow-glow hover:-translate-y-0.5 cursor-pointer transition-smooth"
              >
                <Send className="mr-2 h-4 w-4" />
                {loading ? "Loading..." : t("contact.send")}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}