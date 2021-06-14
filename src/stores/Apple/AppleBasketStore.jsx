import _ from 'lodash'
import AppleStore from './AppleStore'
import {
  makeObservable,
  observable,
  action,
  runInAction,
  computed
} from 'mobx'
import axios from "axios"

class AppleBasketStore {
  isPicking = false
  buttonText = '摘苹果'
  appleTotal = 0
  applelist = []
  constructor(applist) {
    if (applist) this.applelist = applist
    makeObservable(this, {
      applelist: observable,
      isPicking: observable,
      buttonText: observable,
      appleTotal: observable,
      // bound 用于更正 this
      pickApple: action.bound,
      filterisEatenAppleTotal: computed,
      filterBasketAppleTotal: computed,
    })
  }

  // 获取被吃掉的苹果数据
  get filterisEatenAppleTotal() {
    return this.countTotal("isEaten")
  }

  // 获取苹果篮子中的苹果数据
  get filterBasketAppleTotal() {
    return this.countTotal("noEaten")
  }

  // 苹果数据求和
  countTotal(check){
    let filterList = []
    let length = 0
    let weightTotal = 0
    if (check === "isEaten"){
      filterList = this.applelist.filter(apple => apple.isEaten)
    } else {
      filterList = this.applelist.filter(apple => !apple.isEaten)
    }
    length = filterList.length
    weightTotal = _.reduce(filterList, (result, value) => {
      return result + value.weight
    },0)

    return { length, weightTotal, filterList }
  }

  // 摘苹果
  async pickApple () {
    this.isPicking = true
    this.buttonText = '正在采摘...'

    let appleWeightList = await axios
      .get('https://hacker-news.firebaseio.com/v0/jobstories.json')
      .then(response => response.data)

    // 运行到 action 中
    runInAction(() => {
      let appleWeightListRandom = appleWeightList[Math.floor((Math.random()*appleWeightList.length))]
      let appleWeight = Math.floor(appleWeightListRandom / 100000)
      this.applelist.push(new AppleStore(appleWeight,this.appleTotal+1))
      this.appleTotal++
      this.isPicking = false
      this.buttonText = '摘苹果'
    })
  }
}

export default AppleBasketStore