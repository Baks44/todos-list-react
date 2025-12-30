import { List, Item, Button, Content, } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
            >
                <Button
                    toggleDone
                    onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✓" : "\u00A0"}
                </Button>

                <Content className={`tasks__content ${task.done ? "tasks__content--done" : ""}`}>
                    {task.content}
                </Content>

                <Button
                    remove  
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </Button>
            </Item>
        ))}
    </List>
);

export default Tasks;