import { Grid, TextInput } from "@mantine/core"
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
        <Grid.Col span={10}>
          <TextInput {...form.getInputProps('title')} />
        </Grid.Col>
        <Grid.Col span={2}>
          <button
            className="btn btn-primary btn-sm"
            onClick={handleAdd}
          >
            追加
          </button>
        </Grid.Col>
      </Grid>
    </ul>
  )
}

TodoForm.displayName = "TodoForm";
export default TodoForm;
