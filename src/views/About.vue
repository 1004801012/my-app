<template>
  <div class="about">
    <h1>This is an about page{{n}}</h1>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      n: 12
    }
  },
  created () {
    console.log(this.n)
  }
}
</script>
