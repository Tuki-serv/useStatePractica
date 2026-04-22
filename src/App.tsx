import { useState, type ChangeEvent } from "react"
import type { IStudent } from "./utils/types"
import { StudentList } from "./comoponents/StudentList/StudentList"
import { initialData } from "./utils/initialData"


function App() {
  const [valueInput, setValueInput] = useState<string>("")
  // const [arrayStudent, setArrayStudents] = useState<Array<IStudent>>([])
  const [studentsLoaded, setStudentsLoaded] = useState<boolean>(false)
  const [studentsFiltered, setStudentsFiltered] = useState<Array<IStudent>>([])

  const addStudents = ()=>{
    setStudentsLoaded(true)
    setStudentsFiltered(initialData)
  }

  const deleteStudents = ()=>{
    setStudentsLoaded(false)
    setStudentsFiltered([])
    setValueInput("")
  }

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>)=>{
    const value = event.target.value
    setValueInput(value)

    const result = initialData.filter((student)=>(
      student.nombreCompleto.toLowerCase().includes(value.toLowerCase())
    ))

    setStudentsFiltered(result)
    
  }

  return (
    <>
      <h1>Lista de Estudiantes</h1>
      <hr />
      {
        studentsLoaded === true &&
        <>
          <input 
            onChange={
              (e)=>{handleChangeInput(e)}
            }
            type="string"
            value={valueInput}
            placeholder="Ingrese un alumno"
            autoComplete="off"
            name="nameStudent"
          />
          <hr />
        </>
      }
      {
        studentsLoaded === false
        ? <p>La lista esta vacia</p>
        : <StudentList arrayStudent={studentsFiltered}/>
      }
      <hr />
      <button onClick={addStudents}>Cargar estudiantes</button>
      {
        studentsLoaded != false &&
        <button onClick={deleteStudents}>Limpiar lista</button>
      }
    </>
  )

}

export default App
