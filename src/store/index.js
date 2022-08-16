import { createStore } from 'vuex'

export default createStore({
  state: {
    url:'http://localhost:8080',
    productos:{contenido:[]},
    name:"",
    categoriaId:0,
    page:1
  },
  getters: {
  },
  mutations: {
    setCargarProductos(state, payload){
      state.productos = payload;
    },
    setName(state, payload){
      state.name = payload;
    },
    setCategoriaId(state, payload){
      state.categoriaId = payload;
    },
    setPage(state, payload){
      state.page = payload;
    }
  },
  actions: {
    async cargarProductos({commit}, objeto = {categoriaId: 0, name: "null", page: 1}){
      console.log(objeto.categoriaId, objeto.name, objeto.page)
      const res = await fetch(`${this.state.url}/api/producto?categoria=${objeto.categoriaId}&name=${objeto.name}&page=${objeto.page}`);
      const datos = await res.json();
      commit('setCargarProductos', datos);
    },
    chageName({commit}, payload){
      commit("setName", payload);
    },
    chageCategoria({commit}, payload){
      commit("setCategoriaId", payload);
    },
    chagePage({commit}, payload){
      commit('setPage', payload);
    }

  },
  modules: {
  }
})
