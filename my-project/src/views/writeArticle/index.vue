<template>
  <BaseLayout>
    <template>
      <div class="main">
        <div class="editor">
          <div></div>
          <Editor ref="editor-component"></Editor>
        </div>
        <div class="rightAside">
          <button v-on:parentFunction="saveHtml" >保存</button>
            {{ context }}
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

</template>

<script>
import BaseLayout from "../../layout/base-layout";
import Editor from "../../components/Editor";

export default {
  name: "",
  components: {
    BaseLayout,
    Editor,
  },
  data() {
    return {
      context: "123123",
    };
  },
  methods: {
    saveHtml(content) {
      this.context = content;
    }
  },
};
</script>

<style scoped>
.main {
  display: flex;
}
.editor {
  width: 800px;
}
.rightAside {
  width: 400px;
}
</style>
