<template>
  <div class="task-grid">
    <template v-if="tasks.length">
      <Task v-for="(task, i) in tasks" :key="task.name"
        @taskDeleted="$emit('taskDeleted', $event)"
        @taskStateChanged="$emit('taskStateChanged', $event)"
        :task="task">
        {{ task.name }}
      </Task>
    </template>
    <p v-else class="no-task">Sua vida está em dia :-)</p>
  </div>
</template>

<script lang="js">
import Task from './Task'

export default {
  components: { Task },
  props: {
    tasks: { type: Array, required: true }
  }
}
</script>

<style>
  .task-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .task-grid .task {
    margin: 10px;
  }

  .no-task {
    color: #AAAAAA;
    font-size: 1.7rem;
  }

</style>