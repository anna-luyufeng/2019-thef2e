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
      editingTask: null,
      editingTaskCache: '',
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
    clearWorkingTask(targetTask) {
      if (targetTask === this.workingTask) {
        this.workingTask = {}
      }
    },
    updateWorkingTask(task) {
      const noWorkingTask = Object.keys(this.workingTask).length === 0

      return new Promise((resolve, reject) => {
        if (noWorkingTask) {
          this.startWorkingTask(task)
          resolve()
        } else {
          this.$confirm({
            title: 'Are you sure to stop current working task?',
            content: "If you stop, the time wouldn't record in the task.",
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
    updateRecordTask(targetTask) {
      const { records } = targetTask
      records.push('1')
    },

    finishEditedTask(targetTask) {
      if (!this.editingTask) return
      this.editingTask = null

      targetTask.name = targetTask.name.trim()
      if (!targetTask.name) {
        this.deleteTask(targetTask)
      }
    },
    editTask(targetTask) {
      this.editingTaskCache = targetTask.name
      this.editingTask = targetTask
    },
    cancelEditTask(targetTask) {
      this.editingTask = null
      targetTask.name = this.editingTaskCache
    },
    deleteTask(targetTask) {
      this.$confirm({
        title: 'Are you sure to delete this task?',
        onOk: () => {
          this.tasks.splice(this.tasks.indexOf(targetTask), 1)
          this.clearWorkingTask(targetTask)
        },
      })
    },
    completeTask(targetTask) {
      const targetIndex = this.tasks.indexOf(targetTask)
      const { compelete } = targetTask
      this.$set(this.tasks, targetIndex, {
        ...targetTask,
        compelete: !compelete,
        compelete_at: compelete ? '' : new Date(),
      })

      this.clearWorkingTask(targetTask)
    },
    handleAddTask(startWorking = false) {
      const value = this.newTaskName && this.newTaskName.trim() // 去除空白
      if (!value) return
      const newTask = {
        id: this.tasks.length++,
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
      @update-record="updateRecordTask"
    />

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
      :editing="task === editingTask"
      @checked="completeTask"
      @start="updateWorkingTask"
      @delete="deleteTask"
      @edit="editTask"
      @cancel-edit="cancelEditTask"
      @edited="finishEditedTask"
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
  </Layout>
</template>
<style lang="scss" module>
@import '@design';
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: white;
  border-radius: $size-task-border-radius;
  margin-bottom: 10px;
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
