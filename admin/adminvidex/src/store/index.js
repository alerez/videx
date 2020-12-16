import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url = 'http://localhost:5555';

const getFrames = {
    method: 'get',
    url: url + '/getFrames',
    headers: {
        'Content-Type': 'application/json'
    },
};
const getFramesColors = {
    method: 'get',
    url: url + '/getFramesColors',
    headers: {
        'Content-Type': 'application/json'
    },

};
const getMechanisms = {
    method: 'get',
    url: url + '/getMechanisms',
    headers: {
        'Content-Type': 'application/json'
    },
};
const getMechanismColors = {
    method: 'get',
    url: url + '/getMechanismColors',
    headers: {
        'Content-Type': 'application/json'
    },
};
const getBackgrounds = {
    method: 'post',
    url: url + '/getBackgrounds',
    headers: {
        'Content-Type': 'application/json'
    }
};


export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {},

      background: {},

      Frame: {},
      FrameName: {},

      mechanism: {},
      mechanismColor: {},
  },
  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'http://localhost:3000/login', data: user, method: 'POST' })
            .then(resp => {
              const token = resp.data.token
              const user = resp.data.user
              localStorage.setItem('token', token)
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, user)
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
      })
    },

      SET_FRAMES : async ({commit}) => {
          await axios(getFrames)
              .then(response => response.data)
              .then(res => {
                  commit('SET_FRAMES', res)
              })
              .catch(function (error) {
                  console.log(error);
              });
      },
      SET_FRAMES_COLOR : async ({commit}) => {
          await axios(getFramesColors)
              .then(response => response.data)
              .then(res => {
                  commit('SET_FRAMES_COLOR', res)
              })
              .catch(function (error) {
                  console.log(error);
              });
      },

      SET_MECHANISMS : async ({commit}) => {
          await axios(getMechanisms)
              .then(response => response.data)
              .then(res => {
                  commit('SET_MECHANISMS', res)
              })
              .catch(function (error) {
                  console.log(error);
              });
      },
      SET_MECHANISM_COLOR : async ({commit}) => {
          await axios(getMechanismColors)
              .then(response => response.data)
              .then(res => {
                  commit('SET_MECHANISM_COLOR', res)
              })
              .catch(function (error) {
                  console.log(error);
              });
      },

      SET_BACKGROUNDS : async ({commit}) => {
          await axios(getBackgrounds)
              .then(response => response.data)
              .then(res => {
                  commit('SET_BACKGROUND', res)
              })
              .catch(function (error) {
                  console.log(error);
              });
      },
  },
  mutations: {
      SET_FRAMES: (state, res) => {
          state.Frame = res.reduce((stateFrame, picParam) => {
              let position = picParam.position;
              let material = picParam.material;
              let colors = picParam.color;
              let posts = picParam.posts

              if (!stateFrame[position]) {
                  stateFrame[position] = {}
              }
              if (!stateFrame[position][material]) {
                  stateFrame[position][material] = {}
              }
              if (!stateFrame[position][material][colors]) {
                  stateFrame[position][material][colors] = {}
              }
              if (!stateFrame[position][material][colors][posts]) {
                  stateFrame[position][material][colors][posts] = {}
              }
              stateFrame[position][material][colors][posts] = {
                  fileURL: url + picParam.fileURL,
                  posts: picParam.posts,
                  price: picParam.price,
                  productCode: picParam.productCode,
                  article: picParam.article,
              }
              return stateFrame
          }, {})
          console.log(state.frame);
      },
      SET_FRAMES_COLOR: (state, res) => {
          state.FrameName = res.reduce((stateFrame_color, picParam) => {
              let material = picParam.material;
              let colors = picParam.color;

              if (!stateFrame_color[material]) {
                  stateFrame_color[material] = {
                      value: material,
                      text: material
                  }
              }
              if (!stateFrame_color[material][colors]) {
                  stateFrame_color[material][colors] = {}
              }

              stateFrame_color[material][colors] = {
                  fileURL: url + picParam.fileURL,
                  color: picParam.color,
                  description: picParam.description
              }
              return stateFrame_color
          }, {},)
      },
      SET_MECHANISMS: (state, res) => {
          state.mechanism = res.reduce((stateMechanism, picParam) => {
              let colors = picParam.color;
              let material = picParam.material;

              if (!stateMechanism[material]) {
                  stateMechanism[material] = {}
              }

              if (!stateMechanism[material][colors]) {
                  stateMechanism[material][colors] = []
              }

              stateMechanism[material][colors].push({
                  fileURL: url + picParam.fileURL,
                  description: picParam.description,
                  productCode: picParam.productCode,
                  price: picParam.price,
                  article: picParam.article,
              })
              return stateMechanism
          }, {},)
      },
      SET_MECHANISM_COLOR: (state, res) => {
          res.map((element) => {
              return state.mechanismColor = element
          })
      },
      SET_BACKGROUND: (state, res) => {
          return state.background = res
      },

  },
  getters: {
      background: state => {
          return state.background
      },

      mechanismColor: state => {
          return state.mechanismColor
      },
      mechanism: state => {
          return state.mechanism
      },

      FrameName: state => {
          return state.FrameName
      },
      Frame: state => {
          return state.Frame
      }
  },
  modules: {
  }
})
