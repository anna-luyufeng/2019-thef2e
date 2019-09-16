<script>
import { quillEditor } from "vue-quill-editor";

function generateRandomKey() {
  return Math.random()
    .toString(36)
    .substring(2, 15);
}

export default {
  name: "home",
  components: { quillEditor },
  data() {
    return {
      noteList: [
        {
          title: "你可以接受這個數據嗎？",
          content:
            "你可以接受這個數據嗎？你可以接受這個數據嗎？你可以接受這個數據嗎？",
          tags: ["新聞"],
          favorite: true,
          created: "2019/9/7",
          updated: "2019/9/15"
        },
        {
          title: "中秋烤肉食材這樣搭最好",
          content:
            "中秋烤肉食材這樣搭最好中秋烤肉食材這樣搭最好中秋烤肉食材這樣搭最好",
          tags: ["健康"],
          favorite: false,
          created: "2019/9/7",
          updated: "2019/9/15"
        },
        {
          title: "中秋烤肉食材這樣搭最好",
          content:
            "中秋烤肉食材這樣搭最好中秋烤肉食材這樣搭最好中秋烤肉食材這樣搭最好",
          tags: ["健康"],
          favorite: false,
          created: "2019/9/7",
          updated: "2019/9/15"
        },
        {
          title: "中秋烤肉食材這樣搭最好",
          content:
            "中秋烤肉食材這樣搭最好中秋烤肉食材這樣搭最好中秋烤肉食材這樣搭最好",
          tags: ["健康"],
          favorite: false,
          created: "2019/9/7",
          updated: "2019/9/15"
        }
      ],
      activeNote: {},
      editorOption: {
        placeholder: "請輸入內容"
      }
    };
  },
  computed: {
    noteListWithKey() {
      return this.noteList.map(note => {
        return {
          ...note,
          _key: generateRandomKey()
        };
      });
    }
  },
  methods: {
    viewNote(note) {
      this.activeNote = note;
    }
  }
};
</script>
<template>
  <div class="main-inner">
    <div class="note-container">
      <div class="note-toolbar">
        <input
          class="toolbar__input"
          type="search"
          placeholder="搜尋您的筆記"
        />
      </div>
      <div class="note-list">
        <div
          v-for="note in noteListWithKey"
          :key="note._key"
          class="note__item"
          @click="viewNote(note)"
        >
          <h3 class="note__title">
            <span v-if="note.favorite" class="note__star">*</span>
            {{ note.title }}
          </h3>
          <p>{{ note.content }}</p>
          <div>
            <div></div>
            <div>{{ note.created }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="note-editor">
      <quillEditor
        v-model="activeNote.content"
        :options="editorOption"
      ></quillEditor>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@design";

.main-inner {
  display: flex;
}

.note {
  &-container {
    background: #f4f6f7;
    height: 100vh;
    flex: 0 0 350px;
  }
  &-editor {
    flex-grow: 1;
    padding: 30px;
  }
  &-toolbar {
    border-bottom: 1px solid $color-border;
    padding: 30px;
  }

  &-list {
    padding: 30px;
    overflow-y: scroll;
    box-sizing: border-box;
    height: calc(100% - 100px);
  }
  &__item {
    background: white;
    padding: 30px 20px;
    clip-path: polygon(80% 0, 100% 20%, 100% 100%, 0 100%, 0 0);
    margin-bottom: 15px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0px 0px 6px #a3a3a31a;
  }
  &__title {
    padding-bottom: 15px;
    border-bottom: 1px solid $color-border;
  }
}
.toolbar__input {
  padding: 10px;
  margin: 0;
  width: 100%;
  border: none;
  border-radius: 4px;
  background: #e6e6e6;
  &:focus {
    outline: none;
  }
}
</style>
