import { observer } from 'mobx-react-lite';
import '../../styles/appleItem.scss'

function AppleItem({apple,id}) {
  // console.log(apple,id)
  return (
    <div className="appleItem">
      <div className="apple">
        <div>🍎</div>
      </div>
      <div className="info">
        <div className="name">红苹果 - {id} 号</div>
        <div className="weight">{apple.weight} 克</div>
      </div>
      <div className="btn-div">
        <button
          onClick={() => apple.eatApple()}
        > 吃掉 </button>
      </div>
    </div>
  )
}

export default observer(AppleItem)
