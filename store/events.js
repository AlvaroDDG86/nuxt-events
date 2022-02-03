import EventService from "~/services/EventService";

export const state = () => ({
  events: []
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  }
}

export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents().then(events => {
      commit('SET_EVENTS', events)
    })
  }
}