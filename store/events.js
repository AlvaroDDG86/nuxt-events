import EventService from "~/services/EventService";

export const state = () => ({
  events: [],
  event: null
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents().then(events => {
      commit('SET_EVENTS', events.data)
    })
  },
  fetchEvent({ commit }, payload) {
    return EventService.getEvent(payload).then(event => {
      commit('SET_EVENT', event.data)
    })
  }
}
