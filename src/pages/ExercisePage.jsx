import React, { useState } from 'react';
import axios from 'axios';
import ExerciseForm from "../components/ExerciseForm";
import "../css/ExerciseForm.css"
// import ExerciseList from "../components/ExerciseList";

const ExercisePage = () => {
  // State variable to store fetched exercises
  const [exercises, setExercises] = useState([]);

  // Function to fetch exercises from the API
  // const fetchExercises = async (exerciseType, muscleGroup, exerciseDifficulty) => {
  //   try {
  //     const response = await axios.get('https://api.api-ninjas.com/v1/exercises', {
  //       headers: {
  //         'X-Api-Key': apiKey
  //       },
  //       params: {
  //         type: exerciseType,
  //         muscle: muscleGroup,
  //         difficulty: exerciseDifficulty
  //       }
  //     });
  //     const fetchedExercises = response.data.exercises;
  //     setExercises(fetchedExercises);
  //   } catch (error) {
  //     console.error('Error fetching exercises:', error);
  //   }
  // };

  return (
    <>
      <ExerciseForm/>
    </>
  );
}

export default ExercisePage;