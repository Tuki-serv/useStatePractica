import type { IStudent } from "../../utils/types"
import { StudentCard } from "../StudentCard/StudentCard"

interface IStudentListProps{
  arrayStudent: Array<IStudent>
}

export const StudentList = ({arrayStudent}: IStudentListProps) => {
  return (
    <>
      <ul>
        {
          arrayStudent.map((el)=>(
            <StudentCard key={el.id} student={el}/>
          ))
        }
      </ul>
    </>
  )
}
