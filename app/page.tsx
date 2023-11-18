import { Button } from "@/components/ui/button";
import { ModeToggle } from "./components/ModeToggle";

export default function Home() {
  return (
    <div>
      <ModeToggle />
      <Button>Envoyer</Button>
    </div>
  )
}