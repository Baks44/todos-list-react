import useLocalStorage from "./useLocalStorage";

const defaultTasks = [
  { id: 1, content: "przejść na React", done: true },
  { id: 2, content: "przenieść to do list", done: true },
  { id: 3, content: "przenieść kalkulator walut", done: true },
];

export default function useTasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", defaultTasks);

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: Date.now(),
        content,
        done: false,
      },
    ]);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  };

  const setAllDone = () => {
    setTasks(tasks =>
      tasks.map(task => ({
        ...task,
        done: true,
      }))
    );
  };

  return {
    tasks,
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
  };
}
