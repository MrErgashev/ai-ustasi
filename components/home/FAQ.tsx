import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Platforma bepulmi?",
    a: "Ha, to'liq bepul. Hech qanday ro'yxatdan o'tish yoki to'lov talab qilinmaydi. Barcha 30 dars ochiq.",
  },
  {
    q: "Dasturlash bilimi kerakmi?",
    a: "Yo'q! Kurs noldan boshlanadi. Dasturlash bilmasangiz ham AI vositalari bilan ishlashni o'rganasiz.",
  },
  {
    q: "Qancha vaqt ketadi?",
    a: "Har bir dars 25-60 daqiqa. Butun kursni 2-4 haftada tugatish mumkin (kuniga 1-2 dars tezlikda).",
  },
  {
    q: "Progressim saqlanadimi?",
    a: "Ha, progress brauzeringizda avtomatik saqlanadi. Qayta kirsangiz, to'xtatgan joyingizdan davom etasiz.",
  },
  {
    q: "Mobil telefondan foydalansa bo'ladimi?",
    a: "Ha, platforma to'liq responsive — telefon, planshet va kompyuterda qulay ishlaydi.",
  },
]

export function FAQ() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="mb-6 text-center text-lg font-semibold">
          Tez-tez beriladigan savollar
        </h2>
        <Accordion className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-sm text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
