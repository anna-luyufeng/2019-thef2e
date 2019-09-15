<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      folderList: [
        {
          name: "The F2E Week1 - 番茄鐘",
          star: false,
          shared: false
        },
        {
          name: "The F2E Week2 - 新接龍",
          star: false,
          shared: false
        },
        {
          name: "The F2E Week3 - MP3 Player",
          star: false,
          shared: false
        },
        {
          name: "The F2E Week4 - 線上支付",
          star: false,
          shared: false
        },
        {
          name: "The F2E Week5 - 90 秒挑戰遊戲",
          star: false,
          shared: false
        },
        {
          name: "The F2E Week6 - 旅館預約服務",
          star: false,
          shared: false
        },
        {
          name: "The F2E Week7 - 匿名聊天室",
          star: false,
          shared: false
        },
        {
          name: "The F2E Week8 - 雲端硬碟",
          star: false,
          shared: false
        }
      ],
      fileList: [
        {
          name: "The F2E Week1 - 番茄鐘.jpg",
          star: false,
          shared: false
        },
        {
          name: "The F2E Week2 - 新接龍.jpg",
          star: false,
          shared: false
        },
        {
          name: "The F2E Week3 - MP3 Player.jpg",
          star: false,
          shared: false
        },
        {
          name: "The F2E Week4 - 線上支付.jpg",
          star: false,
          shared: false
        },
        {
          name: "The F2E Week5 - 90 秒挑戰遊戲.jpg",
          star: false,
          shared: false
        },
        {
          name: "The F2E Week6 - 旅館預約服務.jpg",
          star: false,
          shared: false
        },
        {
          name: "The F2E Week7 - 匿名聊天室.jpg",
          star: false,
          shared: false
        },
        {
          name: "The F2E Week8 - 雲端硬碟.jpg",
          star: false,
          shared: false
        }
      ]
    };
  }
};
</script>

<template>
  <div>
    <h3>資料夾</h3>
    <div class="item__list">
      <div
        v-for="(folder, index) in folderList"
        :key="index"
        class="item item--folder"
      >
        {{ folder.name }}
      </div>
    </div>
    <h3>檔案</h3>
    <div class="item__list">
      <div
        v-for="(file, index) in fileList"
        :key="index"
        class="item item--file"
      >
        <img
          class="file__thumb"
          src="https://source.unsplash.com/random/400x300"
          alt=""
        />
        <div class="file__name">{{ file.name }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.item {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  background-color: #2f3136;
  border-radius: 7px;
  margin-bottom: 15px;
  width: calc(25% - 15px);
  box-sizing: border-box;
  font-size: 0.85rem;
  text-align: center;
  &--folder {
    padding: 45px 15px 15px;
  }
  &--file {
  }
}
.file {
  &__thumb {
    max-width: 100%;
  }
  &__name {
    padding: 10px;
  }
}
</style>
