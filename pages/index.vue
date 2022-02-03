<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event-data="event"
    />
  </div>
</template>

<script>
import EventCard from "~/components/EventCard.vue"
export default {
  name: 'IndexPage',
  components: {
    EventCard
  },
  asyncData({ $axios, error }) { // like data, but async
    return $axios.get('events.json').then(response => {
      return {
        events: response.data
      }
    })
    .catch(e => {
      error({
        statusCode: 503,
        message: 'Error fetching the data'
      })
    })
  },
  head() {
    return {
      title: 'Events list'
    }
  },
}
</script>
