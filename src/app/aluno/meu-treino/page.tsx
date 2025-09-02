import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import Image from "next/image";
  import { PageHeader } from "@/components/shared/page-header";
  import { workoutPlans, exercises } from "@/lib/data";
  import { Youtube } from "lucide-react";
  
  export default function MyWorkoutPage() {
    const activePlan = workoutPlans.find((wp) => wp.isActive);
  
    if (!activePlan) {
      return (
        <>
          <PageHeader title="Meu Treino" />
          <p>Nenhuma ficha de treino ativa no momento.</p>
        </>
      );
    }
  
    return (
      <>
        <PageHeader
          title="Meu Treino"
          description={`Ficha atual: ${activePlan.name}`}
        />
  
        <Accordion type="single" collapsible className="w-full space-y-4">
          {activePlan.exercises.map((ex, index) => {
            const details = exercises.find((e) => e.id === ex.exerciseId);
            if (!details) return null;
  
            return (
              <AccordionItem value={`item-${index}`} key={ex.exerciseId} className="border-b-0">
                <AccordionTrigger className="p-4 bg-card rounded-lg border hover:no-underline text-left">
                  <div className="flex flex-col">
                    <span className="font-semibold text-base">{details.name}</span>
                    <span className="text-sm text-muted-foreground font-normal">
                      {ex.sets} séries de {ex.reps} repetições
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 bg-card rounded-b-lg border border-t-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative aspect-video">
                        <Image 
                            src={details.imageUrl}
                            alt={details.name}
                            fill
                            className="rounded-md object-cover"
                            data-ai-hint="gym exercise"
                        />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Instruções</h4>
                        <p className="text-muted-foreground text-sm">{details.instructions}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <h4 className="font-semibold">Carga</h4>
                            <p className="text-muted-foreground">{ex.load || "Livre"}</p>
                          </div>
                           <div>
                            <h4 className="font-semibold">Descanso</h4>
                            <p className="text-muted-foreground">{ex.rest}</p>
                          </div>
                      </div>
                      {details.videoUrl && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="secondary">
                                <Youtube className="mr-2 h-4 w-4"/>
                                Ver Vídeo de Execução
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>{details.name}</DialogTitle>
                            </DialogHeader>
                            <div className="aspect-video">
                                <iframe 
                                    src={details.videoUrl}
                                    title={`Vídeo de execução do ${details.name}`}
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                    className="w-full h-full rounded-md"
                                ></iframe>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </>
    );
  }
  