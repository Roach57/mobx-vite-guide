import { observable, computed, action, autorun } from 'mobx';


class appleStore {
  apples = [
    {
      id: 0,
      weight: 233,
      isEaten: false
    },
    {
      id: 1,
      weight: 235,
      isEaten: true
    },
    {
      id: 2,
      weight: 256,
      isEaten: false
    }
  ]
  newAppleId = 3
  isPicking = false
  buttonText = '摘苹果'

  constructor() {
    // 将参数对象中的属性设置为 observable state
    // 将参数对象中的方法设置为 action
    makeAutoObservable(this)
  }

  /**  计算当前已吃和未吃苹果的状态 */
  status () {
    let status = {
      appleNow: {
        quantity: 0,
        weight: 0
      },
      appleEaten: {
        quantity: 0,
        weight: 0
      }
    };
    this.apples.forEach(apple => {
      let selector = apple.isEaten ? 'appleEaten' : 'appleNow';
      status[selector].quantity++;
      status[selector].weight += apple.weight;
    });
    return status;
  }


  /*摘苹果的异步操作*/
  pickApple () {

    /** 如果正在摘苹果，则结束这个thunk, 不执行摘苹果 */
    if (this.isPicking) {
      return;
    }

    this.isPicking = true;
    this.buttonText = '正在采摘...';
    fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
      .then(res => {
        /** 备注这里的url只是测试用的，这个是之前hackernews的api, 这里只是确保接口是通的，至于数据还是自己mock */
        let weight = Math.floor(200 + Math.random() * 50);
        this.isPicking = false;
        this.buttonText = '摘苹果';
        this.apples.push({
          id: this.newAppleId++,
          weight: weight,
          isEaten: false
        });
      });
  }

  eatApple () {

    let targetIndex = '';
    this.apples.forEach((apple, index) => {
      if (apple.id == appleId) {
        targetIndex = index
      }
    });
    this.apples[targetIndex].isEaten = true;
  }
}

export default appleStore;