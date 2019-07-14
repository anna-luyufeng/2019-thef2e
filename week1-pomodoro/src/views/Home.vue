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
      },
      newTaskName: '',
      workingTask: {},
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
    updateWorkingTask(task) {
      const noWorkingTask = Object.keys(this.workingTask).length === 0

      return new Promise((resolve, reject) => {
        if (noWorkingTask) {
          this.startWorkingTask(task)
          resolve()
        } else {
          this.$confirm({
            title: '是否要放棄目前進行中的蕃茄？',
            content: '放棄此番茄將不會紀錄此次計時',
            onOk: () => {
              this.startWorkingTask(task)
              resolve()
            },
          })
        }
      })
    },
    startBreakingTask() {
      this.timer.mode = 'break'
      this.$refs.taskTimer.toggleTimer()
    },
    startWorkingTask(task) {
      this.workingTask = task
      this.$refs.taskTimer.resetTimer()
      this.$refs.taskTimer.toggleTimer()
    },
    completeTask(targetTask) {
      const targetIndex = this.tasks.indexOf(targetTask)
      const { compelete } = targetTask
      this.$set(this.tasks, targetIndex, {
        ...targetTask,
        compelete: !compelete,
        compelete_at: compelete ? '' : new Date(),
      })
      if (targetTask === this.workingTask) {
        this.workingTask = {}
      }
    },
    handleAddTask(startWorking = false) {
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

      if (startWorking) {
        this.updateWorkingTask(newTask).then(() => {
          this.tasks.push(newTask)
          this.newTaskName = ''
        })
      } else {
        this.tasks.push(newTask)
        this.newTaskName = ''
      }
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
      :task="workingTask"
      @complete="completeTask"
    />

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
        :working="task === workingTask"
        @checked="completeTask"
        @start="updateWorkingTask"
      />

      <div v-if="completedTasks">
        <a-divider orientation="left">Completed</a-divider>
        <TaskItem
          v-for="task in completedTasks"
          :key="task.id"
          :class="$style['task-item']"
          :data="task"
          @checked="completeTask"
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
