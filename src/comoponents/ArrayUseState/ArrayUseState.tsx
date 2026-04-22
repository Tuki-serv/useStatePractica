import { useState, type ChangeEvent } from "react"

interface IInitalData{
    name: string
}

const initialData = [
    {
        name:"Juan"
    },
    {
        name:"Pedro"
    },
    {
        name:"Maria"
    },
    {
        name:"Camila"
    }
]

export const ArrayUseState = () => {
    const [arrayStudents, setArrayStudents] = useState<IInitalData[]>(initialData)

    const [valueInput,setValueInput] = useState<string>("")

    const addStudendt = ()=>{
        // arrayStudents.push({name: "Martin"}) esta mal no se actualiza la lista

        setArrayStudents((prev)=>[...prev,{name: `${valueInput}`}])
        setValueInput("")
    }

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>)=>{
        console.log("Cambio el input")
        const value = event.target.value
        setValueInput(value)

    }

  return (
    <div>
        <h2>Listado estudiantes</h2>
        <hr />
        <ul>
            {
                arrayStudents.map((el, index)=>(
                    <li key={index}>{index+1} - {el.name}</li>
                ))
            }
        </ul>
        <hr />
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
        <br />
        <button onClick={addStudendt}>Añadir estudiante</button>
    </div>
  )
}
