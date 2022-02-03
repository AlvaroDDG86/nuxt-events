<template>
  <div>
    <h1>{{ event.title }}</h1>
    <pre>
      {{ event }}
    </pre>
  </div>
</template>
<script>
import EventService from "~/services/EventService.js"
export default {
  name: 'EventId',
  async asyncData({ error, params }) { // like data, but async
    try {
      const { data } = await EventService.getEvent(params.id)
      return {
        event: data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Error fetching the event' + params.id
      })
    }
  },
  head() {
    return {
      title: 'Event ' + this.event.title,
      meta: [
        {
          hid: 'Event list for trying',
          name: 'Event list',
          content: 'What about of event #' + this.event.title
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
