import AppleItem from './AppleItem'
import '../../styles/appleBasket.scss'
import { observer } from 'mobx-react-lite';
// 通过 rootstore 的 useRootStore 来获取上下文中的内容
import { useRootStore } from "../../stores/RootStore"

function Apple() {
  const { appleBasketStore } = useRootStore()
  return (
    <div className="appleBusket">
      <div className="title">苹果篮子</div>
      <div className="stats">
        <div className="section">
          <div className="head">当前</div>
          <div className="content">
            {appleBasketStore.filterBasketAppleTotal.length} 个苹果，{appleBasketStore.filterBasketAppleTotal.weightTotal} 克
          </div>
        </div>
        <div className="section">
          <div className="head">已吃掉</div>
          <div className="content">
            {appleBasketStore.filterisEatenAppleTotal.length} 个苹果，{appleBasketStore.filterisEatenAppleTotal.weightTotal} 克
          </div>
        </div>
      </div>
      <div className="appleList">
        { appleBasketStore.filterBasketAppleTotal.filterList.length === 0 ?
          <div className="empty-tip" key="empty">苹果篮子空空如也</div>
          :
          appleBasketStore.filterBasketAppleTotal.filterList.map((apple, index) => (
            <AppleItem apple={apple} key={index} id={apple.position}/>
          ))
        }
      </div>
      <div className="btn-div">
        <button
          className={appleBasketStore.isPicking ? 'disabled' : ''}
          disabled={appleBasketStore.isPicking ? 'disabled' : ''}
          onClick={() => appleBasketStore.pickApple()}
        >{appleBasketStore.buttonText}</button>
      </div>
    </div>
  )
}

export default observer(Apple)

