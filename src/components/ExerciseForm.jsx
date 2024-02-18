import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExerciseSearch = () => {
  // State variables to store user input and exercise data
  const [muscleGroup, setMuscleGroup] = useState('');
  const [exerciseDifficulty, setExerciseDifficulty] = useState('');
  const [muscleGroups] = useState(['abdominals', 'abductors', 'adductors', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower_back', 'middle_back', 'neck', 'quadriceps', 'traps', 'triceps']);
  const [exerciseDifficulties] = useState(['beginner', 'intermediate', 'expert']);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch exercises based on user input
  const fetchExercises = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/exercises', {
        params: {
          muscle: muscleGroup,
          difficulty: exerciseDifficulty
        },
        headers: {
          'X-Api-Key': 'L4+C4D14l1s724uhrsy/4g==fNY39QU6TST1Pyq9'
        }
      });
      console.log(response.data);
      setExercises(response.data);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchExercises();
  };

  return (
    <div>
      <h2>Exercise Search</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="muscleGroup">Muscle Group:</label>
          <select
            id="muscleGroup"
            value={muscleGroup}
            onChange={(e) => setMuscleGroup(e.target.value)}
          >
            <option value="">Select muscle group</option>
            {muscleGroups.map((muscle) => (
              <option key={muscle} value={muscle}>{muscle}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="exerciseDifficulty">Exercise Difficulty:</label>
          <select
            id="exerciseDifficulty"
            value={exerciseDifficulty}
            onChange={(e) => setExerciseDifficulty(e.target.value)}
          >
            <option value="">Select exercise difficulty</option>
            {exerciseDifficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>{difficulty}</option>
            ))}
          </select>
        </div>
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {exercises.map((exercise, index) => (
            <li key={index}>{exercise.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExerciseSearch;