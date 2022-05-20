<template>
  <form>
    <div class="form-header">
      <h1>
        Id user<span>  {{ idUser }}</span>
      </h1>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
  props: {
    idUser: {
      type: String,
      required: true,
    },
  },
  mounted() {
  },
};
</script>
