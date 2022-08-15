import { createStore } from 'vuex'

export default createStore({
  state: {
    url:'http://localhost:8080',
    productos:[]
  },
  getters: {
  },
  mutations: {
    setCargarProductos(state, payload){
      state.productos = payload;
    }
  },
  actions: {
    async cargarProductos({commit}, categoriaId=0){
      const res = await fetch(`${this.state.url}/api/producto?categoria=${categoriaId}`);
      const datos = await res.json();
      commit('setCargarProductos', datos);
    }

  },
  modules: {
  }
})
