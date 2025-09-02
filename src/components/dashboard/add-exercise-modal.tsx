"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function AddExerciseModal() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Simulação de adição de exercício
    toast({
      title: "Exercício Adicionado!",
      description: "O novo exercício já está disponível na biblioteca.",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Adicionar Novo Exercício
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Adicionar Novo Exercício</DialogTitle>
            <DialogDescription>
              Preencha os detalhes do novo exercício para adicioná-lo à
              biblioteca.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nome
              </Label>
              <Input id="name" defaultValue="Novo Exercício" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="muscleGroup" className="text-right">
                Grupo Muscular
              </Label>
              <Input id="muscleGroup" defaultValue="Peito" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="instructions" className="text-right pt-2">
                Instruções
              </Label>
              <Textarea id="instructions" placeholder="Descreva como executar o exercício." className="col-span-3" required />
            </div>
             <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="picture" className="text-right">
                Imagem
              </Label>
              <Input id="picture" type="file" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Salvar Exercício</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
