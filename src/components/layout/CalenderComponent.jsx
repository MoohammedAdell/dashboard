"use client";
import { useState } from "react";
import { Calendar } from "../ui/calendar";

export default function CalenderComponent() {
  const [date, setDate] = useState(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg max-h-120 w-full bg-transparent "
      captionLayout="dropdown"
    />
  );
}
