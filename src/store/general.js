export const general = {
  namespaced: true,
  state: {
    phoneDrawer: false,
    navDrawer: true
  },
  getters: {
    phoneDrawer: state => state.phoneDrawer,
    navDrawer: state => state.navDrawer
  },
  mutations: {
    setPhoneDrawer: (state, value) => {
      state.phoneDrawer = value;
    },
    setDrawer: (state, value) => {
      state.navDrawer = value;
    }
  }
};
