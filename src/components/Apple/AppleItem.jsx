import { observer } from 'mobx-react-lite';
import '../../styles/appleItem.scss'

function AppleItem({apple,id}) {
  // console.log(apple,id)
  return (
    <div className="appleItem">
      <div className="apple">
        <div>đ</div>
      </div>
      <div className="info">
        <div className="name">çş˘čšć - {id} ĺˇ</div>
        <div className="weight">{apple.weight} ĺ</div>
      </div>
      <div className="btn-div">
        <button
          onClick={() => apple.eatApple()}
        > ĺć </button>
      </div>
    </div>
  )
}

export default observer(AppleItem)
