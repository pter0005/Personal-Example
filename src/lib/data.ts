import type { Student, Exercise, WorkoutPlan, PhysicalAssessment, ScheduleEntry } from './types';

export const MOCK_TRAINER_ID = 'trainer-1';

export const students: Student[] = [
  {
    id: 'student-1',
    name: 'Ana Silva',
    email: 'aluno@email.com',
    avatarUrl: 'https://picsum.photos/300/300',
    goal: 'Hipertrofia e definição muscular',
    physicalRestrictions: ['Leve desconforto no joelho direito ao agachar.'],
    trainerId: MOCK_TRAINER_ID,
  },
  {
    id: 'student-2',
    name: 'Bruno Costa',
    email: 'bruno.costa@example.com',
    avatarUrl: 'https://picsum.photos/301/301',
    goal: 'Perda de peso e melhora do condicionamento cardiorrespiratório',
    physicalRestrictions: [],
    trainerId: MOCK_TRAINER_ID,
  },
  {
    id: 'student-3',
    name: 'Carla Dias',
    email: 'carla.dias@example.com',
    avatarUrl: 'https://picsum.photos/302/302',
    goal: 'Aumento de força e resistência',
    physicalRestrictions: ['Evitar exercícios de alto impacto devido a dores na lombar.'],
    trainerId: MOCK_TRAINER_ID,
  },
    {
    id: 'student-4',
    name: 'Daniel Martins',
    email: 'daniel.martins@example.com',
    avatarUrl: 'https://picsum.photos/303/303',
    goal: 'Manutenção da saúde e bem-estar',
    physicalRestrictions: [],
    trainerId: MOCK_TRAINER_ID,
  },
];

export const exercises: Exercise[] = [
  { id: 'ex-1', name: 'Supino Reto', muscleGroup: 'Peito', instructions: 'Deite-se no banco, segure a barra com as mãos um pouco mais afastadas que a largura dos ombros. Desça a barra até o peito e empurre para cima.', imageUrl: 'https://picsum.photos/600/400', videoUrl: 'https://www.youtube.com/embed/sqOw2Y6uDWQ' },
  { id: 'ex-2', name: 'Agachamento Livre', muscleGroup: 'Pernas', instructions: 'Com a barra nos ombros, agache como se fosse sentar em uma cadeira, mantendo as costas retas. Volte à posição inicial.', imageUrl: 'https://picsum.photos/601/401', videoUrl: 'https://www.youtube.com/embed/1oed-UmAxFs' },
  { id: 'ex-3', name: 'Remada Curvada', muscleGroup: 'Costas', instructions: 'Incline o tronco para a frente, mantendo as costas retas. Puxe a barra em direção ao abdômen.', imageUrl: 'https://picsum.photos/602/402', videoUrl: 'https://www.youtube.com/embed/vT2GjY_Umpw' },
  { id: 'ex-4', name: 'Desenvolvimento com Halteres', muscleGroup: 'Ombros', instructions: 'Sentado em um banco, levante os halteres acima da cabeça até que os braços estejam estendidos.', imageUrl: 'https://picsum.photos/603/403', videoUrl: 'https://www.youtube.com/embed/B-aVuyhvLHU' },
  { id: 'ex-5', name: 'Rosca Direta', muscleGroup: 'Bíceps', instructions: 'Em pé, segure a barra com as palmas das mãos para cima. Flexione os cotovelos, trazendo a barra em direção ao peito.', imageUrl: 'https://picsum.photos/604/404', videoUrl: 'https://www.youtube.com/embed/kwG2Zqt1_0s' },
  { id: 'ex-6', name: 'Tríceps na Polia', muscleGroup: 'Tríceps', instructions: 'Em pé, de frente para a polia, segure a barra com as palmas para baixo. Estenda os cotovelos para baixo.', imageUrl: 'https://picsum.photos/605/405', videoUrl: 'https://www.youtube.com/embed/3-_3nUT-gok' },
  { id: 'ex-7', name: 'Levantamento Terra', muscleGroup: 'Costas', instructions: 'Agache e segure a barra. Levante-se estendendo as pernas e as costas simultaneamente. Mantenha a barra próxima ao corpo.', imageUrl: 'https://picsum.photos/606/406', videoUrl: 'https://www.youtube.com/embed/UAmH_L4_A4E' },
  { id: 'ex-8', name: 'Flexão de Braço', muscleGroup: 'Peito', instructions: 'Em posição de prancha, com as mãos na largura dos ombros. Desça o corpo até o peito quase tocar o chão e empurre para cima.', imageUrl: 'https://picsum.photos/607/407', videoUrl: 'https://www.youtube.com/embed/IODxDxX7oi4' },
  { id: 'ex-9', name: 'Leg Press', muscleGroup: 'Pernas', instructions: 'Sente-se na máquina com os pés na plataforma. Empurre a plataforma até estender as pernas e retorne de forma controlada.', imageUrl: 'https://picsum.photos/608/408', videoUrl: 'https://www.youtube.com/embed/GvRgijoJ2xY' },
  { id: 'ex-10', name: 'Puxada Frontal', muscleGroup: 'Costas', instructions: 'Sente-se de frente para a máquina e puxe a barra em direção à parte superior do peito, contraindo as costas.', imageUrl: 'https://picsum.photos/609/409', videoUrl: 'https://www.youtube.com/embed/i3nDE4L3q2I' },
  { id: 'ex-11', name: 'Elevação Lateral', muscleGroup: 'Ombros', instructions: 'Em pé, segure um halter em cada mão. Levante os braços para os lados até a altura dos ombros.', imageUrl: 'https://picsum.photos/610/410', videoUrl: 'https://www.youtube.com/embed/34Bhrd_Rz_o' },
  { id: 'ex-12', name: 'Prancha Abdominal', muscleGroup: 'Abdômen', instructions: 'Apoie os antebraços e os dedos dos pés no chão. Mantenha o corpo reto como uma prancha, contraindo o abdômen.', imageUrl: 'https://picsum.photos/611/411', videoUrl: 'https://www.youtube.com/embed/asquSH2Qvs4' },
];

export const workoutPlans: WorkoutPlan[] = [
  {
    id: 'wp-1',
    studentId: 'student-1',
    name: 'Treino A - Foco em Superiores',
    isActive: true,
    exercises: [
      { exerciseId: 'ex-1', sets: '4', reps: '8-12', rest: '60s' },
      { exerciseId: 'ex-3', sets: '4', reps: '8-12', rest: '60s' },
      { exerciseId: 'ex-4', sets: '3', reps: '10-15', rest: '45s' },
      { exerciseId: 'ex-5', sets: '3', reps: '10-15', rest: '45s' },
      { exerciseId: 'ex-6', sets: '3', reps: '10-15', rest: '45s' },
    ],
  },
  {
    id: 'wp-2',
    studentId: 'student-1',
    name: 'Treino B - Foco em Inferiores',
    isActive: false,
    exercises: [
      { exerciseId: 'ex-2', sets: '4', reps: '8-12', rest: '90s' },
      { exerciseId: 'ex-7', sets: '3', reps: '6-8', rest: '120s' },
      { exerciseId: 'ex-9', sets: '4', reps: '10-12', rest: '60s' },
    ],
  },
];

export const physicalAssessments: PhysicalAssessment[] = [
    { id: 'pa-1', studentId: 'student-1', date: '2024-01-15', weight: 65, bodyFatPercentage: 22, waist: 70, hip: 98, chest: 90, arm: 30, leg: 55 },
    { id: 'pa-2', studentId: 'student-1', date: '2024-03-15', weight: 67, bodyFatPercentage: 20, waist: 68, hip: 99, chest: 92, arm: 31, leg: 57 },
    { id: 'pa-3', studentId: 'student-1', date: '2024-05-15', weight: 68, bodyFatPercentage: 19, waist: 67, hip: 100, chest: 93, arm: 32, leg: 58 },
];

const today = new Date();
const getDay = (offset: number) => {
    const date = new Date(today);
    date.setDate(today.getDate() + offset);
    return date.toISOString().split('T')[0];
}

export const schedule: ScheduleEntry[] = [
    { id: 'se-1', studentId: 'student-1', workoutPlanId: 'wp-1', date: getDay(-1), status: 'Concluído' },
    { id: 'se-2', studentId: 'student-2', workoutPlanId: 'wp-1', date: getDay(-1), status: 'Concluído' },
    { id: 'se-3', studentId: 'student-1', workoutPlanId: 'wp-1', date: getDay(1), status: 'Próximo' },
    { id: 'se-4', studentId: 'student-3', workoutPlanId: 'wp-2', date: getDay(1), status: 'Próximo' },
    { id: 'se-5', studentId: 'student-2', workoutPlanId: 'wp-1', date: getDay(2), status: 'Próximo' },
];

export const studentSchedule: ScheduleEntry[] = [
    { id: 'sse-1', studentId: 'student-1', workoutPlanId: 'wp-1', date: getDay(-2), status: 'Concluído' },
    { id: 'sse-2', studentId: 'student-1', workoutPlanId: 'wp-2', date: getDay(-1), status: 'Faltou' },
    { id: 'sse-3', studentId: 'student-1', workoutPlanId: 'wp-1', date: getDay(1), status: 'Próximo' },
    { id: 'sse-4', studentId: 'student-1', workoutPlanId: 'wp-2', date: getDay(3), status: 'Próximo' },
    { id: 'sse-5', studentId: 'student-1', workoutPlanId: 'wp-1', date: getDay(5), status: 'Próximo' },
];
