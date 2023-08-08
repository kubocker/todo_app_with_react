import { Button, Grid, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form";


interface TodoFormProps {
  onAdd: (title: string) => void;
}


const TodoForm: React.FC<TodoFormProps> = ({
  onAdd,
}) => {


  const form = useForm({
    initialValues: {
      title: ''
    },
    validateInputOnChange: true,
  })


  const handleAdd = () => {
    onAdd(form.values.title)
    form.reset()
  }

  return (
    <ul>
      <Grid>
        <Grid.Col span={12}>
          <TextInput {...form.getInputProps('title')} />
        </Grid.Col>
        <Grid.Col span={1}>
          <Button onClick={handleAdd}>追加</Button>
        </Grid.Col>
      </Grid>
    </ul>
  )
}

TodoForm.displayName = "TodoForm";
export default TodoForm;
