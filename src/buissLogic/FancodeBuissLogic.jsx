export const isFanCodeCity = (lat, long) => {
    return lat >= -40 && lat <= 5 && long >= 5 && long <= 100;
  };
  
  export const calculateTaskCompletionPercentage = (todos) => {
    const completedTasks = todos.filter(todo => todo.completed).length;
    return (completedTasks / todos.length) * 100;
  };
  