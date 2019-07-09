<script>
import Layout from '@layouts/main'
import TaskItem from '@components/TaskItem'
import TimerClock from '@components/TimerClock'

const filters = {
  all: function(tasks) {
    return tasks
  },
  active: function(tasks) {
    return tasks.filter((task) => !task.compelete)
  },
  completed: function(tasks) {
    return tasks.filter((task) => task.compelete)
  },
}
export default {
  components: {
    Layout,
    TaskItem,
    TimerClock,
  },
  data() {
    return {
      timer: {
        active: false,
      },
      newTask: '',
      workingTask: {
        id: 5,
        name: '基本待辦事項新增、勾選完成',
        description: '描述文字描述文字描述文字',
        compelete: false,
        compelete_at: '',
        records: [],
      },
      tasks: [
        {
          id: 5,
          name: '基本待辦事項新增、勾選完成',
          description: '描述文字描述文字描述文字',
          compelete: false,
          compelete_at: '',
          records: [1, 1, 1],
        },
        {
          id: 4,
          name: '基本待辦事項新增、勾選完成',
          description: '描述文字描述文字描述文字',
          compelete: false,
          compelete_at: '',
          records: [1],
        },
        {
          id: 3,
          name: '基本待辦事項新增、勾選完成',
          description: '描述文字描述文字描述文字',
          compelete: false,
          compelete_at: '',
          records: [],
        },
        {
          id: 2,
          name: '完成基本的 HTML',
          description: '描述文字描述文字描述文字',
          compelete: false,
          compelete_at: '',
          records: [1, 1],
        },
        {
          id: 1,
          name: 'Clone Boilerplate 設定環境',
          description: '描述文字描述文字描述文字',
          compelete: true,
          compelete_at: '',
          records: [1, 1, 1, 1, 1],
        },
      ],
    }
  },
  computed: {
    activeTasks() {
      return filters.active(this.tasks)
    },
    completedTasks() {
      return filters.completed(this.tasks)
    },
  },
  methods: {
    toggleTimerAcitve() {
      this.timer.active = !this.timer.active
    },
    changeWorkingTask(task) {
      this.workingTask = task
    },
    completeTask(task) {
      // TODO: find the task in tasks array by id
      // TODO: clear the workingTask
    },
    startTaskwithAdding() {
      // console.log('startTaskwithAdding') //FIXME: not trigger
    },
    addTask() {
      const value = this.newTask && this.newTask.trim() // 去除空白
      if (!value) return
      this.tasks.push({
        id: this.tasks.length + 2,
        name: value,
        description: '',
        compelete: false,
        compelete_at: '',
        records: [],
      })

      this.newTask = ''
    },
  },
}
</script>
<template>
  <Layout>
    <a-card>
      <div slot="cover">
        <TimerClock :active="timer.active" />

        <a-icon
          v-for="(tomato, index) in workingTask.records"
          :key="index"
          type="smile"
        />
      </div>
      <template slot="actions" class="ant-card-actions">
        <a-button @click="completeTask(workingTask)"
          ><a-icon type="check-circle"
        /></a-button>
        <a-button @click="toggleTimerAcitve">
          <a-icon :type="timer.active ? 'pause-circle' : 'play-circle'"
        /></a-button>
        <a-icon type="undo" />
      </template>
      <a-card-meta :title="workingTask.name"> </a-card-meta>
    </a-card>
    <a-input-search
      v-model="newTask"
      placeholder="What are you working on?"
      size="large"
      @search="addTask"
    >
      <a-button slot="enterButton" @click="startTaskwithAdding"
        >Start Task</a-button
      >
    </a-input-search>
    <TaskItem
      v-for="task in activeTasks"
      :key="task.id"
      :data="task"
      :compelete.sync="task.compelete"
      @start="changeWorkingTask"
    />
    <div v-if="completedTasks">
      <a-divider orientation="left">Completed</a-divider>
      <TaskItem
        v-for="task in completedTasks"
        :key="task.id"
        :data="task"
        :compelete.sync="task.compelete"
      />
    </div>
  </Layout>
</template>
