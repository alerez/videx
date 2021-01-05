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
  },
  data : JSON.stringify({"type":"bad"})
};

const store = () => new Vuex.Store({
  state: {
    background:  [
      {
        image: {url: url + '/images/backgrounds/36.jpg'},
        images: [],
        colors: '',
      }
    ],

    activityBackground: 'siWI9thJe',

    imagesUP: [
      { url: null },
      { url: null },
      { url: null },
      { url: null },
    ],
    cols: [
      [
        { backgroundColor: 'rgba(248, 224, 224)' },
        { backgroundColor: 'rgba(246, 206, 206)' },
        { backgroundColor: 'rgba(245, 169, 169)' },
        { backgroundColor: 'rgba(247, 129, 129)' },
        { backgroundColor: 'rgba(250, 88, 88)' },
        { backgroundColor: 'rgba(254, 46, 46)' },
        { backgroundColor: 'rgba(255, 0, 0)' },
        { backgroundColor: 'rgba(223, 1, 1)' },
      ],
      [
        { backgroundColor: 'rgba(248, 230, 224)' },
        { backgroundColor: 'rgba(246, 216, 206)' },
        { backgroundColor: 'rgba(245, 188, 169)' },
        { backgroundColor: 'rgba(247, 159, 129)' },
        { backgroundColor: 'rgba(250, 130, 88)' },
        { backgroundColor: 'rgba(254, 100, 46)' },
        { backgroundColor: 'rgba(255, 64, 0)' },
        { backgroundColor: 'rgba(223, 58, 1)' },
      ],
      [
        { backgroundColor: 'rgba(248, 236, 224)' },
        { backgroundColor: 'rgba(245, 236, 206)' },
        { backgroundColor: 'rgba(245, 208, 169)' },
        { backgroundColor: 'rgba(247, 190, 129)' },
        { backgroundColor: 'rgba(250, 172, 88)' },
        { backgroundColor: 'rgba(254, 154, 46)' },
        { backgroundColor: 'rgba(255, 128, 0)' },
        { backgroundColor: 'rgba(223, 116, 1)' },
      ],
      [
        { backgroundColor: 'rgba(247, 242, 224)' },
        { backgroundColor: 'rgba(245, 236, 206)' },
        { backgroundColor: 'rgba(243, 226, 169)' },
        { backgroundColor: 'rgba(245, 218, 129)' },
        { backgroundColor: 'rgba(247, 211, 88)' },
        { backgroundColor: 'rgba(250, 204, 46)' },
        { backgroundColor: 'rgba(255, 191, 0)' },
        { backgroundColor: 'rgba(219, 169, 1)' },
      ],
      [
        { backgroundColor: 'rgba(247, 248, 224)' },
        { backgroundColor: 'rgba(245, 246, 206)' },
        { backgroundColor: 'rgba(242, 245, 169)' },
        { backgroundColor: 'rgba(243, 247, 129)' },
        { backgroundColor: 'rgba(244, 250, 88)' },
        { backgroundColor: 'rgba(247, 254, 46)' },
        { backgroundColor: 'rgba(255, 255, 0)' },
        { backgroundColor: 'rgba(215, 223, 1)' },
      ],
      [
        { backgroundColor: 'rgba(241, 248, 224)' },
        { backgroundColor: 'rgba(236, 246, 206)' },
        { backgroundColor: 'rgba(225, 245, 169)' },
        { backgroundColor: 'rgba(216, 247, 129)' },
        { backgroundColor: 'rgba(208, 250, 88)' },
        { backgroundColor: 'rgba(200, 254, 46)' },
        { backgroundColor: 'rgba(191, 255, 0)' },
        { backgroundColor: 'rgba(165, 223, 0)' },
      ],
      [
        { backgroundColor: 'rgba(236, 248, 224)' },
        { backgroundColor: 'rgba(227, 246, 206)' },
        { backgroundColor: 'rgba(208, 245, 169)' },
        { backgroundColor: 'rgba(190, 247, 129)' },
        { backgroundColor: 'rgba(172, 250, 88)' },
        { backgroundColor: 'rgba(154, 254, 46)' },
        { backgroundColor: 'rgba(128, 255, 0)' },
        { backgroundColor: 'rgba(116, 223, 0)' },
      ],
      [
        { backgroundColor: 'rgba(230, 248, 224)' },
        { backgroundColor: 'rgba(216, 246, 206)' },
        { backgroundColor: 'rgba(188, 245, 169)' },
        { backgroundColor: 'rgba(159, 247, 129)' },
        { backgroundColor: 'rgba(130, 250, 88)' },
        { backgroundColor: 'rgba(100, 254, 46)' },
        { backgroundColor: 'rgba(64, 255, 0)' },
        { backgroundColor: 'rgba(58, 223, 0)' },
      ],
      [
        { backgroundColor: '#E0F8E0' },
        { backgroundColor: '#CEF6CE' },
        { backgroundColor: '#A9F5A9' },
        { backgroundColor: '#81F781' },
        { backgroundColor: '#58FA58' },
        { backgroundColor: '#2EFE2E' },
        { backgroundColor: '#00FF00' },
        { backgroundColor: '#01DF01' },
      ],
      [
        { backgroundColor: '#E0F8E6' },
        { backgroundColor: '#CEF6D8' },
        { backgroundColor: '#A9F5BC' },
        { backgroundColor: '#81F79F' },
        { backgroundColor: '#58FA82' },
        { backgroundColor: '#2EFE64' },
        { backgroundColor: '#00FF40' },
        { backgroundColor: '#01DF3A' },
      ],
      [
        { backgroundColor: '#E0F8EC' },
        { backgroundColor: '#CEF6E3' },
        { backgroundColor: '#A9F5D0' },
        { backgroundColor: '#81F7BE' },
        { backgroundColor: '#58FAAC' },
        { backgroundColor: '#2EFE9A' },
        { backgroundColor: '#00FF80' },
        { backgroundColor: '#01DF74' },
      ],
      [
        { backgroundColor: '#E0F8F1' },
        { backgroundColor: '#CEF6EC' },
        { backgroundColor: '#A9F5E1' },
        { backgroundColor: '#81F7D8' },
        { backgroundColor: '#58FAD0' },
        { backgroundColor: '#2EFEC8' },
        { backgroundColor: '#00FFBF' },
        { backgroundColor: '#01DFA5' },
      ],
      [
        { backgroundColor: '#E0F8F7' },
        { backgroundColor: '#CEF6F5' },
        { backgroundColor: '#A9F5F2' },
        { backgroundColor: '#81F7F3' },
        { backgroundColor: '#58FAF4' },
        { backgroundColor: '#2EFEF7' },
        { backgroundColor: '#00FFFF' },
        { backgroundColor: '#01DFD7' },
      ],
      [
        { backgroundColor: '#E0F2F7' },
        { backgroundColor: '#CEECF5' },
        { backgroundColor: '#A9E2F3' },
        { backgroundColor: '#81DAF5' },
        { backgroundColor: '#58D3F7' },
        { backgroundColor: '#2ECCFA' },
        { backgroundColor: '#00BFFF' },
        { backgroundColor: '#01A9DB' },
      ],
      [
        { backgroundColor: '#E0ECF8' },
        { backgroundColor: '#CEE3F6' },
        { backgroundColor: '#A9D0F5' },
        { backgroundColor: '#81BEF7' },
        { backgroundColor: '#58ACFA' },
        { backgroundColor: '#2E9AFE' },
        { backgroundColor: '#0080FF' },
        { backgroundColor: '#0174DF' },
      ],
      [
        { backgroundColor: '#E0E6F8' },
        { backgroundColor: '#CED8F6' },
        { backgroundColor: '#A9BCF5' },
        { backgroundColor: '#819FF7' },
        { backgroundColor: '#5882FA' },
        { backgroundColor: '#2E64FE' },
        { backgroundColor: '#0040FF' },
        { backgroundColor: '#013ADF' },
      ],
      [
        { backgroundColor: '#E0E0F8' },
        { backgroundColor: '#CECEF6' },
        { backgroundColor: '#A9A9F5' },
        { backgroundColor: '#8181F7' },
        { backgroundColor: '#5858FA' },
        { backgroundColor: '#2E2EFE' },
        { backgroundColor: '#0000FF' },
        { backgroundColor: '#0101DF' },
      ],
      [
        { backgroundColor: '#E6E0F8' },
        { backgroundColor: '#D8CEF6' },
        { backgroundColor: '#BCA9F5' },
        { backgroundColor: '#9F81F7' },
        { backgroundColor: '#8258FA' },
        { backgroundColor: '#642EFE' },
        { backgroundColor: '#4000FF' },
        { backgroundColor: '#3A01DF' },
      ],
      [
        { backgroundColor: '#ECE0F8' },
        { backgroundColor: '#E3CEF6' },
        { backgroundColor: '#D0A9F5' },
        { backgroundColor: '#BE81F7' },
        { backgroundColor: '#AC58FA' },
        { backgroundColor: '#9A2EFE' },
        { backgroundColor: '#8000FF' },
        { backgroundColor: '#7401DF' },
      ],
      [
        { backgroundColor: '#F2E0F7' },
        { backgroundColor: '#ECCEF5' },
        { backgroundColor: '#E2A9F3' },
        { backgroundColor: '#DA81F5' },
        { backgroundColor: '#D358F7' },
        { backgroundColor: '#CC2EFA' },
        { backgroundColor: '#BF00FF' },
        { backgroundColor: '#A901DB' },
      ],
      [
        { backgroundColor: '#F8E0F7' },
        { backgroundColor: '#F6CEF5' },
        { backgroundColor: '#F5A9F2' },
        { backgroundColor: '#F781F3' },
        { backgroundColor: '#FA58F4' },
        { backgroundColor: '#FE2EF7' },
        { backgroundColor: '#FF00FF' },
        { backgroundColor: '#DF01D7' },
      ],
      [
        { backgroundColor: '#F8E0F1' },
        { backgroundColor: '#F6CEEC' },
        { backgroundColor: '#F5A9E1' },
        { backgroundColor: '#F781D8' },
        { backgroundColor: '#FA58D0' },
        { backgroundColor: '#FE2EC8' },
        { backgroundColor: '#FF00BF' },
        { backgroundColor: '#DF01A5' },
      ],
      [
        { backgroundColor: '#F8E0EC' },
        { backgroundColor: '#F6CEE3' },
        { backgroundColor: '#F5A9D0' },
        { backgroundColor: '#F781BE' },
        { backgroundColor: '#FA58AC' },
        { backgroundColor: '#FE2E9A' },
        { backgroundColor: '#FF0080' },
        { backgroundColor: '#DF0174' },
      ],
      [
        { backgroundColor: '#F8E0E6' },
        { backgroundColor: '#F6CED8' },
        { backgroundColor: '#F5A9BC' },
        { backgroundColor: '#F7819F' },
        { backgroundColor: '#FA5882' },
        { backgroundColor: '#FE2E64' },
        { backgroundColor: '#FF0040' },
        { backgroundColor: '#DF013A' },
      ],
      [
        { backgroundColor: '#FFFFFF' },
        { backgroundColor: '#FAFAFA' },
        { backgroundColor: '#F2F2F2' },
        { backgroundColor: '#E6E6E6' },
        { backgroundColor: '#D8D8D8' },
        { backgroundColor: '#BDBDBD' },
        { backgroundColor: '#A4A4A4' },
        { backgroundColor: '#6E6E6E' },
      ],
      [
        { backgroundColor: '#585858' },
        { backgroundColor: '#424242' },
        { backgroundColor: '#2E2E2E' },
        { backgroundColor: '#1C1C1C' },
        { backgroundColor: '#151515' },
        { backgroundColor: '#190707' },
        { backgroundColor: '#0B1907' },
        { backgroundColor: '#070719' },
      ],
    ],


    numberPostsFrame: '1',
    material: 'plastic',
    frameOrientation: 'horizontal',
    colorsFrame: 'white',

    mobileSelectFrame: false,
    mobileSelectMechanism: false,
    mobileBackground: false,
    mobileColorBackground: false,

    chooseFrame: {},
    chooseFrameMaterial: '',
    chooseFrameItems: [],

    selectFrame: {
      material: 'plastic',
      options:[
        {text: 'Скляні', value: 'glases'},
        {text: 'Пластик', value: 'plastic'},
        {text: 'Алюміній', value: 'aluminium'},
      ],
    },

    frame: {
      horizontal: {},
      vertical: {},
    },

    mechanismColor: 'white',
    mechanismColor2: 'white',
    mechanism: {},

    chooseMechanismColor: 'white',
    chooseMechanismItem: {},
    chooseMechanism: {},


    selectedMechanismBlock: 'mechanismBlockNone',
    mechanismBlockOne: {
      price: 0,
      fileURL: 'https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-o62bcwfxu7zofs36kb0sbh4wom52bbxxszhrx8zw4y.png',
      article: '',
      num: 0,
    },
    mechanismBlockTwo: {
      price: 0,
      fileURL: 'https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-o62bcwfxu7zofs36kb0sbh4wom52bbxxszhrx8zw4y.png',
      article: '',
      num: 0,
    },
    mechanismBlockThree: {
      price: 0,
      fileURL: 'https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-o62bcwfxu7zofs36kb0sbh4wom52bbxxszhrx8zw4y.png',
      article: '',
      num: 0,
    },
    mechanismBlockFour: {
      price: 0,
      fileURL: 'https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-o62bcwfxu7zofs36kb0sbh4wom52bbxxszhrx8zw4y.png',
      article: '',
      num: 0,
    },
    mechanismBlockFive: {
      price: 0,
      fileURL: 'https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-o62bcwfxu7zofs36kb0sbh4wom52bbxxszhrx8zw4y.png',
      article: '',
      num: 0,
    },

    attributeNum: 0,

  },
  actions: {
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



    EMIT_backgroundColors: ({commit}, data) =>{
     commit('backgroundColors', data)
     commit('background', null)
     commit('activityBackground', null)
    },
    EMIT_background: async ({commit}, data) => {
      await axios
          .post(url + '/getBackgrounds', {
            "type":"good",
            "id": data
          }, {
            headers: {'Content-Type': 'application/json'}
          })
          .then(response => response.data)
          .then(res => {
            commit('background', url + res[0].fileURL)
          })
          .catch(function (error) {
            console.log(error);
          });
      commit('backgroundColors', null)
      commit('activityBackground', data)
    },
    EMIT_upBag: ({commit}, data) => {
      commit('upBag', data)
      commit('backgroundColors', null)
      commit('activityBackground', null)
    },



    EMIT_frameOrientation: ({commit}, data) => {
      commit('frameOrientation', data)
    },
    EMIT_numberPostsFrame: ({commit}, data) => {
      commit('numberPostsFrame', data)
    },



    EMIT_frameMaterial: ({commit}, data) => {
      commit('frameMaterial', data)
    },
    EMIT_frameMaterialColor: ({commit}, data) => {
      commit('frameMaterialColor', data)
    },


    EMIT_mechanismColor: ({commit}, data, data2) => {
      commit('mechanismColor', data)
      commit('mechanismColor2', data2)
    },
    EMIT_mechanism: ({commit}, data) => {
      commit('mechanism', data)
    },
    EMIT_selectedMechanismBlock: ({commit}, data) => {
      commit('selectedMechanismBlock', data)
    },
    EMIT_selectedMechanism: ({commit}, data) => {
      commit('selectedMechanism', data)
    },
    EMIT_closedMechanismBlock: ({commit}, data) => {
      commit('closedMechanismBlock', data)
    },


    EMIT_onSelectFrame: ({commit}, data) => {
      commit('onSelectFrame', data)
    },
    EMIT_onSelectMechanism: ({commit}, data) => {
      commit('onSelectMechanism', data)
    },
    EMIT_onMobileBackground: ({commit}, data) => {
      commit('onMobileBackground', data)
    },
    EMIT_onMobileColorBackground: ({commit}, data) => {
      commit('onMobileColorBackground', data)
    },
  },
  mutations: {
    SET_FRAMES: (state, res) => {
      // state.frame.hor = res.map((sommething, i) => {return sommething })
      // state.frame = {hor: [], ver: []}
      state.frame = res.reduce((stateFrame, picParam) => {
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
                  num: 1,
          }
          return stateFrame
      }, {})
    },
    SET_FRAMES_COLOR: (state, res) => {
      state.chooseFrame = res.reduce((stateFrame_color, picParam) => {
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
      state.chooseMechanism = res.reduce((stateMechanism, picParam) => {
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
          num: 1,
        })
        return stateMechanism
      }, {},)
    },
    SET_MECHANISM_COLOR: (state, res) => {
      res.map((element) => {
        return state.chooseMechanism = element
      })
    },
    SET_BACKGROUND: (state, res) => {
      res.forEach((element) => {
        if (element.type === 'bad') {
          state.background[0].images.push({
                   fileURL: url + element.fileURL,
                   id: element.id
              }
          )
        }
      });
    },



    backgroundColors: (state, data) => {
      return state.background[0].colors = data
    },
    background: (state, data) => {
      return state.background[0].image.url = data
    },
    upBag: (state, data) => {
      return state.background[0].image.url = data
    },



    frameOrientation: (state, data) => {
      return state.frameOrientation = data
    },
    numberPostsFrame: (state, data) => {
      return state.numberPostsFrame = data
    },


    mechanismColor: (state, data) => {
      return state.mechanismColor = data
    },
    mechanismColor2: (state, data2) => {
      return state.mechanismColor2 = data2
    },
    mechanism: (state, data) => {
      return state.chooseMechanism = data
    },
    selectedMechanism: (state, data) => {
      if(state.selectedMechanismBlock !== 'mechanismBlockNone'){
        return state[state.selectedMechanismBlock] = data
      }
      if(state.numberPostsFrame === '1'){
        if(state.mechanismBlockOne.price === 0){
          return state.mechanismBlockOne = data
        }
      }
      if(state.numberPostsFrame === '2'){
        if(state.mechanismBlockOne.price === 0){
          return state.mechanismBlockOne = data
        }
        if(state.mechanismBlockTwo.price === 0){
          return state.mechanismBlockTwo = data
        }
      }
      if(state.numberPostsFrame === '3'){
        if(state.mechanismBlockOne.price === 0){
          return state.mechanismBlockOne = data
        }
        if(state.mechanismBlockTwo.price === 0){
          return state.mechanismBlockTwo = data
        }
        if(state.mechanismBlockThree.price === 0){
          return state.mechanismBlockThree = data
        }
      }
      if(state.numberPostsFrame === '4'){
        if(state.mechanismBlockOne.price === 0){
          return state.mechanismBlockOne = data
        }
        if(state.mechanismBlockTwo.price === 0){
          return state.mechanismBlockTwo = data
        }
        if(state.mechanismBlockThree.price === 0){
          return state.mechanismBlockThree = data
        }
        if(state.mechanismBlockFour.price === 0){
          return state.mechanismBlockFour = data
        }
      }
      if(state.numberPostsFrame === '5'){
        if(state.mechanismBlockOne.price === 0){
          return state.mechanismBlockOne = data
        }
        if(state.mechanismBlockTwo.price === 0){
          return state.mechanismBlockTwo = data
        }
        if(state.mechanismBlockThree.price === 0){
          return state.mechanismBlockThree = data
        }
        if(state.mechanismBlockFour.price === 0){
          return state.mechanismBlockFour = data
        }
        if(state.mechanismBlockFive.price === 0){
          return state.mechanismBlockFive = data
        }
      }
    },
    selectedMechanismBlock: (state, data) => {
      return state.selectedMechanismBlock = data
    },
    closedMechanismBlock: (state, data) => {
      return state[data] = {
        price: 0,
        num: 0,
        fileURL: 'https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-o62bcwfxu7zofs36kb0sbh4wom52bbxxszhrx8zw4y.png'
      }
    },
    frameMaterial: (state, data) => {
      return state.material = data
    },
    frameMaterialColor: (state, data) => {
      return state.colorsFrame = data
    },

    onSelectFrame: (state, data) => {
      return state.mobileSelectFrame = data
    },
    onSelectMechanism: (state, data) => {
      return state.mobileSelectMechanism = data
    },
    onMobileBackground: (state, data) => {
      return state.mobileBackground = data
    },
    onMobileColorBackground: (state, data) => {
      return state.mobileColorBackground = data
    },

    activityBackground: (state, data) => {
      return state.activityBackground = data
    }
  },
  modules: {},
  getters: {
    res: state => {
      return state
    },
    mechanism: state => {
      return state.mechanism
    },
    frame: state => {
      return state.frame
    },

    images: state => {
      return state.images
    },
    colors: state => {
      return state.colors
    },

    numberPostsFrame: state => {
      return state.numberPostsFrame
    },
    material: state => {
      return state.material
    },
    frameOrientation: state => {
      return state.frameOrientation
    },
    colorsFrame: state => {
      return state.colorsFrame
    },



    cols: state => {
      return state.cols
    },
    background: state => {
      return state.background
    },
    backgroundImages: state => {
      return state.background[0].images
    },




    mechanismBlockOne: state => {
      return state.mechanismBlockOne
    },
    mechanismBlockTwo: state => {
      return state.mechanismBlockTwo
    },
    mechanismBlockThree: state => {
      return state.mechanismBlockThree
    },
    mechanismBlockFour: state => {
      return state.mechanismBlockFour
    },
    mechanismBlockFive: state => {
      return state.mechanismBlockFive
    },


    selectFrame: state => {
      return state.selectFrame
    },
    selectedMechanismBlock: state => {
      return state.selectedMechanismBlock
    },
    materialFrameItems: state => {
      return state.materialFrameItems
    },

    mechanismBlockArticle: state => {
      return state.mechanismBlockArticle
    },
    mechanismBlockPrice: state => {
      return state.mechanismBlockPrice =
          state.mechanismBlockOne.price +
          state.mechanismBlockTwo.price +
          state.mechanismBlockThree.price +
          state.mechanismBlockFour.price +
          state.mechanismBlockFive.price
    },
    attributeNum: state => {
      return state.attributeNum =
      state.mechanismBlockOne.num +
      state.mechanismBlockTwo.num +
      state.mechanismBlockThree.num +
      state.mechanismBlockFour.num +
      state.mechanismBlockFive.num +
      state.frame.horizontal[state.material][state.colorsFrame][state.numberPostsFrame].num
    },
    chooseMechanismItem: state => {
      return state.chooseMechanismItem
    },
    mechanismColor: state => {
      return state.mechanismColor
    },
    mechanismColor2: state => {
      return state.mechanismColor2
    },

    closedImg: state => {
      return state.closedImg
    },
    chooseMechanism: state => {
      return state.chooseMechanism
    },
    chooseFrame: state => {
      return state.chooseFrame
    },

    mobileSelectFrame: state => {
      return state.mobileSelectFrame
    },
    mobileSelectMechanism: state => {
      return state.mobileSelectMechanism
    },
    mobileBackground: state => {
      return state.mobileBackground
    },
    mobileColorBackground: state => {
      return state.mobileColorBackground
    },


    attribute: state => {
      return state.attribute
    },
    activityBackground: state => {
      return state.activityBackground
    }
  },
})
export default store
