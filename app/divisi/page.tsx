"use client";
import ModalDivisi from "@/components/modalDivisi";
import { useState } from "react";

function page() {
  const [open, setIsOpen] = useState(true);
  return <ModalDivisi isOpen={open} />;
}

export default page;
