"use client";
import React from "react";
import ContactHero from "@/app/contato/ContactHero";
import ContactForm from "@/app/contato/ContactForm";
import ContactAddresses from "@/app/contato/ContactAddresses";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactAddresses />
    </main>
  );
}
