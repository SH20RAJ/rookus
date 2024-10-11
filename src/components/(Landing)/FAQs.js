import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQs() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl text-left text-2xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is Rookus eco-friendly?</AccordionTrigger>
        <AccordionContent>
          Yes. Rookus is committed to sustainability by using eco-friendly materials and processes. We ensure that our supply chain is optimized to reduce waste and our products are made from recycled or sustainable materials. Our goal is to minimize our carbon footprint and contribute positively to the environment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I customize my clothing?</AccordionTrigger>
        <AccordionContent>
          Absolutely. Our AI-powered platform allows for personalized custom clothing experiences. You can choose from a variety of styles, colors, and materials to create a piece that truly reflects your personal style. Our intuitive design interface makes it easy for anyone to become a fashion designer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How does Rookus use AI?</AccordionTrigger>
        <AccordionContent>
          Rookus uses AI to generate fashion designs and predict trends, enhancing your shopping experience. Our AI algorithms analyze current fashion trends and customer preferences to suggest designs that are both stylish and personalized. This technology also helps us streamline production and reduce waste by predicting demand more accurately.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What is the delivery time for custom orders?</AccordionTrigger>
        <AccordionContent>
          Our delivery time for custom orders is typically 4 days. We have optimized our production and logistics processes to ensure that your custom clothing is delivered to you as quickly as possible without compromising on quality. You can track your order in real-time through our platform.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>What materials are used in Rookus products?</AccordionTrigger>
        <AccordionContent>
          Rookus products are made from a variety of high-quality, sustainable materials. We prioritize the use of organic cotton, recycled polyester, and other eco-friendly fabrics. Our commitment to quality ensures that our products are not only stylish but also durable and comfortable to wear.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
