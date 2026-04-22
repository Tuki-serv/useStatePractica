import type { IStudent } from "../../utils/types"

interface IStudentCardProps{
  student: IStudent
}

export const StudentCard = ({student}: IStudentCardProps) => {
  return (
    <>
      <hr />
      <h3>{student.nombreCompleto}</h3>
      <p>ID: {student.id}</p>
      <p>Legajo: {student.legajo}</p>
    </>
  )
}
