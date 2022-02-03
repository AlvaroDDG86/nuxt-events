<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event-data="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import EventCard from "~/components/EventCard.vue"
import EventService from "~/services/EventService.js"
export default {
  name: 'IndexPage',
  components: {
    EventCard
  },
  async asyncData({ error }) { // like data, but async
    try {
      const { data } = await EventService.getEvents()
      return {
        events: data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Error fetching the data'
      })
    }
  },
  head() {
    return {
      title: 'Events list'
    }
  },
}
</script>
