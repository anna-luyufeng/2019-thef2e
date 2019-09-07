import { mapState, mapGetters } from 'vuex'

export const authComputed = {
  ...mapState({
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters(['loggedIn']),
}
