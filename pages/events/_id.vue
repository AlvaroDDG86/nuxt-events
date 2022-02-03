<template>
  <div>
    <h1>Event #{{ id }}</h1>
  </div>
</template>
<script>
export default {
  name: 'EventId',
  head() {
    return {
      title: 'Event #' + this.id,
      meta: [
        {
          hid: 'Event list for trying',
          name: 'Event list',
          content: 'What about of event #' + this.id
        }
      ]
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>
