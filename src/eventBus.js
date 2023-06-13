import { reactive } from "vue";

const state = reactive({
  eventList: [],
});

const setEventList = (eventList) => {
  state.eventList = eventList;
};

export default {
  state,
  setEventList,
};