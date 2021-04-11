<template>
  <BaseLayout>
    <template>
      <div class="main">
        <div class="editor">
          <Editor v-bind="context"></Editor>
        </div>
        <div class="rightAside">
          <!-- <button v-on:click="saveHtml">保存</button>
          <div v-html="content" class="ql-editor">
            {{ content }}
          </div> -->
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
      context: "",
    };
  },
  methods: {
    saveHtml() {
      alert(this.content);
    },
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
