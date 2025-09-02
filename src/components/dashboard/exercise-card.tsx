import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Exercise } from '@/lib/types';

interface ExerciseCardProps {
    exercise: Exercise;
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
    return (
        <Card>
            <CardHeader className="p-0">
                <Image 
                    src={exercise.imageUrl} 
                    alt={exercise.name}
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover aspect-[3/2]"
                    data-ai-hint="gym exercise"
                />
            </CardHeader>
            <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg">{exercise.name}</CardTitle>
                    <Badge variant="secondary">{exercise.muscleGroup}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{exercise.instructions}</p>
            </CardContent>
        </Card>
    )
}
