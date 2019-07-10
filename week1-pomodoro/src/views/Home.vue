<script>
import Layout from '@layouts/main'
import TaskItem from '@components/TaskItem'
import TaskTimer from '@components/TaskTimer'

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
    TaskTimer,
  },
  data() {
    return {
      timer: {
        active: false,
        status: 'work',
      },
      newTaskName: '',
      workingTask: {
        // id: 5,
        // name: '基本待辦事項新增、勾選完成',
        // description: '描述文字描述文字描述文字',
        // compelete: false,
        // compelete_at: '',
        // records: [],
      },
      tasks: [
        {
          id: 6,
          name: '完成到數計時器（開始、暫停、重置）',
          description: '描述文字描述文字描述文字',
          compelete: false,
          compelete_at: '',
          records: [1, 1, 1],
        },
        {
          id: 5,
          name: '區分未完成與已完成事項',
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
          name: '完成基本的 HTML 版面',
          description: '描述文字描述文字描述文字',
          compelete: false,
          compelete_at: '',
          records: [],
        },
        {
          id: 2,
          name: '安裝 Ant Design Vue 並引入使用',
          description: '描述文字描述文字描述文字',
          compelete: true,
          compelete_at: '',
          records: [1, 1],
        },
        {
          id: 1,
          name: '用 Vue CLI 創建專案',
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
      console.log('TCL: toggleTimerAcitve -> toggleTimerAcitve')
      this.timer.active = !this.timer.active
    },
    changeWorkingTask(task) {
      /**
       * TODO: check workingTask is empty or not
       * yes: show modal sure to stop current task & start new task
       * no: direct assign new task to workingTask
       */
      this.workingTask = task
      this.$refs.taskTimer.toggleTimer()
    },
    completeTask(task) {
      /**
       * TODO: find the task in tasks array by id
       * TODO: clear the workingTask
       */
      console.log(task)
    },
    emptyNewTaskInput() {
      this.$refs.newTaskNameInput.focus()
      this.newTaskName = ''
    },
    handleAddTask(startWorking = false) {
      console.log('TCL: handleAddTask -> handleAddTask')
      const value = this.newTaskName && this.newTaskName.trim() // 去除空白
      if (!value) return
      const newTask = {
        id: this.tasks.length + 2,
        name: value,
        description: '',
        compelete: false,
        compelete_at: '',
        records: [],
      }
      this.tasks.push(newTask)
      if (startWorking) {
        this.changeWorkingTask(newTask)
      }
      this.newTaskName = ''
    },
  },
}
</script>
<template>
  <Layout>
    <TaskTimer
      v-show="Object.keys(workingTask).length > 0"
      ref="taskTimer"
      :active="timer.active"
      :status="timer.status"
      :task="workingTask"
      @complete="completeTask"
    />

    <!-- <a-radio-group v-model="timer.status">
      <a-radio-button value="work">work</a-radio-button>
      <a-radio-button value="break">break</a-radio-button>
    </a-radio-group>-->
    <div :class="$style.tasks">
      <div :class="$style['task-item']">
        <a-icon class="task-prefix" type="plus" />
        <a-input
          ref="newTaskNameInput"
          v-model="newTaskName"
          placeholder="What are you working on?"
          @pressEnter="handleAddTask(false)"
        />
        <a-button v-if="newTaskName" @click="handleAddTask(true)">
          <a-icon type="play-circle" />Start Task
        </a-button>
      </div>

      <TaskItem
        v-for="task in activeTasks"
        :key="task.id"
        :class="[$style['task-item'], task === workingTask ? $style['is-working']  : '']"
        :data="task"
        :compelete.sync="task.compelete"
        :working="task === workingTask"
        @start="changeWorkingTask"
      />

      <div v-if="completedTasks">
        <a-divider orientation="left">Completed</a-divider>
        <TaskItem
          v-for="task in completedTasks"
          :key="task.id"
          :class="$style['task-item']"
          :data="task"
          :compelete.sync="task.compelete"
        />
      </div>
    </div>
  </Layout>
</template>
<style lang="scss" module>
@import '@design';
.tasks {
  margin-top: 15px;
}
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: white;
  border-radius: $size-task-border-radius;
  margin: 10px;
}
:global {
  .task-prefix,
  .task-suffix {
    color: #bfbfbf;
    font-size: 1.25rem;
  }
  .task-prefix {
    padding-right: 10px;
  }
  .task-suffix {
    padding-left: 10px;
  }
}
</style>
