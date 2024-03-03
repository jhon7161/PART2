
const Course = ({ course }) => {
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  
    return (
      <div>
        <h2>{course.name}</h2>n
        <ul>
          {course.parts.map((part) => (
            <li key={part.id}>
              {part.name} - {part.exercises} ejercicios
            </li>
          ))}
        </ul>
        <p>Total de ejercicios: {totalExercises}</p>
      </div>
    );
  };
  
  export default Course;