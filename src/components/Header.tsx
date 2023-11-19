import { Button } from "@/components/ui/button";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import LogInBtn from "./LogInBtn";

export default function Header() {
  return (
    <header className="border-b-4 py-3">
      <div className="mx-auto flex items-center justify-around">
        <h2 className="text-xl cursor-pointer">Header</h2>
        <div className="flex justify-end space-x-3">
          <LogInBtn />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
